import jwtDecode from "jwt-decode";
import { signOut } from "../../data/sources/redux/auth/auth.action";
import { AuthType } from "../../data/sources/redux/auth/auth.type";
import store from "../../data/sources/redux/store";
import { SsoDTO } from "../models/dtos/sso.dto";
import { signIn } from '../../data/sources/redux/auth/auth.action';
import { NavigateFunction } from "react-router-dom";

export default class AuthService { 
    checkAuthentication() {
        console.log("checkAuthentication 1", store.getState());

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
                store.dispatch({ 
                    type: AuthType.SET_ACCESS_TOKEN,
                    payload: access_token,
                });
            }
        }
        console.log("checkAuthentication 2", store.getState());
    }

    getAuthState() {
        return store.getState().auth;
    }

    signIn(username: string, password: string, navigate: NavigateFunction) {
        // store. signIn(username, password);

        navigate('/dash');
    }

}
