import Env from "./config/env.js"
import express from "express"

import Router from "./gateways/api/http/Router.js"
import Connect from "./config/Connect.js"
import ClientRepository from "./gateways/db/mongo/ClientRepository.js"

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const MongoRepository = new ClientRepository()

app.use('/', Router(MongoRepository))

Connect()
    .then(() => console.log("connected to mongodb"))
    .catch(() => console.log("connection to mongodb failed"))

app.listen(Env.serverPort, () => console.log(`listening on port ${Env.serverPort}`))