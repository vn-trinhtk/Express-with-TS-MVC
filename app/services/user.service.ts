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

	totalItems: number = 0;

	constructor() {
		this.className = UserModel.name;
		this.parseClass = Parse.Object.extend(this.className);
		this.parseSvc = new this.parseClass();
	}

	_findAllByDomain(domain: string, limit: number = 20, page: number = 0) {
		return this.parseQuery =
			new Parse.Query(this.className)
				.limit(limit)
				.skip(limit * page)
				.equalTo("domain", domain)
				.find()
		;
	}

	list(limit: number = 20, page: number = 0) {
		/*
			How to use:
	        userSvc.list().then(
		        (results:any) => {
			        console.log(" Successfully ");
			        results.forEach( (res: any) => {
				        console.log(res.toJSON());
			        });
		        },
		        (error: any) => {
			        console.log(" An error has been occurred: ", error);
		        }
	        );
		 */
		let domain = 'example.com'; // TODO: get current user 's domain
		return this._findAllByDomain(domain, limit, page);
	}

	get(id: string) {
		/*
			How to use:
			service.get('id').then( (user) => {
				user.toJSON();
			})
		 */
		this.parseQuery = new Parse.Query(this.className);
		return this.parseQuery.get(id);
	}

	create(user: UserModel) {
		/*
			How to use:
			service.create(user).then((result: any) => {
			    console.log('Saved user id', result.id);
			});
		 */
		// TODO: verify existing of user by entered email.
		let parseQuery = new Parse.Query(this.className).equalTo('email', user.email);

		return parseQuery.first().then(
			(res: any) => {
				if (res) {
					console.log('User already existed!');
					throw new Error("User already existed");
				} else {
					this.parseSvc.save(user);
				}
			},
			(error: any) => {
				console.log("An error has been occurred: ", error);
				throw new Error("Opss, an error has been occurred while creating user :(");
			}
		);
	}

	update() {
		// TODO Implement later
	}

	delete(userID: any) {
		// TODO: only admin can delete
		let isAdmin: boolean = false; // TODO check permission of current user;
		if (isAdmin) {
			return this.get(userID).then( (user: any) => {
				if (user) {
					user.destroy().then(
						(obj: any) => {
							console.log("Destroy successfully, ID: ", userID)
						},
						(err: any) => {
							console.log("An error occurred while deleting user: ", err);
							throw new Error("Opss, An error occurred while deleting user :(.");
						}
					)
				}
			})
		} else {
			throw new Error("Permission not allowed!");
		}
	}
}