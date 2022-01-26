import Fetch from "../../../../../domain/usecases/clients/Fetch"

export default (repository) => {
    const fetch = (req, res, next) => {

        // inject repository implementation in usecase
        const fetchCommand = Fetch(repository);
        
        fetchCommand.Execute()
            .then(result => {
                res.json(result)
            }).catch(err => {
                next(err)
            })
    }

    return fetch
}