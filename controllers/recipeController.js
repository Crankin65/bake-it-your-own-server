const Recipe = require('../models/recipe')
const asyncHandler = require('express-async-handler')

//Display list of all Recipes
exports.recipe_list = asyncHandler( async (req, res, next) => {
	res.send("Not Implemented: Recipe List");
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
	res.send("Not Implemented: Recipe create Post");
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