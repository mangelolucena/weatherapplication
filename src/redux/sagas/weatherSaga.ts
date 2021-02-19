import { takeLatest, call, put } from "redux-saga/effects";
import { getWeatherSuccess, getWeatherFailure } from "../actions/weatherAction";
import WeatherService from '../../services/WeatherService';
import { ActionType } from '../actions/weatherAction'

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
    yield takeLatest(ActionType.GET_WEATHER_REQUEST, workerSaga);
}

const dummyWeatherData = {
    "data": {
        "coord": {
            "lon": 121.06,
            "lat": 14.59
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 303.2,
            "feels_like": 306.06,
            "temp_min": 302.15,
            "temp_max": 304.26,
            "pressure": 1011,
            "humidity": 62
        },
        "visibility": 10000,
        "wind": {
            "speed": 2.6,
            "deg": 80
        },
        "clouds": {
            "all": 75
        },
        "dt": 1609564662,
        "sys": {
            "type": 1,
            "id": 8160,
            "country": "PH",
            "sunrise": 1609539664,
            "sunset": 1609580279
        },
        "timezone": 28800,
        "id": 1694579,
        "name": "Pasig",
        "cod": 200
    }
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action: { type: string, payload: {} }) {
    const enableApiCall = false // set to false to use dummy data
    try {
        let response: any = null;
        if (enableApiCall) {
            response = yield call(WeatherService.getWeather, action.payload);
        } else {
            response = dummyWeatherData;
        }
        // dispatch a success action to the store
        yield put(getWeatherSuccess(response.data));
    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put(getWeatherFailure(error));
    }
}