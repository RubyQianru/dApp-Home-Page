import { MongoClient } from 'mongodb';

const Db = 'mongodb+srv://qz2432:rzcp1207@dapp.zyo4807.mongodb.net/?retryWrites=true&w=majority&ssl=true';


const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let _db;

export async function connectToServer(callback) {
  try {
    await client.connect();
    _db = client.db("record");
    console.log("Successfully connected to MongoDB.");
    return callback(null);
  } catch (err) {
    return callback(err);
  }
}

export function getDb() {
  return _db;
}
