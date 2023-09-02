const Recipe = require('../models/recipe')
const asyncHandler = require('express-async-handler');
const {returnCupcakeAndKaleChipsObject} = require('../scrapingFunctions/cupcakeAndKaleChipsScraper')
const {returnCookieAndKateObject} = require('../scrapingFunctions/cookieAndKateScraper')
const {fetchHtml} = require('../scrapingFunctions/fetchHtml')


//
exports.recipe_list_mongo = asyncHandler( async (req, res, next) => {
	// res.send("Not Implemented: Recipe List");

// from MERN demo
	// let collection = await db.collection('recipes');
	// let results = await collection.find({}).toArray();
	// res.send(results).status(200);
	try {
		await Recipe.create({
			overview: {
				author: "JRR",
				prepTime: "20 minutes",
				cookTime: "40 minutes",
				totalTime: "60 minutes",
				servingNumber: "4 people",
				cuisine: "Middle-earth",
				diet: "hobbit"
			}, instructions: ["Step 1", "Step 2"],
			ingredients: ["Carrot", "Potato"],
			tips: ["Do it well"]
		})

		const data = await Recipe.collection.find({}).toArray();
		res.json(data)
	} catch(error) {
		res.status(500).json( {message: error.message})
	}

});

// Recipes post from url
exports.recipe_create_url_post = asyncHandler( async (req, res, next) => {
	const url = req.params.url;
	const html = await getHtml(url)

	const recipesObject =   returnCookieAndKateObject(await html)

	console.log(recipesObject)

	try {
		await Recipe.create({
			overview: {
				author: recipesObject.overview.author,
				prepTime: recipesObject.overview.prepTime,
				cookTime: recipesObject.overview.cookTime,
				totalTime: recipesObject.overview.totalTime,
				servingNumber: recipesObject.overview.servingNumber,
				cuisine: recipesObject.overview.cuisine,
			}, instructions: recipesObject.instructions,
			ingredients: recipesObject.ingredients,
			tips: recipesObject.notes,
			url: url
		})

		const data = await Recipe.collection.find({}).toArray();
		res.json(data)
	} catch(error) {
		res.status(500).json( {message: error.message})
	}

})

exports.cookieandkateParse = asyncHandler( async (req, res, next) => {
	const recipe = req.params.recipe

	function createCookieAndKateURL() {
		const urlAddress = `https://cookieandkate.com/${recipe}`
		console.log(`the url that will be sent is ${urlAddress} `)
		return urlAddress
	}

	const html = await fetchHtml(createCookieAndKateURL())
	console.log(html.data)

	let recipeObject = returnCookieAndKateObject(await html)

	await res.json({
		recipeObject: recipeObject
	})
})


exports.cupcakesAndKaleChipsParse = asyncHandler(async(req, res) => {
	const recipe = req.params.recipe

	function createCupcakesAndKaleChipsURL() {
		const urlAddress = `https://cupcakesandkalechips.com/${recipe}`
		console.log(`the url that will be sent is ${urlAddress} `)
		return urlAddress
	}

	const html = await fetchHtml(createCupcakesAndKaleChipsURL())

	let recipeObject = returnCupcakeAndKaleChipsObject(await html)

	await res.json({
		recipeObject: recipeObject
	})
})

exports.local_html_parse = asyncHandler(async(req,res, next) => {

	// console.log(`The url is ${url}`)
	// console.log(`The html is ${html}`)
	// console.log(`The recipe object overview is ${recipeObject.overview}`)
let instructions = await combo()

	await res.json({
		recipeObject:instructions
	})

})