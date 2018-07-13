export interface BaseModelParams {
	[key: string]: any;
}

export class BaseModel {

	static getModel(model: BaseModelParams, params: BaseModelParams): BaseModelParams {
		(<any> model).getDefaultValues = (): BaseModelParams => {
			return params;
		};
		for (let key in params) {
			if (model.hasOwnProperty(key)) {
				model[key] = params[key];
			}
		}
		return model;
	}

	getDefaultValues(): BaseModelParams {
		return {};
	}
}
