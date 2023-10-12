const express = require('express')
const router = express.Router()

const recipe_controller = require('../controllers/recipeController')

// Recipe Routes

// Get request for creating a recipe from url
router.get('/recipe/create/:url', recipe_controller.recipe_create_url_post)

router.get('/recipe/cookieandkate/:recipe/', recipe_controller.cookieandkateParse)

router.get('/recipe/cupcakesandkalechips/:recipe/', recipe_controller.cupcakesAndKaleChipsParse)

// router.get('/', function (req, res) {
// 	res.redirect('/recipes')
// })

// Test parse local page
router.get('/recipes/parse/test', recipe_controller.local_html_parse)

router.get(`/recipes/checkCookieAndKateDatabase/:url`, recipe_controller.checkCookieAndKateDatabase)

module.exports = router