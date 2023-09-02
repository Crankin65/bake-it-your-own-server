const axios = require("axios");

async function fetchHtml(url){
	const html = await axios ({
		method: 'get',
		url: url,
	})

	return html.data
}

module.exports = {
	fetchHtml: fetchHtml
}