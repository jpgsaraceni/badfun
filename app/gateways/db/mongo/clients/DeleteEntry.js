import Client from "./Model.js";

export default async (id) => {

    return await Client.findByIdAndDelete(id)
}