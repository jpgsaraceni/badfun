const Update = import("../../../../domain/usecases/Update")

export default (repository) => {
    const update = (req, res, next) => {

        // inject repository implementation in usecase
        const updateCommand = Update(repository);
        
        updateCommand.Execute()
            .then(result => {
                res.json(result)
            }).catch(err => {
                next(err)
            })
    }

    return update
}