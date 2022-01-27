import Create from "./clients/Create.js"
import DeleteEntry from "./clients/DeleteEntry.js"
import Fetch from "./clients/Fetch.js"
import Update from "./clients/Update.js"

export default () => {
    const create = Create
    const deleteEntry = DeleteEntry
    const fetch = Fetch
    const update = Update

    return {
        create,
        deleteEntry,
        fetch,
        update,
    }
}