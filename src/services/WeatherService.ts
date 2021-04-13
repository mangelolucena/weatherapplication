import ApiService from './apiService';

const getWeather = (params: any) => {
  return ApiService.get('/weather', params);
};

export {getWeather};
