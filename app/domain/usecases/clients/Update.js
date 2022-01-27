// TODO:

export default (ClientRepository) => {
    return async function Execute(id, name, email) {

        // update client in database
        ClientRepository.create(id, name, email)
    }
}