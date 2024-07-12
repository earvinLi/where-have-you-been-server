import mongodbClientConnection from '#utils/mongodbClient.js';

const createMemory = async (dataToCreateMemory) => {
  await mongodbClientConnection.db('main').collection('memories').insertOne(dataToCreateMemory);
};

export default createMemory;
