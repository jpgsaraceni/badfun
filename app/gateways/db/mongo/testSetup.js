import Connect from "../../../config/Connect.js"

export default Connect()
    .then(() => console.log("connected to mongodb"))
    .catch(() => console.log("connection to mongodb failed"))