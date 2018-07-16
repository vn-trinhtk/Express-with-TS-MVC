import { BaseModel } from "../../core/src";

export interface UserModelParams {
	name: string;
	permission: string;
	email: string;
	domain: string;
}

export class UserModel extends BaseModel implements UserModelParams {
    public name: string = '';
    public permission: string = '';
    public email: string = '';
    public domain: string = '';
    private password: string = '';

    constructor(params: UserModelParams) {
        super();
        Object.assign(this, params);
    }

    getName(): string {
        return this.name;
    }

    getPermission(): string {
        return this.permission;
    }

    getEmail(): string {
        return this.email;
    }

    getDomain(): string {
        return this.domain;
    }
}

