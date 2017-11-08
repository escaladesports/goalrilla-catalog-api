'use strict';

const catalogApi = require('./catalog-api.js');

/*
  Main entry points go here
  Append function names with "V" and their major version number (V1, V2, etc.)
  Compatibility-breaking changes should be put into a new function and the old function should be left usable
*/

module.exports.requestCatalogV1 = (event, context, callback) => {
  const body = {
    userFirstName: event.body['First Name'], 
    userLastName: event.body['Last Name'],
    userEmail: event.body['Email'],
    userAddress: event.body['Address'],
    userCity: event.body['City'],
    userState: event.body['State'],
    userZip: event.body['Zip']
  };

  return catalogApi.postCatalogRequest(body).then(res => {
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
        errors
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      }
    };

    callback(null,response);
  });
};