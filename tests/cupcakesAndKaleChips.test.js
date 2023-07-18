import {describe, expect, test} from '@jest/globals';
import fs from 'fs';
import path from 'path';
const axios = require('axios')
const cheerio = require('cheerio')
const filePath = path.join(__dirname, '../TestPageHTML/CookieAndKateChanaMasala.html');
const $ = cheerio.load(fs.readFileSync(filePath));




// function format(htmlData:string){
//     const stringFormat = htmlData.split(' ').join('').split('\n')
//     const arrayFormat = stringFormat.filter(function(element) {
//         return element !== '';
//     })
//     return arrayFormat
// }


// describe('Recipe Overview',() => {
//
//     test('Return Author', () => {
//
//         function returnAuthor() {
//             const html = axios.get('https://cookieandkate.com/quick-vegan-chana-masala/')
//                 .then((data:any) => {
//                     const $ = cheerio.load(data);
//                     const details = $('.tasty-recipes-details')
//                     console.log('------')
//                     console.log(details)
//                     format(details)
//                 })
//             console.log(array)
//              return array
//         }
//         expect(returnAuthor()).toBe('Author:CookieandKate')
//
//
//         })
//
// })

describe('Recipe Overview',() => {

	test('Return Total Time',() => {
		expect('').toBe('35 minutes')
	})

	test('Return Author',() => {
		expect('').toBe('Cookie and Kate')
	})

})

describe('Ingredients',() => {

	test('Ingredient 1',() => {
		expect('').toBe('1 cup uncooked brown basmati rice, for serving (rice is optional, ' +
			'I like to cook extra to have on hand for other meals)')
	})

	test('Ingredient 3',() => {
		expect('').toBe('1 medium yellow onion, chopped')
	})

})

describe('Instructions',() => {

	test('Instruction 1',() => {
		expect('').toBe('Cook the rice (if you want to serve the chana masala on rice): ' +
			'Bring a large pot of water to boil on the stove and rinse the rice in a fine-mesh colander. ' +
			'Once boiling, pour in the rice and give it a stir. ' +
			'Boil the rice for 30 minutes, then turn off the heat and drain the rice. ' +
			'Return the rice to the pot and cover the pot. Let the rice steam for 10 minutes. ' +
			'Remove the lid, fluff the rice with a fork and season with sea salt to taste.\n')
	})

	test('Instruction 3',() => {
		expect('').toBe('Add the garlic and ginger, and cook until fragrant, ' +
			'about 30 seconds to 1 minute. Stir in the garam masala, coriander, cumin, turmeric, salt and cayenne ' +
			'(if using), and cook for another minute, while stirring constantly.\n')
	})

})

describe('Notes',() => {

	test('Notes 1',() => {
		expect('').toBe('*TAME THE HEAT: While chana masala is inherently full of spice, ' +
			'the serrano (or jalapeño) and cayenne pepper are what bring the heat. If you’re sensitive, ' +
			'reduce or omit them both. You can always stir in a pinch of cayenne pepper ' +
			'at the end of cooking if you want more.')
	})

})


//
// describe('Return Ingredients', () => {
//
//     test('recipe', () => {
//
//     })
//
//     test('Ingredients', () => {
//
//     })
//
//     test('Instructions', () => {
//
//     })
// })
//
// describe('Return Instructions', () => {
//
//     test('recipe', () => {
//
//     })
//
//     test('Ingredients', () => {
//
//     })
//
//     test('Instructions', () => {
//
//     })
// })
//
// describe('Return Recipe Notes', () => {
//
//     test('recipe', () => {
//
//     })
//
//     test('Ingredients', () => {
//
//     })
//
//     test('Instructions', () => {
//
//     })
// })