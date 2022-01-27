import Client from "./Model.js";

export default async () => {

    const clientList = await Client.find({})
    const returnArray = []

    clientList.forEach(element => {
        const {id, name, email} = element 
        returnArray.push({id, name, email})
    });
   
    return returnArray
}