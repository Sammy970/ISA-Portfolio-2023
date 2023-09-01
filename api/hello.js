const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.REACT_APP_MONGO_URL);

export default async function handler(req, res) {
  // console.log(client);
  res.status(200).json({ message: client });
}
