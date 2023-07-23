const Recipe = require('../models/recipe')
const asyncHandler = require('express-async-handler');

//Display list of all Recipes
exports.recipe_list = asyncHandler( async (req, res, next) => {
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