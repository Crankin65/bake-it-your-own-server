const cheerio = require('cheerio')

function returnCookieAndKateDetails(html) {
	const $ = cheerio.load(html);

	let overviewObject = {
		title: $('.tasty-recipes-display h2').text(),
		author: $('.tasty-recipes-author-name').text(),
		prepTime: $('.tasty-recipes-prep-time').text(),
		cookTime: $('.tasty-recipes-cook-time').text(),
		totalTime: $('.tasty-recipes-total-time').text(),
		servingNumber: $('.tasty-recipes-yield').text(),
		cuisine: $('.tasty-recipes-cuisine').text(),
		diet: $('.tasty-recipes-diet').text()

	}
	return overviewObject
}

function returnCookieAndKateIngredients(html) {
	const $ = cheerio.load(html);
	let ingredientDiv = $('.tasty-recipe-ingredients').find('ul').children('li')

	let ingredientsMappedArray =[]

	ingredientDiv.map((i,e) => {
		ingredientsMappedArray.push($(e).text())
	})

	return ingredientsMappedArray
}

function returnCookieAndKateInstructions(html) {
	const $ = cheerio.load(html);
	let instructionDiv = $('.tasty-recipe-instructions').find('ol').children('li')

	let instructionMappedArray =[]

	instructionDiv.map((i,e) => {
		instructionMappedArray.push($(e).text())
	})

	return instructionMappedArray
}

function returnCookieAndKateNotes(html) {
	const $ = cheerio.load(html);
	let notesDiv = $('.tasty-recipes-notes').children('p')

	let notesMappedArray =[]

	notesDiv.map((i,e) => {
		notesMappedArray.push($(e).text())
	})

	return notesMappedArray
}

function returnCookieAndKateObject(html) {

	let cookieAndKateObject = {
		overview: returnCookieAndKateDetails(html),
		ingredients: returnCookieAndKateIngredients(html),
		instructions: returnCookieAndKateInstructions(html),
		notes: returnCookieAndKateNotes(html)
	}

	return cookieAndKateObject

}

module.exports = {
	returnCookieAndKateObject: returnCookieAndKateObject
}