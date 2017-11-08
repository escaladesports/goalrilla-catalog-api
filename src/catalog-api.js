const requestValidator = require('./request-validator.js');

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
	return Promise.resolve(true);
}

module.exports = {
	postCatalogRequest
}