import Fetch from "../../../../../domain/usecases/clients/Fetch.js"

export default (repository) => {
    const fetch = (req, res) => {

        // inject repository implementation in usecase
        const fetchUseCase = Fetch(repository);
        
        fetchUseCase(repository)
            .then(result => {
                res.json(result)
            }).catch(() => {
                res.sendStatus(500)
            })
    }

    return fetch
}