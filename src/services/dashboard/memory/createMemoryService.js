import mongodbClient from '#utils/mongodbClient.js';

const createMemory = async (dataToCreateMemory) => {
  await mongodbClient.db('main').collection('memories').insertOne(dataToCreateMemory);

  await mongodbClient.close();
};

export default createMemory;
