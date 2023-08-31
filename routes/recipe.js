const express = require('express')
const router = express.Router()

const recipe_controller = require('../controllers/recipeController')

// Recipe Routes

// Get request for creating a recipe from url
router.get('/recipe/create/:url', recipe_controller.recipe_create_url_post)

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
router.get("/recipe/:id", recipe_controller.recipe_detail);

// Get Request for list of all recipes
router.get("/recipes", recipe_controller.recipe_list)

// Test Router for parsing recipe
router.get('/recipes/parse/:url/:recipe/', recipe_controller.recipe_test_parse)

// test router for simple url
router.get('/url/:url', recipe_controller.url)

router.get('/', function (req, res) {
	res.redirect('/recipes')
})

// Test parse local page
router.get('/recipes/parse/test', recipe_controller.local_html_parse)



module.exports = router