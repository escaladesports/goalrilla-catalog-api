const requestValidator = require('./request-validator.js');

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