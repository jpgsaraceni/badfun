// TODO:

export default (ClientRepository) => {
    return async function Execute(id) {

        // delete client from database
        ClientRepository.deleteEntry(id)
    }
}