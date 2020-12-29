export enum ActionType {
    GET_WEATHER_REQUEST = "GET_WEATHER_REQUEST",
    GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS",
    GET_WEATHER_FAILURE = "GET_WEATHER_FAILURE",
}

export const getWeatherRequest = (params: any) => ({
    type: ActionType.GET_WEATHER_REQUEST,
    payload: params
});

export const getWeatherSuccess = (params: any) => ({
    type: ActionType.GET_WEATHER_SUCCESS,
    payload: params
});

export const getWeatherFailure = (params: any) => ({
    type: ActionType.GET_WEATHER_FAILURE,
    payload: params
});
