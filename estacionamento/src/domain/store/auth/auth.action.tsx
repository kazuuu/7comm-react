

export const SET_CURRENT_USER = "SET_CURRENT_USER";

export function setCurrentUser(username: string, email: string) {
    return {
        type: SET_CURRENT_USER,
        payload: {
            username: username,
            email: email
        }
    }
}