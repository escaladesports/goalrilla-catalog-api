const requestValidator = require('./request-validator.js');
const dealers = require('./dealers.js');
const email = require('./email.js');

function catalogRequestActions(data) {
	let dealerResponseData;

	return dealers.findNearestDealer(data.userZip).then(dealer => {
		console.log('nearest dealer:');
		console.dir(dealer);
		const dealerAddress = 'christian.l.sedlacek@gmail.com';
		const dealerResponseData = dealer;
		// email dealer
		return email.sendDealerCatalogEmail(data, dealerAddress);
	}).then(() => {
		return dealerResponseData;
	});
}

/**
	Validates and handles catalog requests
	@param {Object} params
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
	return catalogRequestActions(params);
}

module.exports = {
	postCatalogRequest
}