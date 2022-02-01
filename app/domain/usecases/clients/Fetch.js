export default (ClientRepository) => {
    return async function Execute() {
        
        // fetch clients from database
        return await ClientRepository.Fetch()
    }
}