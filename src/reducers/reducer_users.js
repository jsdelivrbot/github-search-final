import { FETCH_USERS } from '../actions/index';
import { LOAD_USERS } from '../actions/index';
import { FETCH_USER } from '../actions/index';

export default function(state=[], action) {
    switch(action.type) {
        case LOAD_USERS:
            return {
                loading: true
            }
        case FETCH_USERS:
            return {
                loading: false,
                payload: action.payload.items
            }
        case FETCH_USER:
            return action.payload;
    }

    return state;
}