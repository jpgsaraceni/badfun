import mongoose from 'mongoose'

const db = process.env.DB
const url = process.env.DB_URL

export default () => mongoose.connect(`mongodb://${url}/${db}`);
