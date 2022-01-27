import Client from "./Model.js";

export default async (id, name, email) => {

    return await Client.findByIdAndUpdate(id, { name: name, email: email })
}