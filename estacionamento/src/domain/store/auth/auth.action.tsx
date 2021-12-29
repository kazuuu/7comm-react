import { Dispatch } from "redux";
import { UserModel } from "../../models";
import { AuthDispatchTypes, AuthType } from "./auth.type"

export const SetCurrentUser = (currentUser: UserModel) => async (dispatch: Dispatch<AuthDispatchTypes>) => {
    try {
    //   dispatch({
    //     type: AuthType.SET_CURRENT_USER,
    //     payload: currentUser
    //   })
  
    //   const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  
    dispatch({
        type: AuthType.SET_CURRENT_USER,
        payload: currentUser
      })
  
    } catch(e) {
    //   dispatch({
    //     type: POKEMON_FAIL
    //   })
    }
  };



export function setCurrentUser(username: string, email: string) {
    return {
        type: AuthType.SET_CURRENT_USER,
        payload: {
            username: username,
            email: email
        }
    }
}