require('dotenv').config({ debug: true })

const { MongoClient } = require('mongodb');

const url = process.env.MONGO_URI;
const client = new MongoClient(url)

async function findDocument(url) {
	try{
		const database = client.db("main");
		const recipes = database.collection("recipe");

		// Query for an entry with the url equals url
		const query = { url:url}

		// Include id,  overview and ingrediecnts
		const options = {
			projection: { _id: 1, overview: 1, ingredients: 1}
		};

		// Executive query
		const queriedRecipe = await recipes.findOne(query, options);

		// print recipe
		console.log(`This recipe is already in the database ${queriedRecipe._id}`)
		return queriedRecipe;
	} finally {
		await client.close()
	}
}

module.exports = {
	findDocument: findDocument
}