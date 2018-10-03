import axios from 'axios';

const API_KEY = process.env.API_KEY;

export const FETCH_USERS = 'FETCH_USERS';

export function fetchUsers(username) {
    const github = axios.create({
        baseURL: 'https://api.github.com/',
    });

    github.defaults.headers.common.Authorization = `token ${API_KEY}`;

    const request = github.get(`/search/users?per_page=42&page=1&q=${username}`);

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({ type: FETCH_USERS, payload: data })
        });
    };
}