import axios from 'axios';

export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SIGNIN = "SIGNIN";

export function setCurrentUser(username: string, email: string) {
    return {
        type: SET_CURRENT_USER,
        payload: {
            username: username,
            email: email
        }
    }
}

export function signIn(username: string, password: string) {
    // Post(API username, password)
    // { access_token, user}
    // set local storage { access_token, user}

    console.log("Post Sign In");
    console.log("Save User and Token on Local Storage");
    console.log("Set new Redux Auth State");

    console.log(username);

    return {
        type: SIGNIN,
        payload: {
            username: username,
            email: username+"@teste.com",
        }
    }
}