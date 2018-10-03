import { FETCH_USERS } from '../actions/index';

export default function(state=[], action) {
    switch(action.type) {
        case FETCH_USERS:
            console.log("Here");
            const state = action.payload;
            console.log("Here in reducer",state);
            return state;
    }

    return state;
}