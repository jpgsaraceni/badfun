const DeleteEntry = import("../../../../domain/usecases/DeleteEntry")

export default (repository) => {
    const deleteEntry = (req, res, next) => {

        // inject repository implementation in usecase
        const deleteCommand = DeleteEntry(repository);
        
        const {id} = req.body;

        deleteCommand.Execute(id)
            .then(result => {
                res.json(result)
            }).catch(err => {
                next(err)
            })
    }

    return deleteEntry
}