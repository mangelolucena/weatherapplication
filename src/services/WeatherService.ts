import ApiService from './ApiService';

const getWeather = (params: any) => {
    return ApiService.get('/weather', params);
}

const WeatherService = { getWeather }

export default WeatherService;