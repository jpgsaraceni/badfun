import mongoose from 'mongoose'
import Env from './Env.js';

export default () => mongoose.connect(`mongodb://${Env.dbUrl}/${Env.db}`);
