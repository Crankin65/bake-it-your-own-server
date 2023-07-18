const fs = require('fs');
const cheerio = require('cheerio')

export function demoHtml (){
	const data =  fs.readFileSync('../../TestPageHTML/ChickenFriedRiceCupcakesAndKaleChips.html')
	return data
}

export function returnCupcakeAndKaleChipsDetails(data){
	const $ = cheerio.load(data);


	let overviewObject = {
		author: $('.wprm-recipe-details.wprm-recipe-author').text(),
		prepTime: $('.wprm-recipe-prep-time-container').text(),
		cookTime: $('.wprm-recipe-cook-time-container').text(),
		totalTime:$('.wprm-recipe-total-time-container').text(),
		servingNumber: $('.wprm-recipe-servings.wprm-recipe-details').text(),
		cuisine: $('.wprm-recipe-cuisine.wprm-block-text-normal').text()
	}

	console.log(overviewObject)
	return overviewObject
}

export function returnCupcakeAndKaleChipsIngredients(data){
	const $ = cheerio.load(data);
	let ingredientDiv = $('.wprm-recipe-ingredient-group').find('ul').children('li')

	let ingredientsMappedArray =[]

	ingredientDiv.map((i,e) => {
		ingredientsMappedArray.push($(e).text())
	})

	console.log(`ingredients are ${ingredientsMappedArray}`)
	return ingredientsMappedArray
}

export function returnCupcakeAndKaleChipsInstructions(data) {
	const $ = cheerio.load(data);
	let instructionDiv = $('.wprm-recipe-instruction-group').find('ul').children('li')

	let instructionMappedArray=[]

	instructionDiv.map((i,e) => {
		instructionMappedArray.push($(e).text())
	})

	console.log(`${instructionMappedArray}`)
	return instructionMappedArray

}

export function returnCupcakeAndKaleChipsTipsForSuccess(data) {
	const $ = cheerio.load(data);

	let tipsForSuccess = $('[id=h-tips-for-success]').nextUntil('div')

	console.log('-----')
	// console.log(tipsForSuccess.html())


	if (tipsForSuccess.length !== 0) {

		let tipsMappedArray = []

		tipsForSuccess.map((i,e) => {
			tipsMappedArray.push($(e).text())
		})

		console.log(tipsMappedArray)
		return tipsMappedArray
	}

}

// returnDetails(demoHtml());
// returnIngredients(demoHtml())
// returnInstructions(demoHtml())
// returnTipsForSuccess(demoHtml())

exports.module = {
	demoHtml: demoHtml,
	returnCupcakeAndKaleChipsDetails: returnCupcakeAndKaleChipsDetails,
	returnCupcakeAndKaleChipsIngredients: returnCupcakeAndKaleChipsIngredients,
	returnCupcakeAndKaleChipsInstructions: returnCupcakeAndKaleChipsInstructions,
	returnCupcakeAndKaleChipsTipsForSuccess: returnCupcakeAndKaleChipsTipsForSuccess

};