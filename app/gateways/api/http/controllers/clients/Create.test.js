import mongoose from 'mongoose'
import Sinon from 'sinon'
import { expect } from 'chai'

import Create from './Create.js'
import ClientRepositoryMock from '../../../../db/mongo/ClientRepository.mock.js'

describe('#controllers.Create.js', function(){
    it('should respond status 201 and created id', async function(){

        // jsonSpy will be used to assess if res.status(...).json() was called in controller
        const jsonSpy = Sinon.spy()

        // mockStatus mocks express res.status method
        const mockStatus = (status) => {
            expect(status).to.be.equal(201)
            return { json: jsonSpy }
        }

        const req = {
            body: {
                "name": "test",
                "email": "test@email.com",
            }
        }

        const res = {
            status: mockStatus,
        }

        const testId = new mongoose.Types.ObjectId()

        const clientRepositoryMock = new ClientRepositoryMock
        // repositoryStub defines the mocked ropository Create method behavior
        Sinon.stub(clientRepositoryMock, "Create").returns(testId.toString())
        const create = Create(clientRepositoryMock)
        
        await create(req, res)

        expect(jsonSpy.firstCall.args[0].id).to.be.equal(testId.toString())
    })

    it('should return 400 for request with invalid payload', async function() {
        const req = {
            body: {
                "key": "unexpected value"
            }
        }
        const sendStatusSpy = Sinon.spy()
        const res = {
            sendStatus: sendStatusSpy
        }

        const clientRepositoryMock = new ClientRepositoryMock
        const create = Create(clientRepositoryMock)
        await create(req, res)

        expect(sendStatusSpy.calledOnce).to.be.true
        expect(sendStatusSpy.firstCall.args[0]).to.be.equal(400)
    })

    it('should return 400 for request with empty name in payload', async function() {
        const req = {
            body: {
                "name": "",
                "email": "something@email.com"
            }
        }
        const sendStatusSpy = Sinon.spy()
        const res = {
            sendStatus: sendStatusSpy
        }

        const clientRepositoryMock = new ClientRepositoryMock
        const create = Create(clientRepositoryMock)
        await create(req, res)

        expect(sendStatusSpy.calledOnce).to.be.true
        expect(sendStatusSpy.firstCall.args[0]).to.be.equal(400)
    })

    it('should return 400 for request with empty email in payload', async function() {
        const req = {
            body: {
                "name": "some name",
                "email": ""
            }
        }
        const sendStatusSpy = Sinon.spy()
        const res = {
            sendStatus: sendStatusSpy
        }

        const clientRepositoryMock = new ClientRepositoryMock
        const create = Create(clientRepositoryMock)
        await create(req, res)

        expect(sendStatusSpy.calledOnce).to.be.true
        expect(sendStatusSpy.firstCall.args[0]).to.be.equal(400)
    })

    it('should return 500 due to repository error', async function() {
        const req = {
            body: {
                "name": "some name",
                "email": "something@email.com"
            }
        }
        const sendStatusSpy = Sinon.spy()
        const res = {
            sendStatus: sendStatusSpy
        }

        const clientRepositoryMock = new ClientRepositoryMock
        Sinon.stub(clientRepositoryMock, "Create").throwsException
        const create = Create(clientRepositoryMock)
        await create(req, res)

        expect(sendStatusSpy.calledOnce).to.be.true
        expect(sendStatusSpy.firstCall.args[0]).to.be.equal(500)
    })
})