import mongodbClient from '#utils/mongodbClient.js';

const fetchMemories = async () => {
  await mongodbClient.connect();
  const fetchedMemories = await mongodbClient.db('main').collection('memories').find({}).toArray();

  await mongodbClient.close();
  return fetchedMemories;
};

export default fetchMemories;

