const google = require('googleapis');
const auth = require('./auth.js');
const storeConfig = require('../config/store.config.js');
const sheets = google.sheets('v4');

const stage = process.env.STAGE || 'dev';

/**
	Promise wrapper around googleapis sheets append method
	@param {Object} params Params to pass to google sheets
	@param {Object} [options] Options to pass to google sheets (optional)
	@returns {Promise.<Object>} Promise resolving to response from Google Sheets
*/
function appendPromisified(params, options={}) {
	return new Promise((resolve, reject) => {
		sheets.spreadsheets.values.append(params, options, (err, response) => { 
			if (err) {
				reject(err);
			}
			else {
				resolve(response) 
			}
		});
	});
}

/**
	Appends data to a Google Sheets spreadsheet
	@param {Object} auth Google JWT auth object
	@param {Object} spreadsheetData
	@param {String} spreadsheetData.spreadsheetId Google Sheets spreadsheet ID
	@param {String} spreadsheetData.range Google Sheets A1 notation range to append to
	@param {Array.<Array>} dataRows Spreadsheet data to append to sheet formatted as a two-dimensional array
	@returns {Promise.<Object>} Promise resolving to response from Google Sheets
*/
function appendSpreadsheet(auth, spreadsheetData, dataRows) {
	const resource = {
		majorDimension: 'ROWS',
		values: dataRows
	}
	const params = {
		spreadsheetId: spreadsheetData.spreadsheetId,
		range: spreadsheetData.range,
		valueInputOption: 'RAW',
		resource,
		auth
	}

	return appendPromisified(params, {});
}

/**
	Save a catalog request in datastore (currently using Google Sheets)
	@param {Object} data Dealer request data object
*/
function saveCatalogRequest(data) {
	const sheetId = storeConfig[stage].spreadsheetId;
	const category = productTypeMap.lookupWarrantyClaimCategory(data.productType);
	const sheetName = storeConfig[stage].spreadsheetNames[category];

	// first two rows of spreadsheet are header information
	// uses columns A:N for key-value storage
	const appendRange = sheetName + '!B2:R2';

	const spreadsheetData = {
		spreadsheetId: sheetId,
		range: appendRange
	}

	// quote data
	const rows = [[
		'', // first column in-use so skip
		data.submissionTimestamp,
		data.userFirstName,
		data.userLastName,
		data.userAddress,
		data.userCity,
		data.userState,
		data.userZip,
		data.userEmail,
		data.dealer.id,
		data.dealer.name,
		data.dealer.leadsEmail,
		data.dealer.address,
		data.dealer.city,
		data.dealer.state,
		data.dealer.zip,
		data.dealer.email,
		data.dealer.phone,
		data.dealer.web
	]];

	return auth.authenticateGoogleSheets(false)
	.then(auth => {
		return appendSpreadsheet(auth, spreadsheetData, rows);
	})
}

module.exports = {
	saveCatalogRequest
}