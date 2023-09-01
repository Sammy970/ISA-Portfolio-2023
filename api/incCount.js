const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.REACT_APP_MONGO_URL);

export default async function handler(req, res) {
  // console.log(client);

  await client.connect();
  const database = client.db("countDB");
  const collection = database.collection("countCollection");

  const filter = { _id: "64f18156a4a802eb1b4ff6ea" };
  const updateDoc = {
    $inc: {
      count: 1,
    },
  };

  const result = await collection.updateOne(filter, updateDoc);

  // Close the MongoDB connection
  await client.close();

  //   const data = await collection.updateOne({}).toArray();

  res.status(200).send(result);
}
