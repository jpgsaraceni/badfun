import Env from "./config/Env.js"
import express from "express"

import Router from "./gateways/api/http/Router.js"
import Repository from "./gateways/db/mongo/ClientRepository.js"
import Connect from "./config/Connect.js"

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/', Router(Repository()))

Connect()
    .then(() => console.log("connected to mongodb"))
    .catch(() => console.log("connection to mongodb failed"))

app.listen(Env.serverPort, () => console.log(`listening on port ${Env.serverPort}`))