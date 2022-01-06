//in useActions.ts file
import { SET_CURRENT_USER, SET_ERRORS, LOADING_UI, CLEAR_ERRORS, LOGOUT, SET_LOADING } from '../types';
import axios from 'axios';

import { HttpClient } from '../../../core/config/http/http_client';

export const loginUser =  (userData: any, history: any) => (dispatch: any) => {
    dispatch({ type: LOADING_UI })

    let httpClient = new HttpClient();

    httpClient.post('http://localhost:8080/login', userData)
    .then((res) => {
        console.log('success', res.data);

        localStorage.setItem('access_token', JSON.stringify(res.data.token));
        localStorage.setItem('current_user', JSON.stringify(res.data.me));

        dispatch({
            type: SET_CURRENT_USER,
            payload: res.data.me
        });

        // axios.defaults.headers.common['Authorization'] = token; //setting authorize token to header in axios

        // dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS });
        // window.location.href = '/dash'; // redirect to login page
    })
    .catch((err) => {
        console.log(err);
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        });
    });
}

// for fetching authenticated user information
export const getUserData = () => (dispatch: any) => {
    dispatch({ 
        type: SET_LOADING,
        payload: true,
    });

    axios.get('/user')
    .then(res => {
        console.log('user data', res.data);
        dispatch({
            type: SET_CURRENT_USER,
            payload: res.data
        });
    }).catch(err => {
        console.log(err);
    });
}

export const logoutUser = () => (dispatch: any) => {
    localStorage.removeItem('token');

    delete axios.defaults.headers.common['Authorization']

    dispatch({
        type: LOGOUT
    });

    window.location.href = '/login'; // redirect to login page
};