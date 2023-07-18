const fs = require('fs');
const cheerio = require('cheerio')
const axios = require('axios')

function demoHtml (){
	const data =  fs.readFileSync('../../TestPageHTML/CookieAndKateChanaMasala.html')
	return data
}

export async function returnCookieAndKateDetails(url){
	try {
		const html = await axios.get(url)
		const $ = cheerio.load(html.data);

		// let overviewObject: Promise<overviewObjectTemplate<{T{string}>>
		// 'Promise<overviewObjectTemplate | object>'

		// let overviewObject: Promise<overviewObjectTemplate <string>> = {
		let overviewObject = {
			author: $('.tasty-recipes-author-name').text(),
			prepTime: $('.tasty-recipes-prep-time').text(),
			cookTime: $('.tasty-recipes-cook-time').text(),
			totalTime: $('.tasty-recipes-total-time').text(),
			servingNumber: $('.tasty-recipes-yield').text(),
			cuisine: $('.tasty-recipes-cuisine').text(),
			diet: $('.tasty-recipes-diet').text()

		}

		console.log(overviewObject)
		return overviewObject

	} catch(error) {
		console.log(error)
	}


}

export function returnCookieAndKateIngredients(data){
	const $ = cheerio.load(data);
	let ingredientDiv = $('.tasty-recipe-ingredients').find('ul').children('li')

	let ingredientsMappedArray =[]

	ingredientDiv.map((i,e) => {
		ingredientsMappedArray.push($(e).text())
	})

	// console.log(`ingredients are ${ingredientsMappedArray}`)
	return ingredientsMappedArray
}

export function returnCookieAndKateInstructions(data) {
	const $ = cheerio.load(data);
	let instructionDiv = $('.tasty-recipe-instructions').find('ol').children('li')

	let instructionMappedArray =[]

	instructionDiv.map((i,e) => {
		instructionMappedArray.push($(e).text())
	})

	// console.log(`${instructionMappedArray[0]}`)
	return instructionMappedArray

}

export function returnCookieAndKateNotes(data) {
	const $ = cheerio.load(data);
	let notesDiv = $('.tasty-recipes-notes').children('p')

	let notesMappedArray =[]

	notesDiv.map((i,e) => {
		notesMappedArray.push($(e).text())
	})

	console.log(`${notesMappedArray[1]}`)
	return notesMappedArray

}
//
// returnCookieAndKateDetails(demoHtml());
// returnIngredients(demoHtml())
// returnInstructions(demoHtml())
// returnNotes(demoHtml())

module.exports = {
	returnCookieAndKateDetails: returnCookieAndKateDetails,
	returnCookieAndKateIngredients: returnCookieAndKateIngredients,
	returnCookieAndKateInstructions: returnCookieAndKateInstructions,
	returnCookieAndKateNotes: returnCookieAndKateNotes
};