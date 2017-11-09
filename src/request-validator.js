const isEmail = require('isemail');
const postcodeValidator = require('postcode-validator');

function _validateEmail(email) {
	return isEmail.validate(email);
}

function _validateZip(zip) {
	const validAmerican = postcodeValidator.validate(zip, 'US');
	const validCanadian = postcodeValidator.validate(zip, 'CA');

	return (validAmerican || validCanadian);
}

function validateCatalogRequest(data) {
	if (!data) {
		throw new Error('validateCatalogRequest requires a \'data\' parameter');
	}
	if (!data.userFirstName) {
		return new Error('A valid first name is required');
	}
	if (!data.userLastName) {
		return new Error('A valid last name is required');
	}
	if (!data.userEmail || !_validateEmail(data.userEmail)) {
		return new Error('A valid email address is required');
	}
	if (!data.userAddress) {
		return new Error('A valid mailing address is required');
	}
	if (!data.userCity) {
		return new Error('A valid city is required');
	}
	if (!data.userState) {
		return new Error('A valid state is required');
	}
	if (!data.userZip || !_validateZip(data.userZip)) {
		return new Error('A valid US or Canadian zip code is required.');
	}
	return true;
}

module.exports = {
	validateCatalogRequest
}