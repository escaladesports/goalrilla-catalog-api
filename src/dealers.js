const request = require('request-promise-native');

/**
	Locates the nearest dealer based on a zip code
	@param {String|Number} zip Zip code to search on
	@returns {Promise.<Object>} Nearest dealer found
*/
function findNearestDealer(zip) {
	const endpoint = `https://apis.escaladesports.com/v1/dealers/territory/goalrilla/zip/${zip}/100`;
	return request(endpoint).then(res => {
		// sort
		return res;
	});
}

module.exports = {
	findNearestDealer
}