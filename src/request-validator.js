const isEmail = require('isemail');
const postcodeValidator = require('postcode-validator');

function validateEmail(email) {
	return isEmail.validate(email);
}

function validateZip(zip) {
	const validAmerican = postcodeValidator.validate(zip, 'US');
	const validCanadian = postcodeValidator.validate(zip, 'CA');

	return (validAmerican || validCanadian);
}

function validateCatalogRequest(data) {
	if (
		!data || !data.userFirstName || !data.userLastName || !data.userEmail ||
		!data.userAddress || !data.userCity || !data.userState || !data.userZip
	) {
		return new Error('The request data was malformed- ensure parameter data is correct and try again.');
	}
	if (!validateEmail(data.userEmail)) {
		return new Error('A valid email address is required');
	}
	if (!validateZip(data.userZip)) {
		return new Error('A valid zip code is required.');
	}
	return true;
}

module.exports = {
	validateCatalogRequest
}