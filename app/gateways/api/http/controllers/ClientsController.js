const Create = import("./clients/Create")
const DeleteEntry = import("./clients/DeleteEntry")
const Fetch = import("./clients/Fetch")
const Update = import("./clients/Update")

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