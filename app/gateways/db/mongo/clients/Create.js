import Client from "./Model.js";

export default (clientInstance) => {
    const newClient = new Client({
        name: clientInstance.name,
        email: clientInstance.email,
    })

    newClient.save() // TODO: return ID
}