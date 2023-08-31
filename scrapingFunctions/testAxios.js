const axios = require('axios')
const cheerio = require('cheerio')


async function getHtml(url) {
	const html = await axios ({
		method: 'get',
		url: url
	})

	return html.data
	// console.log(typeof html.data)
	// console.log(html.data)
}

function parseWebsite(html){
	const $ = cheerio.load(html)
	let instructions = $('.InstructionGroupWrapper-bqiIwp').text()
	// console.log(html)
	// console.log(instructions)
	return instructions
}

async function combo(){
	const html = await getHtml('https://www.bonappetit.com/recipe/gochujang-glazed-fried-chicken-sandwich')
	return parseWebsite(html)

}


combo()
// getHtml('https://www.playravine.com/rules')
// parsePinchOfYum(getHtml('https://pinchofyum.com/summer-bliss-bowls'))

module.exports = {
	getHtml:getHtml,
	parseWebsite:parseWebsite,
	combo:combo
}