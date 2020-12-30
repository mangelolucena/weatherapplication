import { takeLatest, call, put } from "redux-saga/effects";
import { getWeatherSuccess, getWeatherFailure } from "../actions/weatherAction";
import WeatherService from '../../services/WeatherService';
import { ActionType } from '../actions/weatherAction'

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
    yield takeLatest(ActionType.GET_WEATHER_REQUEST, workerSaga);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action: { type: string, payload: {} }) {
    try {
        const response = yield call(WeatherService.getWeather, action.payload);
        // dispatch a success action to the store
        yield put(getWeatherSuccess(response.data));
    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put(getWeatherFailure(error));
    }
}