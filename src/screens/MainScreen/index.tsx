import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, ScrollView, Button } from "react-native";
import { map } from 'lodash';
import moment from 'moment'

import { TextMedium } from "../../components/TextComponent";
import { ContainerComponent } from '../../components/ContainerComponent/index';
import { ImageComponent } from "../../components/ImageComponent";
import { CardComponent } from '../../components/CardComponent/index';
import { TextCustomSize, TextExtraLarge } from '../../components/TextComponent/index';

import { getWeatherRequest } from '../../redux/actions/weatherAction';

import { styles } from "./styles";

function getWeatherIcon(iconName: string) {
  return `http://openweathermap.org/img/wn/${iconName}@4x.png`;
}

function renderWeatherDetails(weather: any) {
  const weatherItems = [
    {
      label: 'Description',
      value: weather.weather[0].description
    },
    {
      label: 'Feels like',
      value: `${weather.main.feels_like} °C`
    },
    {
      label: 'Humidity',
      value: `${weather.main.humidity} %`
    },
    {
      label: 'Pressure',
      value: `${weather.main.pressure} hPa`
    },
    {
      label: 'Clouds',
      value: `${weather.clouds.all} %`
    },
    {
      label: 'Wind',
      value: `${weather.wind.speed} meter/sec`
    },
    {
      label: 'Sunrise',
      value: moment.unix(weather.sys.sunrise).format('h:mm a')
    },
    {
      label: 'Sunset',
      value: moment.unix(weather.sys.sunset).format('h:mm a')
    }
  ];
  return (
    map(weatherItems, (items, i) =>
      <CardComponent key={i} style={styles.weatherDetailItems}>
        <TextMedium bold={true}>{`${items.label}: `}</TextMedium>
        <TextMedium>{items.value}</TextMedium>
      </CardComponent>
    )
  )
}


export default function MainScreen() {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.weatherReducer)
  const [sampleStatus, setSampleStatus] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setSampleStatus('timeout is called')
    }, 1000)
  }, [])

  useEffect(() => {
    // getCurrentLocation().then((location: any) => {
    //     this.props.getWeatherRequest({
    //         lat: location.latitude,
    //         lon: location.longitude,
    //         units: 'metric'
    //     });
    // });
    dispatch(getWeatherRequest({
      q: 'Pasig',
      units: 'metric'
    }))
  }, [state.weather]);
  return (
    <ContainerComponent>
      <Button testID='myButton' title='Sample' onPress={() => setSampleStatus('press')} />
      <TextExtraLarge testID='myText'>{sampleStatus}</TextExtraLarge>
      {
        state.weather ?
          <View style={styles.container}>
            <CardComponent style={styles.weatherMainContainer} >
              <View style={styles.rowContainer}>
                <View>

                  <View style={styles.weatherIconContainer}>
                    <ImageComponent source={{ uri: getWeatherIcon(state.weather.weather[0].icon) }} />
                  </View>
                </View>
                <View style={styles.weatherMainDataContainer}>
                  <TextExtraLarge testID={'weatherMain'} bold={true}>{state.weather.weather[0].main}</TextExtraLarge>
                  <TextCustomSize bold={true} fontSize={40}>{`${state.weather.main.temp} °C`}</TextCustomSize>
                  <TextMedium>{`${state.weather.main.temp_max} °C | ${state.weather.main.temp_min} °C`}</TextMedium>
                </View>
              </View>
              <TextMedium style={styles.date}>{moment().format('MMMM D, h:mm a')}</TextMedium>
            </CardComponent>
            <View>
              <ScrollView>{renderWeatherDetails(state.weather)}</ScrollView>
            </View>
          </View >
          : null
      }
    </ContainerComponent >
  )
}