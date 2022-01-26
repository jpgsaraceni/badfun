export default (ClientRepository) => {
    
    async function fetch() {

        // fetch clients from database
        return ClientRepository.fetch()
    }

    return fetch
}