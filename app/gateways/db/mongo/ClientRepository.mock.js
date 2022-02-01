import Repository from "../../../contracts/repository.js";

export default class MockRepository extends Repository {
    Create() { return function() {} }
    Fetch() { return function() {} }
    Update() { return function() {} }
    DeleteEntry() { return function() {} }
}