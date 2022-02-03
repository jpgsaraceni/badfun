import "dotenv/config"

export default {
    dbName: process.env.DB_NAME,
    dbUrl: process.env.DB_URL,
    serverPort: process.env.SERVER_PORT
}