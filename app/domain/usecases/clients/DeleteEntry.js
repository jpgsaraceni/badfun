export default (ClientRepository) => {
    
    async function Execute(id) {

        // delete client from database
        ClientRepository.deleteEntry(id)
    }

    return Execute
}