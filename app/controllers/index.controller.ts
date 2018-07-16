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

		this.router.get('/', (req: Request, res: Response) => {
			let user: UserModel = new UserModel({
				name: 'Kingsley',
				permission: 'Admin',
				email: 'khtrinh22.tran@gmail.com',
				domain: 'example.com'
			});

			let userSvc: UserService = new UserService();

			userSvc.create(user).then((result: any) => {
				console.log('Saved user id', result.toJSON());
			}, (err: any) => {
				res.status(403);
				res.render('error', {
					title: 'Opss :(...!',
					message: err
				});
			});
			//
			// userSvc.list().then(
			//    (results:any) => {
			//        console.log(" Successfully ");
			//        results.forEach( (res: any) => {
			//         console.log(res.toJSON());
			//        });
			//    },
			//    (error: any) => {
			//        console.log(" An error has been occurred: ", error);
			//    });

			// try {
			//    userSvc.delete('GZH32cuDL4').then(
			//        (user:any) => {
			//         console.log(user.toJSON());
			//        }
			//    );
			// } catch (e) {
			//    res.status(403);
			//    res.render('error', {
			//        title: 'Opss :(...!',
			//        message: e
			//    });
			// }

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
