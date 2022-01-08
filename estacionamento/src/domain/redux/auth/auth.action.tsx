//in useActions.ts file
// import { SET_CURRENT_USER, SET_ERRORS, LOADING_UI, CLEAR_ERRORS, LOGOUT, SET_LOADING } from '../types';
import { AuthType } from '../auth/auth.type';
import { UiType } from '../ui/ui.type';
// import { SET_CURRENT_USER, SET_ERRORS, LOADING_UI, CLEAR_ERRORS, LOGOUT, SET_LOADING } from '../types';
// import axios from 'axios';
import store from '../store';
import jwtDecode from 'jwt-decode'; //you must install jwt-decode using npm
import { LocalStorageSource } from '../../../data/sources/local_storage.source';

import { HttpClient } from '../../../core/config/http/http_client';
import { NavigateFunction } from 'react-router-dom';
import { authRepository } from '../../../data/repositories/auth.repository'


export const loginUser =  (userData: any, navigate: NavigateFunction) => (dispatch: any) => {
    console.log("login 1", userData);
    dispatch({ type: UiType.LOADING_UI })
    
    authRepository.signIn(userData.username, userData.password)
    .then((res) => {
        console.log('login 2', res);

        LocalStorageSource.setObject('access_token', res.data.token);
        LocalStorageSource.setObject('current_user', res.data.me);

        dispatch({
            type: AuthType.SET_CURRENT_USER,
            payload: res.data.me
        });
        console.log('login 3');

        // dispatch(getUserData());
        dispatch({ type: UiType.CLEAR_ERRORS });
        navigate('/dash');
        // window.location.href = '/dash'; // redirect to login page
        console.log('login 4');
    })
    .catch((err) => {
        console.log("login 5", err);
        dispatch({
            type: UiType.SET_ERRORS,
            payload: err.response.data
        });
    });
}

// // for fetching authenticated user information
// export const getUserData = () => (dispatch: any) => {
//     dispatch({ 
//         type: AuthType.SET_LOADING,
//         payload: true,
//     });

//     axios.get('/user')
//     .then(res => {
//         console.log('user data', res.data);
//         dispatch({
//             type: AuthType.SET_CURRENT_USER,
//             payload: res.data
//         });
//     }).catch(err => {
//         console.log(err);
//     });
// }

export const logoutUser = () => (dispatch: any) => {
    localStorage.removeItem('token');


    dispatch({
        type: AuthType.LOGOUT
    });

    window.location.href = '/login'; // redirect to login page
};

export const checkAuthentication = () => {
    const access_token = localStorage.access_token;
    const current_user = localStorage.current_user;

    if (access_token) {
        const decodedToken:any = jwtDecode(access_token);
        console.log(decodedToken.iss);
        if (decodedToken.exp * 1000 < Date.now()) {
            store.dispatch(logoutUser());
        } else {
            store.dispatch({ 
                type: AuthType.SET_CURRENT_USER,
                payload: current_user,
            });

        }
    }
}