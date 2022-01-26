export default (ClientRepository) => {
    
    async function deleteEntry(id) {

        // delete client from database
        ClientRepository.deleteEntry(id)
    }

    return deleteEntry
}