import DeleteEntry from "../../../../../domain/usecases/clients/DeleteEntry.js"

export default (repository) => {
    const deleteEntry = async (req, res) => {

        // inject repository implementation in usecase
        const deleteUseCase = DeleteEntry(repository);
        
        const {id} = req.params;

        if (!id) {
            res.sendStatus(400)
            return
        }

        await deleteUseCase(id)
            .then((result) => {
                if (result == null) {
                    res.sendStatus(404)
                    return
                }
                res.sendStatus(200)
            }).catch(() => {
                res.sendStatus(500)
            })
    }

    return deleteEntry
}