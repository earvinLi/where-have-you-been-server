import { MongoClient } from 'mongodb';

const mongodbClientUri = 'mongodb+srv://iEarvin:XyuLXXwGMt0ERAit@whyb-cluster.vsaad1e.mongodb.net/?retryWrites=true&w=majority&appName=whyb-cluster';
const mongodbClient = new MongoClient(mongodbClientUri);

export default mongodbClient;
