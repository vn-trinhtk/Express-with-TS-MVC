class ParseService {

    svc: any = null;
    getSvc() {
        return this.svc;
    }

    constructor() {
        this.svc = require('parse/node');
        this.svc.initialize("w1nhWJZVd4kdooQDYkyP98byKV7biZvlILfoeaFO", "vucAr0kmD6rnZGRzAKLekquvQvLqZZ78gkfwFUqK");
        this.svc.serverURL = 'http://localhost:1337/parse';
    }

}
// Singleton
const parseService = new ParseService();
export const Parse: any = parseService.getSvc();