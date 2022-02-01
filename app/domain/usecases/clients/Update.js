export default (ClientRepository) => {
    return async function Execute(id, name, email) {

        // update client in database
        return await ClientRepository.Update(id, name, email)
    }
}