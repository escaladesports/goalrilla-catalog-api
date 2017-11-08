const chai = require('chai');
const reqValidator = require('../src/request-validator.js');

// chai setup
const should = chai.should();
const expect = chai.expect;

describe('Request Validator', function() {
	it('should return false if no input is given', done => {
		const res = reqValidator.validateCatalogRequest();
		expect(res).to.be.false;
		done();
	})
})