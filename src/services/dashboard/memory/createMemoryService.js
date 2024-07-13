import mainMongodbDatabase from '#utils/mongodbClient.js';

const createMemory = async (dataToCreateMemory) => {
  const dataToCreateMemoryToUse = dataToCreateMemory;

  await mainMongodbDatabase.collection('memories').insertOne(dataToCreateMemoryToUse);

  return dataToCreateMemoryToUse;
};

export default createMemory;
