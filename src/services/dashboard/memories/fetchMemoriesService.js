import mainMongodbDatabase from '#utils/mongodbClient.js';

const fetchMemories = async () => {
  const fetchedMemories = await mainMongodbDatabase.collection('memories').find({}).toArray();
  return fetchedMemories;
};

export default fetchMemories;
