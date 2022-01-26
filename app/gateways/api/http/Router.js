import express from 'express'

import ClientsController from './controllers/ClientsController'

export default () => {
    const router = express.Router()

    const controller = ClientsController()

    router.route('/')
        .get(controller.fetch)
        .post(controller.delete);

    router.route('/:id')
        .delete(controller.deleteEntry)
        .put(controller.update);

    router.use()
    return router
}