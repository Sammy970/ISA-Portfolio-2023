const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.REACT_APP_MONGO_URL);

export default async function handler(req, res) {
  // console.log(client);

  await client.connect();
  const db = await client.db("countDB");
  const collection = await db.collection("countCollection");
  const data = collection.find({}).toArray;

  res.status(200).json({ message: data });
}
