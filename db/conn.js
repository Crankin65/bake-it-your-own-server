require('dotenv').config({ debug: true })

const { MongoClient } = require('mongodb');
const {fetchHtml} = require("../scrapingFunctions/fetchHtml");
const {returnCookieAndKateObject} = require("../scrapingFunctions/cookieAndKateScraper");

const url = process.env.MONGO_URI;
const client = new MongoClient(url)

async function findDocument(url) {
	console.log('started to find document')
	try{
		const database = client.db("main");
		const recipes = database.collection("recipe");


		// Executive query
		const queriedRecipe = await recipes.findOne({ url: url});
		await console.log(queriedRecipe)

		if (queriedRecipe) {
			return await queriedRecipe;
		} else {
			return null
		}

	} finally {
		// await client.close()
	}
}

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

async function updateDatabaseIfNotFound(url, recipeParts){
	if( findDocument(url) ) {
		let recipeObject = findDocument(url);
		return recipeObject;

	} else {

		const html = await fetchHtml(createCookieAndKateURL())
		let recipeObject = returnCookieAndKateObject(await html)
		await insertDocument(createCookieAndKateURL(), recipeObject)

	}
}


module.exports = {
	findDocument: findDocument,
	insertDocument: insertDocument,
	updateDatabaseIfNotFound: updateDatabaseIfNotFound
}