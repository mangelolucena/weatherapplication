import { create } from 'apisauce'
import Config from "react-native-config"

const api = create({
    baseURL: Config.BASE_URL,
    headers: {
        'x-rapidapi-key': Config.KEY,
        'x-rapidapi-host': Config.HOST
    }
});

const get = (endpoint: string, params?: {}) => {
    return api.get(endpoint, params)
}

const ApiService = { get };

export default ApiService;