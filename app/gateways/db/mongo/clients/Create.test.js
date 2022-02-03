import mongoose from 'mongoose';
import { expect } from 'chai'

import Create from './Create.js'
import Setup from '../testSetup.js'

describe('#controllers.Create.js', function(){
    const setup = new Setup("create")
    
    this.beforeEach(function(){
        setup.testDbUp()
    })

    this.afterEach(function(){
        setup.testDbDown()
    })

    it('should create client in db and return id', async function(){
        const id = await Create({name: "test", email: "email"})
        
        expect(mongoose.isValidObjectId(id)).to.be.true
    })
})