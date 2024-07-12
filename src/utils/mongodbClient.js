import { MongoClient } from 'mongodb';

const mongodbClientUrl = process.env.MONGODB_CLIENT_URL || '';
const mongodbClient = new MongoClient(mongodbClientUrl);

let mongodbClientConnection;
try {
  mongodbClientConnection = await mongodbClient.connect();
} catch (error) {
  console.log(error);
}

export default mongodbClientConnection;
