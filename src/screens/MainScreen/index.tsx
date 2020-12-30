import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";

import { TextComponent } from "../../components/TextComponent";
import { ContainerComponent } from '../../components/ContainerComponent/index';
import { HeaderComponent } from "../../components/HeaderComponent";
import { ImageComponent } from "../../components/ImageComponent";

import { getWeatherRequest } from '../../redux/actions/weatherAction';

import AppStyles from "../../themes/AppStyles";

interface Props {
    getWeatherRequest: any;
    loading: boolean;
    weather: any;
    error: any;
}

class MainScreen extends Component<Props> {
    componentDidMount() {
        this.props.getWeatherRequest({
            q: 'Pasig',
            lat: '0',
            lon: '0',
            units: 'metric'
        });
    }

    getWeatherIcon = (iconName: string) => {
        return `http://openweathermap.org/img/wn/${iconName}@4x.png`
    }

    render() {
        const { loading, weather, getWeatherRequest, error } = this.props;
        console.log(weather);
        return (
            <ContainerComponent>
                <HeaderComponent />
                {
                    weather ?
                        <View style={AppStyles.alignItemsCenter}>
                            <ImageComponent source={{ uri: this.getWeatherIcon(weather.weather[0].icon) }} />
                            <TextComponent>{`${weather.main.temp} °C`}</TextComponent>
                            <TextComponent>{weather.weather[0].main}</TextComponent>
                            <TextComponent>{weather.weather[0].description}</TextComponent>
                        </View> : null
                }
            </ContainerComponent>
        );
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