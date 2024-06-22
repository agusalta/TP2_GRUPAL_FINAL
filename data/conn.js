import "dotenv/config";
import { MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

let instance = null;

export default async function getConnection() {
    if (instance == null) {
        try {
            instance = await client.connect();
        } catch (error) {
            throw new Error("Error connecting to Mongo", error.message);
        }
    }
    return instance;
}
