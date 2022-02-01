export default (ClientRepository) => {
    return async function Execute(id) {

        // delete client from database
        return await ClientRepository.DeleteEntry(id)
    }
}