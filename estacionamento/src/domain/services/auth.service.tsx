import jwtDecode from "jwt-decode";
import { signOut } from "../../data/sources/redux/auth/auth.action";
import { AuthType } from "../../data/sources/redux/auth/auth.type";
import store from "../../data/sources/redux/store";
import { SsoDTO } from "../models/dtos/sso.dto";
import { NavigateFunction } from "react-router-dom";
import { authRepository } from "../../data/repositories/auth.repository";
import { LocalStorageSource } from "../../data/sources/local_storage.source";
import { UiType } from "../../data/sources/redux/ui/ui.type";

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

    async signIn(username: string, password: string, navigate: NavigateFunction) {
        store.dispatch({ type: UiType.LOADING_UI })
          
        authRepository.signIn(username, password).then((ret) => {
            const ssoDTO: SsoDTO = ret;

            LocalStorageSource.setString('access_token', ssoDTO.token);
            LocalStorageSource.setObject('current_user', ssoDTO.me);

            console.log("clear:");
            store.dispatch({
                type: AuthType.SET_ACCESS_TOKEN,
                payload: ssoDTO.token,
            });
        
            store.dispatch({
                type: AuthType.SET_CURRENT_USER,
                payload: ssoDTO.me,
            });
    
            store.dispatch({ type: UiType.CLEAR_ERRORS });
    
            navigate('/dash');
        });
    }


    async signOut(navigate: NavigateFunction) {
        LocalStorageSource.removeItem('access_token');
        LocalStorageSource.removeItem('current_user');

        store.dispatch({
            type: AuthType.LOGOUT
        });
        
        navigate('/login');
    };
}
