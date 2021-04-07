import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, ScrollView} from 'react-native';
import {map} from 'lodash';
import moment from 'moment';

import {Container, Text, Image, Card, Header} from 'components';

import {styles} from './styles';
import { getWeatherRequest } from 'state/weather/weatherAction';

function getWeatherIcon(iconName: string) {
  return `http://openweathermap.org/img/wn/${iconName}@4x.png`;
}

function renderWeatherDetails(weather: any) {
  const weatherItems = [
    {
      label: 'Description',
      value: weather.weather[0].description,
    },
    {
      label: 'Feels like',
      value: `${weather.main.feels_like} °C`,
    },
    {
      label: 'Humidity',
      value: `${weather.main.humidity} %`,
    },
    {
      label: 'Pressure',
      value: `${weather.main.pressure} hPa`,
    },
    {
      label: 'Clouds',
      value: `${weather.clouds.all} %`,
    },
    {
      label: 'Wind',
      value: `${weather.wind.speed} meter/sec`,
    },
    {
      label: 'Sunrise',
      value: moment.unix(weather.sys.sunrise).format('h:mm a'),
    },
    {
      label: 'Sunset',
      value: moment.unix(weather.sys.sunset).format('h:mm a'),
    },
  ];
  return map(weatherItems, (items, i) => (
    <Card key={i}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold'}}>{`${items.label}: `}</Text>
        <Text>{items.value}</Text>
      </View>
    </Card>
  ));
}

export default function MainScreen(props: any) {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.weatherReducer);

  useEffect(() => {
    // getCurrentLocation().then((location: any) => {
    //     this.props.getWeatherRequest({
    //         lat: location.latitude,
    //         lon: location.longitude,
    //         units: 'metric'
    //     });
    // });
    dispatch(
      getWeatherRequest({
        q: 'Pasig',
        units: 'metric',
      }),
    );
  }, [state.weather]);
  return (
    <Container>
      <Header onMenuPress={() => props.navigation.toggleDrawer()} />
      {state.weather ? (
        <View style={styles.container}>
          <Card>
            <Text style={{alignSelf: 'center'}}>
              {moment().format('MMMM D, h:mm a')}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={{
                  uri: getWeatherIcon(state.weather.weather[0].icon),
                }}
              />
              <Text
                h2
                style={{alignSelf: 'center', fontWeight: 'bold'}}
                testID={'weatherMain'}>
                {state.weather.weather[0].main}
              </Text>
            </View>
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: 'bold',
              }}>{`${state.weather.main.temp} °C`}</Text>
            <Text
              style={{
                alignSelf: 'center',
              }}>{`${state.weather.main.temp_max} °C | ${state.weather.main.temp_min} °C`}</Text>
          </Card>
          <ScrollView>{renderWeatherDetails(state.weather)}</ScrollView>
        </View>
      ) : null}
    </Container>
  );
}


