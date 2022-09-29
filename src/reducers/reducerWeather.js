import { FETCH_WEATHER } from "../actions";

export default function WeatherReducer(state = [], action) {
    console.log('action received', action);
    switch (action.type) {
        case FETCH_WEATHER:
            return [ action.payload.data, ...state ];
    }
    return state;
}