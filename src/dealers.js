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
	Takes full dealer data from API response and reformats it into data to pass back in HTTP response
*/
function _formatDealerData(dealer) {
	const formattedDealer = {
		id: dealer.id,
		address: dealer.address,
		city: dealer.city,
		state: dealer.state,
		zip: dealer.zip,
		country: dealer.country,
		web: dealer.web,
		phone: dealer.phone,
		email: dealer.email,
		distance: dealer.distNum
	}

	return formattedDealer;
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
		const dealers = JSON.parse(res) || {};
		return _formatDealerData(_getNearestDealerFromGroup(dealers.dealers, zip));
	});
}

module.exports = {
	findNearestDealer,
	_getNearestDealerFromGroup
}