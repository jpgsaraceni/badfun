import Client from "./Model.js";

export default async (id) => {

    await Client.findByIdAndDelete(id)
}