import { FETCH_USERS } from '../actions/index';
import { FETCH_USER } from '../actions/index';

export default function(state=[], action) {
    switch(action.type) {
        case FETCH_USERS:
            return action.payload.items;
        case FETCH_USER:
            return action.payload;
    }

    return state;
}