import express from 'express'

import ClientsController from './controllers/ClientsController.js'

export default (repository) => {
    const router = express.Router()

    const controller = ClientsController()

    router.route('/')
        .get(controller.fetch(repository))
        .post(controller.create(repository));

    router.route('/:id')
        .delete(controller.deleteEntry(repository))
        .put(controller.update(repository));

    return router
}