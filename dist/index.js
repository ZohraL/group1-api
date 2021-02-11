"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const express = require("express");
// read .env file before everything else

dotenv.config({path: '.env.beta'}); 

// import my services afterwards
// import { Config, DB } from "./service"
const movie_repository_1 = require("./repository/movie.repository");
const app = express();
app.get('/', (req, res) => {
    res.send({ message: "Ok" });
});
app.get('/movies', (req, res) => {
    movie_repository_1.MovieRepository.getMovies()
        .then((users) => {
        res.send(users);
    }).catch(e => {
        // logs?
        res.send(500, { error: e.toString() });
    });
});
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
//DB.query("SELECT * FROM users")
//    .then(results => {
//        console.log(results)
//    }).catch(e => {
//        console.log(e)
//    })
