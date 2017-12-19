const request = require('request-promise-native');

/**
	Get (fixed) dealer data for basketballgoalstore.com
	@returns {Object}
*/
function _getDefaultDealerData() {
	return {
		id: 'basketball-goal-store-website',
		address: null,
		city: null,
		state: null,
		zip: null,
		country: null,
		web: 'https://basketballgoalstore.com/',
		phone: '1-800-689-0281',
		email: 'goalrilla@recunlimited.com',
		brand: {
			goalrilla: {
				leads_email: 'goalrilla@recunlimited.com'
			}
		},
		distance: null
	}
}

function _getNearestValidDealerFromGroup(dealers, zip) {
	if (!dealers) {
		throw new Error('_getNearestDealerFromGroup expected dealers parameter');
	}
	if (!zip) {
		throw new Error('_getNearestDealerFromGroup expected zip code parameter');
	}

	let nearest = dealers[0] || ({
		brand: {
			goalrilla: {}
		}
	});
	
	for (let dealer of dealers) {
		if (((dealer.distNum < nearest.distNum) && dealer.brand.goalrilla.leads_email && dealer.brand.goalrilla.accept_leads) || !nearest.brand.goalrilla.leads_email) {
			nearest = dealer;
		}
	}

	if (!nearest.brand.goalrilla.leads_email || !nearest.brand.goalrilla.accept_leads) {
		return _getDefaultDealerData(); // basketballgoalstore.com fallback if no dealers found
	}
	return nearest;
}

/**
	Takes full dealer data from zip code API response and reformats it into data to pass back in HTTP response
*/
function _formatNearestDealerData(dealer) {
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
		leadsEmail: dealer.brand.goalrilla.leads_email,
		distance: dealer.distNum
	}

	return formattedDealer;
}

function _formatSpecificDealerData(dealer) {
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
		leadsEmail: dealer.brand.goalrilla.leads_email,
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
		return _formatNearestDealerData(_getNearestValidDealerFromGroup(dealers.dealers, zip));
	});
}

/**
	Fetches information about a dealer from their ID
	@param {Number} dealerId Dealer ID to search for
	@returns {Promise.<Object>} Formatted dealer data
*/
function getDealerInformation(dealerId) {
	const endpoint = `https://apis.escaladesports.com/v1/dealers/territory/goalrilla/dealer/${dealerId}`;
	return request(endpoint).then(res => {
		const dealer = JSON.parse(res) || {};
		return _formatSpecificDealerData(dealer);
	});
}

module.exports = {
	findNearestDealer,
	getDealerInformation,
	_getNearestValidDealerFromGroup
}