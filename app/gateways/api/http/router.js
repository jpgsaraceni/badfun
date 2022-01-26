const express = import('express')

const ClientsController = import('./controllers/ClientsController')

export default router = () => {
    const routes = express.Router()

    const controller = ClientsController()

    router.route('/')
        .get(controller.Fetch)
        .post(controller.delete);

    router.route('/:id')
        .delete(controller.deleteEntry)
        .put(controller.Update);

    routes.use()
    return routes
}