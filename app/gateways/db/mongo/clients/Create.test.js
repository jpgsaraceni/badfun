import mongoose from 'mongoose';
import { expect } from 'chai'

import Client from "../../../../domain/entities/Client.js"
import Create from './Create.js'
import testSetup from '../testSetup.js'

describe('#controllers.Create.js', function(){
    it('should create client in db and return id', async function(){
        await testSetup

        const newClient = new Client(null, "test", "test@email.com")

        const id = await Create(newClient)
        
        expect(mongoose.isValidObjectId(id)).to.be.true
    })
})