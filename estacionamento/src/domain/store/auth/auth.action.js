

export const SET_CURRENT_USER = "SET_CURRENT_USER";

export function setCurrentUser(username, email) {
    return {
        type: SET_CURRENT_USER,
        payload: {
            username: username,
            email: email
        }
    }
}