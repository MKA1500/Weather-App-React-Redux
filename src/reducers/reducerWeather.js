import { FETCH_WEATHER } from "../actions";

export default function(state = [], action) {
    console.log('action received', action);
    switch (action.type) {
        case FETCH_WEATHER:
            return [ action.payload.data, ...state ];
            // creates new array (to not mute the state) and adss here the new
            // city at the beginngng. The same would be:
            // return state.concat([action.payload.data]);
            // .concat doesn't change the original array but crwates a new one
            // here new list of the cities with the recent added
    }
    return state;
}