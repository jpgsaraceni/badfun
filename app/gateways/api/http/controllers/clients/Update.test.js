import mongoose from 'mongoose'
import Sinon from 'sinon'
import { expect } from 'chai'

import Update from './Update.js'
import ClientRepositoryMock from '../../../../db/mongo/ClientRepository.mock.js'

describe('#controllers.Update.js', function() {
    it('should respond status 200 and update document', async function() {
        const testId = new mongoose.Types.ObjectId().toString()
        const testReqBody = {
            name: "updated name",
            email: "updated@email.com"
        }

        const req = {
            params: {
                id: testId,
            },
            body: testReqBody
        }

        const sendStatusSpy = Sinon.spy()

        const res = {
            sendStatus: sendStatusSpy
        }

        const clientRepositoryMock = new ClientRepositoryMock
        // repositoryStub defines the mocked ropository Update method behavior
        Sinon.stub(clientRepositoryMock, "Update").returns(
            testId,
            {
                name: testReqBody.name,
                email: testReqBody.email
            }
        )
        const update = Update(clientRepositoryMock)
        
        await update(req, res)

        expect(sendStatusSpy.calledOnce).to.be.true
        expect(sendStatusSpy.firstCall.args[0]).to.be.equal(200)
    })

    it('should respond status 400 when request missing id', async function() {
        const testReqBody = {
            name: "updated name",
            email: "updated@email.com"
        }

        const req = {
            params: {
            },
            body: testReqBody
        }

        const sendStatusSpy = Sinon.spy()

        const res = {
            sendStatus: sendStatusSpy
        }

        const clientRepositoryMock = new ClientRepositoryMock
        const update = Update(clientRepositoryMock)
        
        await update(req, res)

        expect(sendStatusSpy.calledOnce).to.be.true
        expect(sendStatusSpy.firstCall.args[0]).to.be.equal(400)
    })

    it('should respond status 404 when id does not exist', async function() {
        const testId = new mongoose.Types.ObjectId().toString()
        
        const testReqBody = {
            name: "updated name",
            email: "updated@email.com"
        }

        const req = {
            params: {
                id: testId,
            },
            body: testReqBody
        }

        const sendStatusSpy = Sinon.spy()

        const res = {
            sendStatus: sendStatusSpy
        }

        const clientRepositoryMock = new ClientRepositoryMock
        Sinon.stub(clientRepositoryMock, "Update").returns(null)
        const update = Update(clientRepositoryMock)
        
        await update(req, res)

        expect(sendStatusSpy.calledOnce).to.be.true
        expect(sendStatusSpy.firstCall.args[0]).to.be.equal(404)
    })

    it('should respond status 500 due to repository error', async function() {
        const testId = new mongoose.Types.ObjectId().toString()
        
        const testReqBody = {
            name: "updated name",
            email: "updated@email.com"
        }

        const req = {
            params: {
                id: testId,
            },
            body: testReqBody
        }

        const sendStatusSpy = Sinon.spy()

        const res = {
            sendStatus: sendStatusSpy
        }

        const clientRepositoryMock = new ClientRepositoryMock
        Sinon.stub(clientRepositoryMock, "Update").rejects()
        const update = Update(clientRepositoryMock)
        
        await update(req, res)

        expect(sendStatusSpy.calledOnce).to.be.true
        expect(sendStatusSpy.firstCall.args[0]).to.be.equal(500)
    })
})