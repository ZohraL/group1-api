import * as dotenv from "dotenv"
import * as express from "express"
// read .env file before everything else
dotenv.config()
// import my services afterwards
import { Config, DB } from "./service"

const app = express()

app.get('/', (req: any, res: any) => {
  res.send({ message: "Ok" })
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
//DB.query("SELECT * FROM users")
//    .then(results => {
//        console.log(results)
//    }).catch(e => {
//        console.log(e)
//    })
