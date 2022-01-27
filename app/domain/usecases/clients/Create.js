import Client from "../../entities/Client.js"

// ClientRepository is an abstraction of the concrete implementation of
// the database, which avoids creating a dependency in the usecase, therefore
// respecting the Clean Arch inwards dependencies rule.
export default (ClientRepository) => {  
    return async function Execute(name, email) {
        // create new client instance in memory
        const newClient = new Client(name, email)

        // persist new client to database
        const id = await ClientRepository.Create(newClient)
        return id
    }
}