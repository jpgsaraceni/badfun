import Create from "./clients/Create"
import DeleteEntry from "./clients/DeleteEntry"
import Fetch from "./clients/Fetch"
import Update from "./clients/Update"

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