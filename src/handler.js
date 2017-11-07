'use strict';

/*
  Main entry points go here
  Append function names with "V" and their major version number (V1, V2, etc.)
  Compatibility-breaking changes should be put into a new function and the old function should be left usable
*/

module.exports.createV1 = (event, context, callback) => {
  const body = event.body; // request body - POST variables, etc.

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'createV1 function handler executed successfully!',
      input: event,
    }),
  };

  callback(null, response);
};

module.exports.fetchV1 = (event, context, callback) => {
  const params = event.query; // URL params

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'fetchV1 function handler executed successfully!',
      input: event,
    }),
  };

  callback(null, response);
};