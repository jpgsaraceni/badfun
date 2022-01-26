const Create = import("../../../../domain/usecases/clients/Create")

export default (repository) => {
    const create = (req, res, next) => {

        // inject repository implementation in usecase
        const createCommand = Create(repository);
        
        const {name, email} = req.body;

        createCommand.Execute(name, email)
            .then(result => {
                res.json(result)
            }).catch(err => {
                next(err)
            })
    }

    return create
}