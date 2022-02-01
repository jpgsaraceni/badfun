import mongoose from 'mongoose'
import Sinon from 'sinon'
import { expect } from 'chai'

import Create from './Create.js'
import ClientRepositoryMock from '../../../../db/mongo/ClientRepository.mock.js'

describe('#controllers.Create.js', function(){
    it('should return status 201 and created id', async function(){

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

        // repositoryStub defines the mocked ropository Create method behavior
        const clientRepositoryMock = new ClientRepositoryMock
        const repositoryStub = Sinon.stub(clientRepositoryMock, "Create").returns(testId.toString())
        const create = Create(clientRepositoryMock)
        
        await create(req, res)

        expect(repositoryStub.calledOnce).to.be.true
        expect(jsonSpy.calledOnce).to.be.true
        expect(jsonSpy.firstCall.args[0].id).to.be.equal(testId.toString())
    })
})