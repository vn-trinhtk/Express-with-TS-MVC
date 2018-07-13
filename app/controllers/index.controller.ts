import { Router, Request, Response } from 'express';
import { UserModel } from '../models';
import { UserService } from "../services/user.service";

class IndexRouter {

    router: Router;
    getRouter() {
        return this.router;
    }

    constructor() {
        this.router = Router();
        this._initRouter();
    }

    _initRouter() {
        if (!this.router) return;
        let user: UserModel = new UserModel({
            name: 'Kingsley',
            permission: 'Admin',
            email: 'khtrinh.tran@gmail.com'
        });

        let userSvc: UserService = new UserService();
        userSvc.create(user).then((res: any) => {
            console.log('Saved user id', res.id);
        });
        // userSvc.list();

        // user.save();

        this.router.get('/', (req: Request, res: Response) => {
            res.render('index', {
                title: 'Hello',
                message: 'It is your first application'
            })
        })

    }
}

// Singleton
const indexRouter = new IndexRouter();
export const IndexController: Router = indexRouter.getRouter();
