import axios from 'axios';

const API_KEY = '';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, countryCode) {
    const url = `${ROOT_URL}&q=${city},${countryCode}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request // when the payload is a Promise, Redux middleware stops 
        // the action and the request finishes, it dispatches to the reducer a new action 
        // of the same type but of the payload of resolve request
    };
}