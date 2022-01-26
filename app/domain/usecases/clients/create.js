const Client = import("../../entities/client.js")

// ClientRepository is an abstraction of the concrete implementation of
// the database, which avoids creating a dependency in the usecase, therefore
// respecting the Clean Arch inwards dependencies rule.
export default (ClientRepository) => {
    
    async function create(name, email) {
        if (!name || !email) {
            throw new Error('validation failed');
        }

        // create new client instance in memory
        const newClient = new Client(name, email)

        // persist new client to database
        newClient = ClientRepository.create(newClient)
    }

    return create
}