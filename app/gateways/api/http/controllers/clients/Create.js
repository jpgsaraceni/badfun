import Create from "../../../../../domain/usecases/clients/Create.js"

export default (repository) => {
    const create = (req, res) => {

        // inject repository implementation in usecase
        const createUseCase = Create(repository);
        
        const {name, email} = req.body;

        if (!name || !email) {
            res.sendStatus(400)
            return
        }

        createUseCase(name, email)
            .then((id) => {
                res.status(201).json({id:id})
            }).catch(() => {
                res.sendStatus(500)
            })
    }

    return create
}