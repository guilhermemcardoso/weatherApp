import axios from 'axios';
import {REACT_APP_WEATHER_API_KEY} from "../../apiKey";

const API_KEY = REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

const instance = axios.create({
    baseURL: BASE_URL
});

export function getWeatherInfoById(id) {

    return instance.get(BASE_URL, {
        params: {
            APPID: API_KEY,
            id: id
        }
    });
}