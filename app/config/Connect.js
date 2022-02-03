import mongoose from 'mongoose'
import env from './env.js';

export default () => mongoose.connect(`mongodb://${env.dbUrl}/${env.dbName}`);
