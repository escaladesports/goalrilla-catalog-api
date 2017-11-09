const request = require('request-promise-native');

function _getNearestDealerFromGroup(dealers, zip) {
	if (!dealers) {
		throw new Error('_getNearestDealerFromGroup expected dealers parameter');
	}
	if (!zip) {
		throw new Error('_getNearestDealerFromGroup expected zip code parameter');
	}

	let nearest = dealers[0];
	for (let dealer of dealers) {
		if (dealer.distNum < nearest.distNum) {
			nearest = dealer;
		}
	}
	return nearest;
}

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
	findNearestDealer,
	_getNearestDealerFromGroup
}