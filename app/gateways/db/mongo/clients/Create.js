import Client from "./Model.js";

export default async (clientInstance) => {
    const newClient = new Client({
        name: clientInstance.name,
        email: clientInstance.email,
    })

    const returnObject = await newClient.save()
    return returnObject.id
}