const chai = require('chai');
const sampleLogic = require('../src/sample-logic');

// chai setup
const should = chai.should();
const expect = chai.expect;

describe('Sample Logic', function() {
	it('should add five when given an integer', done => {
		const res = sampleLogic.sampleAddFive(10);
		expect(res).to.equal(15);
		done();
	})

	it('should add five when given a string that is a valid integer', done => {
		const res = sampleLogic.sampleAddFive("15");
		expect(res).to.equal(20);
		done();
	})

	it('should fail when given a value that is not a number', done => {
		const res = sampleLogic.sampleAddFive('hello');
		expect(res).to.be.an('error');
		done();
	})
})