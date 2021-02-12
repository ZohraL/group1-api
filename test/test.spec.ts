import { Movie } from './../src/model/Movie';

import * as chai from "chai";
import chaiHttp from 'chai-http';
const expect = chai.expect;
const app = require('curl-request');


chai.use(chaiHttp);

const data = {
    id: 4,
    name: 'Retour vers le Futur',
    //type: 'fantaisie'
}
const movie = new Movie(data);

describe("test Model", () => {
console.log(movie, data)
    it("The model is hydrated :-)", () => {

        for( let prop in movie ){
            
            console.log(prop, "PROP", movie[prop], data[prop]);
            
            expect(movie[prop]).to.equal(data[prop]);
        }
    })
})

describe('TEST: API', () => {
    it("it should return 200", (done) => {
        chai.request(app).get("/")
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
})

