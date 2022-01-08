import { UserModel } from "../user.model";

export class SsoDTO {
    token: string = "";
    refresh_token: string = "";
    expires_in: string = "";
    me: UserModel = new UserModel();

    constructor(){
    }
          
    static fromObject(payload: Partial<SsoDTO>): SsoDTO {
        console.log("fromObj", payload);
        let obj = new SsoDTO();

        obj.token  = payload.token || '';
        obj.refresh_token = payload.refresh_token || '';
        obj.expires_in = payload.expires_in || '';

        if (payload.me) 
            obj.me = UserModel.fromObject(payload.me!);

        console.log("fromObj 2", typeof(UserModel.fromObject(payload.me!)));

        return obj;
    }
}