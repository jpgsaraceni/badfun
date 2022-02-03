import mongoose from 'mongoose'
import env from '../../../config/env.js'
import Client from "./clients/Model.js"

export default class Setup {
    constructor(testName) {
        this.testName = testName
    }

    async testDbUp() {
        try {
            await mongoose.connect(`mongodb://${env.dbUrl}/${env.dbName}`)
            return console.log("connected to mongo test db")
        } catch {
            return console.log("connection to mongodb failed")
        }
    }

    async testDbDown() {
        await Client.deleteMany({})
    }
}