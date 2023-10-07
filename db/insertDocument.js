require('dotenv').config({ debug: true })

const {MongoClient} = require('mongodb');

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function insertDocument(url, recipeParts) {
	try {
		// Connect to "main" database and access the "recipe" collection
		const database = client.db("main");
		const recipe = database.collection("recipe");

		//Insert document into recipe collection
		recipeParts.url = url;
		const result = await recipe.insertOne(recipeParts);

		//Print ID of the inserted document
		console.log(`A document was inserted with the _id ${result.insertedId}`);
	} finally {
		// Close MongoDB Client
		await client.close();
	}
}

// console.log(process.env.MONGO_URI)
// insertDocument().catch(console.dir)

module.exports = {
	insertDocument: insertDocument
}