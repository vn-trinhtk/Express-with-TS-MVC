import { Router, Request, Response } from 'express';
import { UserModel } from '../models';

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
            permission: 'admin',
            email: 'trinhtk@rak.aoi-sys.vn'

        });

        this.router.get('/', (req: Request, res: Response) => {
            res.render('index', {
                title: 'Hello',
                message: 'It is your first application, ' + user.getName()
            })
        })

    }
}

// Singleton
export const IndexController: Router = new IndexRouter().getRouter();
