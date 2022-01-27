import Create from "./clients/Create.js";
import DeleteEntry from "./clients/DeleteEntry.js";
import Fetch from "./clients/Fetch.js";
import Update from "./clients/Update.js";

export default () => {
    return {
        Create,
        DeleteEntry,
        Fetch,
        Update,
    }
}
