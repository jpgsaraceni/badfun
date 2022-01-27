import mongoose from "mongoose"

const Schema = new mongoose.Schema({
    name: String,
    email: String,
})

const Client = new mongoose.model("Client", Schema)

export default Client