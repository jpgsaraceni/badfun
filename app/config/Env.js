import "dotenv/config"

export default {
    db: process.env.DB,
    dbUrl: process.env.DB_URL,
    serverPort: process.env.SERVER_PORT
}