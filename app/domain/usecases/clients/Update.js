// TODO:

export default (ClientRepository) => {
    return async function Execute(id, name, email) {

        // update client in database
        await ClientRepository.Update(id, name, email)
    }
}