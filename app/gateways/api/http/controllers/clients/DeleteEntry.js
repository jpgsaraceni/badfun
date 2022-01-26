import DeleteEntry from "../../../../../domain/usecases/clients/DeleteEntry"

export default (repository) => {
    const deleteEntry = (req, res, next) => {

        // inject repository implementation in usecase
        const deleteCommand = DeleteEntry(repository);
        
        const {id} = req.params;

        deleteCommand.Execute(id)
            .then(result => {
                res.json(result)
            }).catch(err => {
                next(err)
            })
    }

    return deleteEntry
}