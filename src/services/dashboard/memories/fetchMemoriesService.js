import mongodbClientConnection from '#utils/mongodbClient.js';

const fetchMemories = async () => {
  const fetchedMemories = await mongodbClientConnection.db('main').collection('memories').find({}).toArray();
  return fetchedMemories;
};

export default fetchMemories;
