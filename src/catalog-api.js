const requestValidator = require('./request-validator.js');

function postCatalogRequest(params) {
	if (!requestValidator.validateCatalogRequest(params)) {
		return Promise.reject(new Error('The request data was malformed- ensure parameter data is correct and try again'));
	}
	return Promise.resolve(true);
}

module.exports = {
	postCatalogRequest
}