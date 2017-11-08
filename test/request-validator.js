const chai = require('chai');
const reqValidator = require('../src/request-validator.js');

// chai setup
const should = chai.should();
const expect = chai.expect;

describe('Request Validator', function() {
	it('should return false if no input is given', done => {
		const res = reqValidator.validateCatalogRequest();
		expect(res).to.be.an('error');
		done();
	})

	it('should return false if required value is missing', done => {
		const params = {
			userFirstName: 'Test',
			userLastName: 'Test',
			// email missing
			userAddress: '817 Maxwell Ave',
			userCity: 'Evansville',
			userState: 'Indiana',
			userZip: '47711'
		};
		const res = reqValidator.validateCatalogRequest(params);
		expect(res).to.be.an('error');
		done();
	});

	it('should return false if email address is invalid', done => {
		const params = {
			userFirstName: 'Test',
			userLastName: 'Test',
			userEmail: 'NotCorrectlyFormatted',
			userAddress: '817 Maxwell Ave',
			userCity: 'Evansville',
			userState: 'Indiana',
			userZip: '47711'
		};
		const res = reqValidator.validateCatalogRequest(params);
		expect(res).to.be.an('error');
		done();
	});

	it('should return false if zip code is invalid American/Canadian zip code', done => {
		const params = {
			userFirstName: 'Test',
			userLastName: 'Test',
			userEmail: 'test@gmail.com',
			userAddress: '817 Maxwell Ave',
			userCity: 'Evansville',
			userState: 'Indiana',
			userZip: '123'
		};
		const res = reqValidator.validateCatalogRequest(params);
		expect(res).to.be.an('error');
		done();
	});

	it('should return true if zip code is valid American zip code', done => {
		const params = {
			userFirstName: 'Test',
			userLastName: 'Test',
			userEmail: 'test@gmail.com',
			userAddress: '817 Maxwell Ave',
			userCity: 'Evansville',
			userState: 'Indiana',
			userZip: '47711'
		};
		const res = reqValidator.validateCatalogRequest(params);
		expect(res).to.be.true;
		done();
	});

	it('should return true if zip code is valid Canadian zip code (formatted with a space)', done => {
		const params = {
			userFirstName: 'Test',
			userLastName: 'Test',
			userEmail: 'test@gmail.com',
			userAddress: '817 Maxwell Ave',
			userCity: 'Evansville',
			userState: 'Indiana',
			userZip: 'K1A 0A1'
		};
		const res = reqValidator.validateCatalogRequest(params);
		expect(res).to.be.true;
		done();
	});

	it('should return true if zip code is valid Canadian zip code (formatted without a space)', done => {
		const params = {
			userFirstName: 'Test',
			userLastName: 'Test',
			userEmail: 'test@gmail.com',
			userAddress: '817 Maxwell Ave',
			userCity: 'Evansville',
			userState: 'Indiana',
			userZip: 'K1A0A1'
		};
		const res = reqValidator.validateCatalogRequest(params);
		expect(res).to.be.true;
		done();
	});

	it('should return true if valid data is entered', done => {
		const params = {
			userFirstName: 'Test',
			userLastName: 'Test',
			userEmail: 'test@gmail.com',
			userAddress: '817 Maxwell Ave',
			userCity: 'Evansville',
			userState: 'Indiana',
			userZip: '47711'
		};
		const res = reqValidator.validateCatalogRequest(params);
		expect(res).to.be.true;
		done();
	});
});