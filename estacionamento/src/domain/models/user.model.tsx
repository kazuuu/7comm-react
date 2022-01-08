export class UserModel {
    login: string = "";
    email: string = "";

    constructor(){
    }
          
    static fromObject(payload: Partial<UserModel>): UserModel {
        console.log("user.fromobj", payload)
        let obj = new UserModel();

        obj.login  = payload.login || '';
        obj.email = payload.email || '';
      
        console.log("user.fromobj 2", obj)

        return obj;
    }

    static fromJson(payload: string): UserModel {
        console.log("user.fromobj", payload)
        
        let obj = JSON.parse(payload);
      
        console.log("user.fromobj 2", obj)

        return this.fromObject(obj);
    }    
}