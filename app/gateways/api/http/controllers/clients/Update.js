import Update from "../../../../../domain/usecases/clients/Update"

export default (repository) => {
    const update = (req, res, next) => {

        // inject repository implementation in usecase
        const updateCommand = Update(repository);

        const {name, email} = req.body;
        const {id} = req.params;
        

        updateCommand.Execute(id, name, email)
            .then(result => {
                res.json(result)
            }).catch(err => {
                next(err)
            })
    }

    return update
}