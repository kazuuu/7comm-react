

export const LOGIN = "LOGIN";

export function setCurrentUser(username, password) {
    return {
        type: LOGIN,
        payload: {
            username: username,
            password: password
        }
    }
}