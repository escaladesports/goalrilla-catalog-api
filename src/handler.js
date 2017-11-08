'use strict';

const catalogApi = require('./catalog-api.js');

/*
  Main entry points go here
  Append function names with "V" and their major version number (V1, V2, etc.)
  Compatibility-breaking changes should be put into a new function and the old function should be left usable
*/

module.exports.requestCatalogV1 = (event, context, callback) => {
  const eventBody = JSON.parse(event.body);
  const params = {
    userFirstName: eventBody['First Name'], 
    userLastName: eventBody['Last Name'],
    userEmail: eventBody['Email'],
    userAddress: eventBody['Address'],
    userCity: eventBody['City'],
    userState: eventBody['State'],
    userZip: eventBody['Zip']
  };

  return catalogApi.postCatalogRequest(params).then(res => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'requestCatalogV1 function handler executed successfully!',
        input: event
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      }
    };

    callback(null, response);
  }).catch(err => {
    const errors = [err.toString()];

    const response = {
      statusCode: 400,
      body: JSON.stringify({
        errors,
        input: event
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      }
    };

    callback(null,response);
  });
};