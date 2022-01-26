// ClientRepository defines the contract (interface) 
// the repository must implement.
// As JS does not have interfaces, this base class uses promise
// reject to indicate a repository is not fulfilling the contract.
export default class ClientRepository {
    constructor() {}

    create(clientInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    fetch(clientInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    update(clientInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    delete(clientInstance) {
        return Promise.reject(new Error('not implemented'));
    }
}