//in useActions.ts file
// import { SET_CURRENT_USER, SET_ERRORS, LOADING_UI, CLEAR_ERRORS, LOGOUT, SET_LOADING } from '../types';
import { AuthType } from '../../data/sources/redux/auth.type';
import { UiType } from '../../data/sources/redux/ui.type';
// import { SET_CURRENT_USER, SET_ERRORS, LOADING_UI, CLEAR_ERRORS, LOGOUT, SET_LOADING } from '../types';
// import axios from 'axios';
import { Dispatch } from 'redux';
import store from '../../data/sources/redux/store';
import jwtDecode from 'jwt-decode'; //you must install jwt-decode using npm
import { LocalStorageSource } from '../../data/sources/local_storage.source';

import { HttpClient } from '../../core/config/http/http_client';
import { NavigateFunction } from 'react-router-dom';
import { authRepository } from '../../data/repositories/auth.repository'
import { UserModel } from '../models/user.model';
import { SsoDTO } from '../models/dtos/sso.dto';

export const signIn =  (userData: any, navigate: NavigateFunction) => async (dispatch: Dispatch) => {
    dispatch({ type: UiType.LOADING_UI })

    const ssoDTO: SsoDTO = await authRepository.signIn(userData.username, userData.password);

    LocalStorageSource.setString('access_token', ssoDTO.token);
    LocalStorageSource.setObject('current_user', ssoDTO.me);

    dispatch({
        type: AuthType.SET_CURRENT_USER,
        payload: ssoDTO.me,
    });

    // dispatch(getUserData());
    dispatch({ type: UiType.CLEAR_ERRORS });

    navigate('/dash');
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

export const signOut = () => (dispatch: any) => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('current_user');

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
            store.dispatch(signOut());
        } else {
            store.dispatch({ 
                type: AuthType.SET_CURRENT_USER,
                payload: current_user,
            });

        }
    }
}