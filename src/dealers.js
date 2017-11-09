const request = require('request-promise-native');

function findNearestDealer(zip) {
	/*const endpoint = `https://apis.escaladesports.com/v1/dealers/territory/goalrilla/zip/${zip}/100`;
	return request(endpoint).then(res => {
		// sort
		return res;
	});*/
	return Promise.resolve(['test']);
}

module.exports = {
	findNearestDealer
}