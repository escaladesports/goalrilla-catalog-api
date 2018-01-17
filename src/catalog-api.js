const requestValidator = require('./request-validator.js');
const dealers = require('./dealers.js');
const email = require('./email.js');

function _catalogRequestActions(data) {
	let fullData;
	let dealerFetchFunction;

	if (data.dealerId) {
		dealerFetchFunction = () => dealers.getDealerInformation(data.dealerId);
	}
	else {
		dealerFetchFunction = () => dealers.findNearestDealer(data.userZip);
	}

	return dealerFetchFunction().then(dealer => {
		const dealerRequestAddress = dealer.leadsEmail;
		fullData = Object.assign({}, data);
		fullData.dealer = dealer;
		// email dealer

		console.log('Dealer found:');
		console.dir(dealer);

		if (!dealerRequestAddress) {
			return Promise.reject(new Error('Requested dealer does not have a listed email address for catalog requests'));
		}

		console.log('Emailing dealer at '+dealerRequestAddress);

		return email.sendDealerCatalogEmail(fullData, dealerRequestAddress);
	}).then(() => {
		return fullData;
	});
}

/**
	Validates and handles catalog requests
	@param {Object} params
	@param {Number|null} params.dealerId Optional dealer ID to send request to; if blank, will send to nearest dealer found based on zip code
	@param {String} params.userFirstName
	@param {String} params.userLastName
	@param {String} params.userEmail
	@param {String} params.userAddress
	@param {String} params.userCity
	@param {String} params.userState
	@param {String} params.userZip
	@returns {Promise.<Boolean|Error>} Returns a promise resolving to 'true' or rejecting with an error
*/
function postCatalogRequest(params) {
	const err = requestValidator.validateCatalogRequest(params);
	if (err !== true) {
		return Promise.reject(err);
	}
	return _catalogRequestActions(params);
}

module.exports = {
	postCatalogRequest
}