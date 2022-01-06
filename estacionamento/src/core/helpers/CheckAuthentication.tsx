import jwtDecode from 'jwt-decode'; //you must install jwt-decode using npm
import { logoutUser } from '../../domain/redux/actions/userActions'
import store from '../../domain/redux/store';
import axios from 'axios';
import { SET_CURRENT_USER } from '../../domain/redux/types'

export const CheckAuthentication = () => {
    const access_token = localStorage.access_token;
    const current_user = localStorage.current_user;

    if (access_token) {
        const decodedToken:any = jwtDecode(access_token);
        console.log(decodedToken.iss);
        if (decodedToken.exp * 1000 < Date.now()) {
            store.dispatch(logoutUser());
        } else {
            store.dispatch({ 
                type: SET_CURRENT_USER,
                payload: current_user,
            });

            axios.defaults.headers.common['Authorization'] = `Bearer ${current_user}`;
        }
    }
}
