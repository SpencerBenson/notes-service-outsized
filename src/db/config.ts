import 'dotenv/config';
import mongoose from 'mongoose';

// MongoDB Connection
const dbConnection  = mongoose.connect(process.env.mongoDb_URL as string, {} as mongoose.ConnectOptions);
// const dbConnection  = mongoose.connect(process.env.mongoDb_URL_ATLAS as string, {} as mongoose.ConnectOptions);
 
export default dbConnection ;