import DeleteEntry from "../../../../../domain/usecases/clients/DeleteEntry.js"

export default (repository) => {
    const deleteEntry = (req, res) => {

        // inject repository implementation in usecase
        const deleteUseCase = DeleteEntry(repository);
        
        const {id} = req.params;

        if (!id) {
            res.sendStatus(400)
            return
        }

        deleteUseCase(id)
            .then(() => {
                res.sendStatus(200)
            }).catch((err) => {
                console.log(err)
                res.sendStatus(500) // TODO: id not found
            })
    }

    return deleteEntry
}