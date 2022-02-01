import Repository from "../../../contracts/repository.js";
import Client from "./clients/Model.js";
import Create from "./clients/Create.js";
import Fetch from "./clients/Fetch.js";
import Update from "./clients/Update.js";
import DeleteEntry from "./clients/DeleteEntry.js";

export default class ClientRepository extends Repository {
    async Create(clientInstance) {
        return await Create(clientInstance)
    }

    async DeleteEntry(id) {
        return await DeleteEntry(id)
    }

    async Fetch(){
        return await Fetch()
    }

    async Update(id, name, email){
        return await Update(id, name, email)
    }
}
