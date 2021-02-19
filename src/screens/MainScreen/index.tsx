import React, { Component } from "react";
import { connect } from "react-redux";
import { View, ScrollView } from "react-native";
import { map } from 'lodash';
import moment from 'moment'

import { TextMedium } from "../../components/TextComponent";
import { ContainerComponent } from '../../components/ContainerComponent/index';
import { ImageComponent } from "../../components/ImageComponent";

import { getWeatherRequest } from '../../redux/actions/weatherAction';

import { TextCustomSize, TextExtraLarge } from '../../components/TextComponent/index';
import { styles } from "./styles";
import { CardComponent } from '../../components/CardComponent/index';


interface Props {
  getWeatherRequest: any;
  loading: boolean;
  weather: any;
  error: any;
}

class MainScreen extends Component<Props> {
  componentDidMount() {
    this.getWeather();
  }

  getWeather() {
    // getCurrentLocation().then((location: any) => {
    //     this.props.getWeatherRequest({
    //         lat: location.latitude,
    //         lon: location.longitude,
    //         units: 'metric'
    //     });
    // });
    this.props.getWeatherRequest({
      q: 'Pasig',
      units: 'metric'
    });
  }

  getWeatherIcon = (iconName: string) => {
    return `http://openweathermap.org/img/wn/${iconName}@4x.png`;
  }

  render() {
    const { loading, weather, error } = this.props;
    return (
      <ContainerComponent>
        {
          weather ?
            <View style={styles.container}>
              <CardComponent style={styles.weatherMainContainer} >
                <View style={styles.rowContainer}>
                  <View>
                    <View style={styles.weatherIconContainer}>
                      <ImageComponent source={{ uri: this.getWeatherIcon(weather.weather[0].icon) }} />
                    </View>
                  </View>
                  <View style={styles.weatherMainDataContainer}>
                    <TextExtraLarge testID={'weatherMain'} bold={true}>{weather.weather[0].main}</TextExtraLarge>
                    <TextCustomSize bold={true} fontSize={40}>{`${weather.main.temp} °C`}</TextCustomSize>
                    <TextMedium>{`${weather.main.temp_max} °C | ${weather.main.temp_min} °C`}</TextMedium>
                  </View>
                </View>
                <TextMedium style={styles.date}>{moment().format('MMMM D, h:mm a')}</TextMedium>
              </CardComponent>
              <View>
                <ScrollView>{this.renderWeatherDetails(weather)}</ScrollView>
              </View>
            </View >
            : null
        }
      </ContainerComponent >
    );
  }

  renderWeatherDetails(weather: any) {
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
}

const mapStateToProps = (state: any) => ({
  loading: state.weatherReducer.loading,
  weather: state.weatherReducer.weather,
  error: state.weatherReducer.error
})

const mapDispatchToProps = (dispatch: any) => ({
  getWeatherRequest: (params: any) => dispatch(getWeatherRequest(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);