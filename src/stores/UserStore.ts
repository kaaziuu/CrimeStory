import { makeAutoObservable } from "mobx";
import User from "../service/user/models/Response/User";

export default class UseStore {
    private _user?: User;
    private _jwt?: string;

    constructor() {
        makeAutoObservable(this);
    }

    get user() {
        return this._user;
    }

    get isLogged() {
        return this.user !== undefined;
    }

    get jwt() {
        return this._jwt;
    }
}
