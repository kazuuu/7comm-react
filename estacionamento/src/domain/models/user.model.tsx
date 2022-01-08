export class UserModel {
    login: string = "";
    email: string = "";

    static fromJson(): UserModel {
        let obj = new UserModel();
      
        return obj;
    }
}