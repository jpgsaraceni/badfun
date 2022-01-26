export default (ClientRepository) => {
    
    async function Execute(id, name, email) {
        if (!name || !email) {
            throw new Error('validation failed');
        }

        // update client in database
        ClientRepository.create(id, name, email)
    }

    return Execute
}