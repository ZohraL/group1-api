import * as path from "path"
import * as dotenv from "dotenv"
import * as chai from "chai"
import * as assert from "assert"
const expect = chai.expect

const envPath = path.resolve(__dirname + "/../.env.test")
dotenv.config({ path: envPath })

import { MovieRepository } from "../src/repository/movie.repository"

describe("Test movie repository", () => {
    
    it("Test if getMovie returns correct results", () => {
        
        return MovieRepository.getMovies()
            .then((results) => {
                expect(results.length).to.equal(4)
            })
            .catch(e => {
                console.log(e)
                assert.fail(e)
            })

    })
})