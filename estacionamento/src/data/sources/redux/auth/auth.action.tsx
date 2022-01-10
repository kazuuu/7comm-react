//in useActions.ts file
// import { SET_CURRENT_USER, SET_ERRORS, LOADING_UI, CLEAR_ERRORS, LOGOUT, SET_LOADING } from '../types';
// import { SET_CURRENT_USER, SET_ERRORS, LOADING_UI, CLEAR_ERRORS, LOGOUT, SET_LOADING } from '../types';
// import axios from 'axios';
import { Dispatch } from 'redux';
import jwtDecode from 'jwt-decode'; //you must install jwt-decode using npm

import { NavigateFunction } from 'react-router-dom';
import { UiType } from '../ui/ui.type';
import { authRepository } from '../../../repositories/auth.repository';
import { SsoDTO } from '../../../../domain/models/dtos/sso.dto';
import { LocalStorageSource } from '../../local_storage.source';
import { AuthType } from './auth.type';

export const signIn =  (username: string, password: string, navigate: NavigateFunction) => async (dispatch: Dispatch) => {
    dispatch({ type: UiType.LOADING_UI })

    const ssoDTO: SsoDTO = await authRepository.signIn(username, password);

    LocalStorageSource.setString('access_token', ssoDTO.token);
    LocalStorageSource.setObject('current_user', ssoDTO.me);

    dispatch({
        type: AuthType.SET_ACCESS_TOKEN,
        payload: ssoDTO.token,
    });
    
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
