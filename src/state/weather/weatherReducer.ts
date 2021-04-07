import {ActionType} from './weatherAction';

const initialState = {
  loading: false,
  weather: null,
  error: null,
};

export default function weatherReducer(state = initialState, action: any) {
  switch (action.type) {
    case ActionType.GET_WEATHER_REQUEST:
      return {...state, loading: true, error: null};
    case ActionType.GET_WEATHER_SUCCESS:
      return {...state, loading: false, weather: action.payload};
    case ActionType.GET_WEATHER_FAILURE:
      return {...state, loading: false, weather: null, error: action.error};
    default:
      return state;
  }
}
