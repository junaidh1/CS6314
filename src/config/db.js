import {
    MongoClient,
    ServerApiVersion,
} from 'mongodb';

const uri = process.env.MONGODB_URI || "";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
        "Pinged your deployment. You've successfully connected to MongoDB!"
    );
} catch (e) {
    console.error(e);
}

let db = client.db(process.env.DB_NAME);

export default db;
export { client };
