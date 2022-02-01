import Update from "../../../../../domain/usecases/clients/Update.js"

export default (repository) => {
    const update = async (req, res) => {

        // inject repository implementation in usecase
        const updateUseCase = Update(repository);

        const {name, email} = req.body;
        const {id} = req.params;

        if (!name || !email || !id) {
            res.sendStatus(400)
            return
        }

        await updateUseCase(id, name, email)
        .then((result) => {
            if (result == null) {
                res.sendStatus(404)
            } else {
                res.sendStatus(200)
            }
            }).catch(err => {
                console.log(err)
                res.sendStatus(500) 
            })
    }

    return update
}