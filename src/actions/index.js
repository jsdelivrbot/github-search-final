import axios from 'axios';

const API_KEY = process.env.API_KEY;

export const LOAD_USERS = 'LOAD_USERS';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER = 'FETCH_USER';

const github = axios.create({
    baseURL: 'https://api.github.com/',
});

github.defaults.headers.common.Authorization = `token ${API_KEY}`;

export function fetchUsers(username) {
    dispatch({ type: LOAD_USERS });
    const request = github.get(`/search/users?per_page=42&page=1&q=${username}`);

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({ type: FETCH_USERS, payload: data });
        });
    };
}

export function fetchUser(username) {
    const request = github.get(`/users/${username}`);

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({ type: FETCH_USER, payload: data })
        });
    };
}