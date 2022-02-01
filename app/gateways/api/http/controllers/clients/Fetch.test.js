import mongoose from 'mongoose'
import Sinon from 'sinon'
import { expect } from 'chai'

import Fetch from './Fetch.js'
import ClientRepositoryMock from '../../../../db/mongo/ClientRepository.mock.js'

describe('#controllers.Fetch.js', function() {
    it('should respond 200 and array of clients', async function() {

        const req = {}

        const jsonStub = Sinon.stub()

        const res = {
            json: jsonStub
        }

        const testClientList = [  
            {
                id: "61f94fd0db6e0e57d6d33b19",
                name: "sample",
                email: "sample@email.com"
            },
            {
                id: "61f94fd6db6e0e57d6d33b1b",
                name: "sample",
                email: "sample@email.com"
            }
        ]

        const clientRepositoryMock = new ClientRepositoryMock
        // repositoryStub defines the mocked ropository DeleteEntry method behavior
        Sinon.stub(clientRepositoryMock, "Fetch").returns(testClientList)
        const fetch = Fetch(clientRepositoryMock)
        
        await fetch(req, res)

        expect(jsonStub.calledOnce).to.be.true
        expect(jsonStub.firstCall.args[0]).to.be.equal(testClientList)
    })

    
})