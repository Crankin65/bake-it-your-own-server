require('dotenv').config({ debug: true })

const {MongoClient} = require('mongodb');

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function insertDocument(recipeParts) {
	try {
		// Connect to "main" database and access the "recipe" collection
		const database = client.db("main");
		const recipe = database.collection("recipe");

		// // Create document to insert
		// const doc = {
		// 	title: "Pan-seared test document",
		// 	instructions: ["Step 1", "Step 2", "Step 3"]
		// }

		//Insert document into recipe collection
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