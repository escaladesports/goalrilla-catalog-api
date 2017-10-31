function sampleAddFive(num) {
	const parsed = parseInt(num);
	if (isNaN(parsed)) {
		return new Error('sampleAddFive "num" parameter expected a valid number');
	}
	return parsed + 5;
}

module.exports = {
	sampleAddFive
}