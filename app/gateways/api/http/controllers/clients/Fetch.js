import Fetch from "../../../../../domain/usecases/clients/Fetch.js"

export default (repository) => {
    const fetch = async (req, res) => {

        // inject repository implementation in usecase
        const fetchUseCase = Fetch(repository);
        
        await fetchUseCase(repository)
            .then(result => {
                res.json(result)
            }).catch((e) => {
                console.log(e)
                res.sendStatus(500)
            })
    }

    return fetch
}