const Recipe = require('../models/recipe')
const asyncHandler = require('express-async-handler');
const {returnCupcakeAndKaleChipsObject} = require('../scrapingFunctions/cupcakeAndKaleChipsScraper')
const {returnCookieAndKateObject, getHtml} = require('../scrapingFunctions/cookieAndKateScraper')
const {getHtmlTestScrape, returnCookieAndKateObjectTestScrape} = require('../scrapingFunctions/testScrape(Cookieandkate)')
const {combo} = require('../scrapingFunctions/testAxios')

//Display list of all Recipes

exports.recipe_list = asyncHandler(async (req, res, next) => {

	console.log("Test Page")
	await res.json({
		title: "title",
		body: "body"
	})
})
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

//Display detail page for specific Author.
exports.recipe_detail = asyncHandler(async (req, res, next) => {
	res.send(`Not Implemented: Recipe Detail: ${req.params.id}`);
});

// Display Recipe create form on Get.
exports.recipe_create_get = asyncHandler(async (req, res, next) => {
	res.send("Not Implemented: Recipe create Get");
});

// Handle Recipe create on POST
exports.recipe_create_post = asyncHandler(async (req, res, next) => {
	// res.send("Not Implemented: Recipe create Post");

	const data = new Recipe( {
		overview: {
			author: req
		}
	})
})


// Display Recipe delete form on Get.
exports.recipe_delete_get = asyncHandler(async (req, res, next) => {
	res.send("Not Implemented: Recipe delete GET")
});

// Handle Author delete on POST.
exports.recipe_delete_post = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: Recipe delete POST");
});

// Display Author update form on GET.
exports.recipe_update_get = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: Recipe update GET");
});

// Handle Author update on POST.
exports.recipe_update_post = asyncHandler(async (req, res, next) => {
	res.send("NOT IMPLEMENTED: Recipe update POST");
});

exports.recipe_test_parse = asyncHandler(async (req,res, next) => {
	const url = req.params.url
	const recipe = req.params.recipe
	const section = req.params.section

	// if (url.includes("cupcakesandkalechips")){
	// 	let typeOfSite = "cupcakesandkalechips"
	// 	console.log(`type of site is ${typeOfSite}`)
	// } else if (url.includes("cookieandkate")){
	// 	let typeOfSite = "cookieandkate"
	// 	console.log(`type of site is ${typeOfSite}`)
	// }
	//
	// if (typeOfSite === "cupcakesandkalechips"){
	// 	const urlAddress =`${url}/${recipe}/${section}`
	// } else if (typeOfSite === "cookieandkate"){
	// 	const urlAddress =`${url}/${recipe}`
	// }

	function createURL() {
		if (section) {
			const urlAddress = `https://${url}.com/${recipe}/${section}`
			console.log(`the url that will be sent is ${urlAddress} `)
			return urlAddress
		} else {
			const urlAddress = `https://${url}.com/${recipe}`
			console.log(`the url that will be sent is ${urlAddress} `)
			return urlAddress
		}
	}
	//
	// try {
	// 	const html = await getHtmlTestScrape(createURL())
	// 	// console.log(html.data)
	// } catch (error) {
	// 	// console.error(error)
	// }

		const html = await getHtmlTestScrape(createURL())
		console.log(html.data)

	let recipeObject = returnCookieAndKateObjectTestScrape(await html)


	await res.json({
		recipeObject: recipeObject
	})
})

exports.cupcakesandkale_parse = asyncHandler(async(req, res) => {
	const url = req.params.url
	const recipe = req.params.recipe
	const section = req.params.section

	function createURL() {
		if (section) {
			const urlAddress = `https://${url}.com/${recipe}/${section}`
			console.log(`the url that will be sent is ${urlAddress} `)
			return urlAddress
		} else {
			const urlAddress = `https://${url}.com/${recipe}`
			console.log(`the url that will be sent is ${urlAddress} `)
			return urlAddress
		}
	}

	const html = await getHtmlTestScrape(createURL())
	console.log(html.data)

	let recipeObject = returnCookieAndKateObjectTestScrape(await html)


	await res.json({
		recipeObject: recipeObject
	})

})
exports.url = asyncHandler(async(req, res, next) => {
	res.status(200)

	const url = req.params.url
	try {
		const response = await getHtmlTestScrape("https://www.playravine.com/")
		// console.log(response.data)
	} catch (error) {
		console.error(error)
	}

	await res.json({
		url: url,
		html: response.data
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