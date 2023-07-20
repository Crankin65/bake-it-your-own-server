const express = require('express')
const router = express.Router()

const recipe_controller = require('../controllers/recipeController')

// Recipe Routes

// Get request for creating a recipe
router.get("/recipe/create", recipe_controller.recipe_create_get)

// Post request for creating a recipe.
router.post("/recipe/create", recipe_controller.recipe_create_post)

// Get request to delete recipe.
router.get("/recipe/:id/delete", recipe_controller.recipe_delete_get)

// Post request to delete recipe
router.post("/recipe/:id/delete", recipe_controller.recipe_delete_post)

// Get request to update recipe
router.get("/recipe/:id/update", recipe_controller.recipe_update_get)

// POST request to update
router.post("/recipe/:id/update", recipe_controller.recipe_update_post)

// Get request for one book.
router.get("/book/:id", recipe_controller.recipe_detail);

// Get Request for list of all recipes
router.get("/recipes", recipe_controller.recipe_list)

router.get('/', function (req, res) {
	res.redirect('/recipes')
})

module.exports = router