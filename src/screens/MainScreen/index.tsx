import React, { Component } from "react";
import { connect } from "react-redux";

import { getWeatherRequest } from '../../redux/actions/weatherAction';

import { View, Button, Text } from "react-native";

interface Props {
    getWeatherRequest: any;
    loading: boolean;
    weather: Object;
    error: Object;
}

class MainScreen extends Component<Props> {
    public componentDidMount() {
        this.props.getWeatherRequest();
    }
    render() {
        const { loading, weather, getWeatherRequest, error } = this.props;

        return (
            <View>
                <Button title='asd' onPress={() => console.log(weather)} />
                {
                    loading ? <Text>Loading</Text> : null
                }
            </View>
        );
    }
}

const mapStateToProps = (state: any) => ({
    loading: state.weatherReducer.fetching,
    weather: state.weatherReducer.weather,
    error: state.weatherReducer.error
})

const mapDispatchToProps = (dispatch: any) => ({
    getWeatherRequest: (params: any) => dispatch(getWeatherRequest(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);