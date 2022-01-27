import express from "express"

import Router from "./gateways/api/http/Router.js"
import Repository from "./gateways/db/mongo/clients/Repository.js"
import Connect from "./gateways/db/mongo/Connect.js"

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/', Router(Repository()))

Connect()
    .then(() => console.log("connected to mongodb"))
    .catch(() => console.log("connection to mongodb failed"))

app.listen('3000', () => console.log("listening on port 3000"))