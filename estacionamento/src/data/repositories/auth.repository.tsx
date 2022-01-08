import { HttpClient } from "../../core/config/http/http_client";
import { AxiosResponse } from 'axios';
import { SsoDTO } from "../../domain/models/dtos/sso.dto";

export const authRepository = {
    signIn,
    signOut,
};

async function signIn(username: string, password: string): Promise<SsoDTO> {
    let _axios = new HttpClient({authenticated: true}).instance;

    let body = {
        "username": username,
        password: password,
    }

    return _axios.post('/login', body)
    // .then(handleResponse)
    .then(res => {
        let ssoDTO: SsoDTO = SsoDTO.fromObject(res.data);

        return ssoDTO;
    });    
}


// function signIn(username: string, password: string): SsoDTO {
//     let _axios = new HttpClient({authenticated: true}).instance;

//     let body = {
//         "username": username,
//         password: password,
//     }

//     _axios.post('/login', body)
//     // .then(handleResponse)
//     .then(res => {
//         let ssoDTO: SsoDTO = SsoDTO.fromObject(res.data);

//         return ssoDTO;
//     });
// }

function signOut() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    // const requestOptions = {
    //     method: 'GET',
    //     headers: authHeader()
    // };

    // return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function handleResponse(response: any) {
    // return response.text().then(text => {
    //     const data = text && JSON.parse(text);
    //     if (!response.ok) {
    //         if (response.status === 401) {
    //             // auto logout if 401 response returned from api
    //             logout();
    //             location.reload(true);
    //         }

    //         const error = (data && data.message) || response.statusText;
    //         return Promise.reject(error);
    //     }

    //     return data;
    // });
}
