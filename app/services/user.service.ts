import { Parse } from "./parse.service";
import { UserModel } from "../models";

export class UserService {

    // Class of Model
    className: string = '';
    // Class of parse object saved in DB.
    parseClass: any = null;
    // Service to communicate with DB
    parseSvc: any = null;
    // Parse Query
    parseQuery: any = null;

    constructor() {
        this.className = UserModel.name;
        this.parseClass = Parse.Object.extend(this.className);
        this.parseSvc = new this.parseClass();
        this.parseQuery = new Parse.Query(this.className);
    }

    list() {

    }

    get(id: string) {
        return this.parseQuery.get(id);
    }

    create(user: UserModel) {
        return this.parseSvc.save(user);
    }

    update() {

    }

    delete() {

    }
}