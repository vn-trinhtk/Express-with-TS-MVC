import { BaseModel } from "../../core/src";

export interface UserModelParams {
	name: string;
	permission: string;
	email: string
}

export class UserModel extends BaseModel implements UserModelParams {
    public name: string = '';
    public permission: string = '';
    public email: string = '';

    constructor(params: UserModelParams) {
        super();
        Object.assign(this, params);
    }

    getName(): string {
        return this.name;
    }
}

