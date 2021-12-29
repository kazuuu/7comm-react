import { UserModel } from "../../models";

export enum AuthType {
    SET_CURRENT_USER = "SET_CURRENT_USER",
    SIGN_IN = "SIGN_IN"
} 

export interface AuthSignIn {
  type: typeof AuthType.SIGN_IN;
}

export interface AuthSetCurrentUser {
    type: typeof AuthType.SET_CURRENT_USER,
    payload: UserModel
  }

export type AuthDispatchTypes =  AuthSignIn | AuthSetCurrentUser;