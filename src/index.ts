import * as dotenv from "dotenv"
import * as express from "express"
// read .env file before everything else
console.log(__dirname + "/.env.beta")
dotenv.config({path: __dirname + "/.env.beta" })
// import my services afterwards
// import { Config, DB } from "./service"
import { MovieRepository } from './repository/movie.repository';
const app = express()

app.get('/', (req: any, res: any) => {
  res.send({ message: "Ok, group1 we're (almost) the best" })
})


app.get('/movies', (req: any, res: any) => {


  MovieRepository.getMovies()
    .then((users: any) => {
      res.send(users)
    }).catch(e => {
      // logs?
      res.send(500, { error: e.toString() })
    })
})
app.listen(process.env.DB_PORT, () => {
  console.log(`Example app listening on port ${process.env.DB_PORT}`)
})
//DB.query("SELECT * FROM users")
//    .then(results => {
//        console.log(results)
//    }).catch(e => {
//        console.log(e)
//    })
