export default (ClientRepository) => {
    
    async function Execute() {

        // fetch clients from database
        return ClientRepository.fetch()
    }

    return Execute
}