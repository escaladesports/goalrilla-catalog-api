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
		return false;
	}
	if (!validateEmail(data.userEmail)) {
		return false;
	}
	if (!validateZip(data.userZip)) {
		return false;
	}
	return true;
}

module.exports = {
	validateCatalogRequest
}