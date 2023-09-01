const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.REACT_APP_MONGO_URL);

export default async function handler(req, res) {
  // console.log(client);

  await client.connect();
  const database = client.db("countDB");
  const collection = database.collection("countCollection");
  const data = await collection.find({}).toArray();

  res.status(200).send(data);
}
