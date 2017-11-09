const requestValidator = require('./request-validator.js');
const dealers = require('./dealers.js');

function catalogRequestActions(data) {
	return dealers.findNearestDealer(data.userZip).then(dealer => {
		// email dealer
		return dealer;
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