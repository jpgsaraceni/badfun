import mongoose from 'mongoose'
import Sinon from 'sinon'
import { expect } from 'chai'

import DeleteEntry from './DeleteEntry.js'
import ClientRepositoryMock from '../../../../db/mongo/ClientRepository.mock.js'

describe('#controllers.DeleteEntry.js', function() {
    it('should respond status 200', async function() {
        const testId = new mongoose.Types.ObjectId()

        const req = {
            params: {
                id: testId.toString(),
            }
        }

        const sendStatusSpy = Sinon.spy()

        const res = {
            sendStatus: sendStatusSpy
        }

        const clientRepositoryMock = new ClientRepositoryMock
        // repositoryStub defines the mocked ropository DeleteEntry method behavior
        Sinon.stub(clientRepositoryMock, "DeleteEntry").returns("ok")
        const deleteEntry = DeleteEntry(clientRepositoryMock)
        
        await deleteEntry(req, res)

        expect(sendStatusSpy.calledOnce).to.be.true
        expect(sendStatusSpy.firstCall.args[0]).to.be.equal(200)
    })

    it('should respond status 400 when request missing id', async function() {
        const req = {
            params: {}
        }

        const sendStatusSpy = Sinon.spy()

        const res = {
            sendStatus: sendStatusSpy
        }

        const clientRepositoryMock = new ClientRepositoryMock
        const deleteEntry = DeleteEntry(clientRepositoryMock)
        
        await deleteEntry(req, res)

        expect(sendStatusSpy.calledOnce).to.be.true
        expect(sendStatusSpy.firstCall.args[0]).to.be.equal(400)
    })

    it('should respond status 404 when id does not exist', async function() {
        const testId = new mongoose.Types.ObjectId().toString()
        
        const req = {
            params: {
                id: testId
            }
        }

        const sendStatusSpy = Sinon.spy()

        const res = {
            sendStatus: sendStatusSpy
        }

        const clientRepositoryMock = new ClientRepositoryMock
        Sinon.stub(clientRepositoryMock, "DeleteEntry").returns(null)
        const deleteEntry = DeleteEntry(clientRepositoryMock)
        
        await deleteEntry(req, res)

        expect(sendStatusSpy.calledOnce).to.be.true
        expect(sendStatusSpy.firstCall.args[0]).to.be.equal(404)
    })

    it('should respond status 500 due to repository error', async function() {
        const testId = new mongoose.Types.ObjectId().toString()
        
        const req = {
            params: {
                id: testId
            }
        }

        const sendStatusSpy = Sinon.spy()

        const res = {
            sendStatus: sendStatusSpy
        }

        const clientRepositoryMock = new ClientRepositoryMock
        Sinon.stub(clientRepositoryMock, "DeleteEntry").rejects()
        const deleteEntry = DeleteEntry(clientRepositoryMock)
        
        await deleteEntry(req, res)

        expect(sendStatusSpy.calledOnce).to.be.true
        expect(sendStatusSpy.firstCall.args[0]).to.be.equal(500)
    })
})