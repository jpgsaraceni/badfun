import Client from "./Model.js";

export default async (id, name, email) => {

    await Client.findByIdAndUpdate(id, { name: name, email: email })
}