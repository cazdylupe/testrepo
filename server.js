/*
 * Testing Node request Module.
 * @Author Raj Narayanan
 */
var _request = require('request');

_request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
})
