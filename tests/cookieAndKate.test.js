import {describe, expect, test} from '@jest/globals';
const axios = require('axios')
import {returnCookieAndKateNotes, returnCookieAndKateIngredients, returnCookieAndKateInstructions, returnCookieAndKateDetails} from "../ScrapingFunctions/cookieAndKateFunctions/cookieAndKateParse";

// function format(htmlData:string){
//     const stringFormat = htmlData.split(' ').join('').split('\n')
//     const arrayFormat = stringFormat.filter(function(element) {
//         return element !== '';
//     })
//     return arrayFormat
// }


describe('Recipe Overview',() => {

	const url = 'https://cookieandkate.com/best-stuffed-shells-recipe/'

	test('Return Author', () => {
		expect(returnCookieAndKateDetails(url).author).toBe('Cookie an dKate')
	})

	test('Return Prep Time', () => {
		expect(returnCookieAndKateDetails(url).prepTime).toBe('30 minutes')
	})

	test('Return Cook time', () => {
		expect(returnCookieAndKateDetails(url).cookTime).toBe('35 minutes')
	})

	test('Return Total time', () => {
		expect(returnCookieAndKateDetails(url).totalTime).toBe('35 minutes')
	})

	test('Return Serving Number', () => {
		expect(returnCookieAndKateDetails(url).servingNumber).toBe('1 hour 5 minutes')
	})

	test('Return Cuisine', () => {
		expect(returnCookieAndKateDetails(url).cuisine).toBe('Italian')
	})


})


describe('Recipe Ingredients',() => {

	const html = axios.get('https://cookieandkate.com/favorite-grilled-cheese-sandwich-recipe/')


	test('Ingredient 1',() => {
		expect(returnCookieAndKateIngredients(html)[0]).toBe('2 large slices of whole grain sourdough, or your favorite crusty bread')
	})

	test('Ingredient 3',() => {
		expect(returnCookieAndKateIngredients(html)[2]).toBe('1 cup lightly packed (3 ounces) freshly grated sharp cheddar cheese, plus a little more for sprinkling on the outside (optional)')
	})

})

describe('Recipe Instructions',() => {

	const html = axios.get('https://cookieandkate.com/spicy-vegan-black-bean-soup/')


	test('Instruction 1',() => {
		expect(returnCookieAndKateInstructions(html)[0]).toBe('Heat the olive oil in a large Dutch oven or soup pot over medium heat until shimmering. ' +
			'Add the onions, celery and carrot and a light sprinkle of salt. Cook, stirring occasionally,' +
			' until the vegetable are soft, about 10 to 15 minutes.')
	})

	test('Instruction 3',() => {
		expect(returnCookieAndKateInstructions(html)[2]).toBe('Transfer about 4 cups of the soup to a stand blender, securely fasten the lid,' +
			' and blend until smooth (never fill your blender past the maximum fill line, and beware the steam that escapes' +
			' from the top of the blender, it’s very hot). Or, use an immersion blender to blend a portion of the soup.')
	})

})

describe('Recipe Notes',() => {

	const html = axios.get('https://cookieandkate.com/healthy-banana-pancakes-recipe/')

	test('Notes 1',() => {
		expect(returnCookieAndKateNotes(html)[0]).toBe('MAKE IT GLUTEN FREE: Use certified gluten-free oat flour or buckwheat flour.')
	})

})


//
// function returnAuthor() {
//     const html = axios.get('https://cookieandkate.com/quick-vegan-chana-masala/')
//         .then((data:any) => {
//             const $ = cheerio.load(data);
//             const details = $('.tasty-recipes-details')
//             console.log('------')
//             console.log(details)
//             format(details)
//         })
//     console.log(array)
//     return array