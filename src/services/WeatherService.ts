import ApiService from './ApiService';

const getWeather = () => {
    return ApiService.get('/weather',
        {
            q: 'London,uk',
            lat: '0',
            lon: '0',
            id: '2172797',
            lang: 'null',
            units: '"metric" or "imperial"',
            mode: 'xml, html'
        });
}

const WeatherService = { getWeather }

export default WeatherService;