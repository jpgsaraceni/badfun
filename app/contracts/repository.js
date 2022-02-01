export default class Repository {
    constructor() {
    }

    Create(clientInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    Fetch() {
        return Promise.reject(new Error('not implemented'));
    }

    Update(id, name, email) {
        return Promise.reject(new Error('not implemented'));
    }

    DeleteEntry(id) {
        return Promise.reject(new Error('not implemented'));
    }
}