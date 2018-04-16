var https = require('https');

module.exports = function getHTML (options, callback) {
    /* Your code here */
  https.get(options, function (response) {
    var body = '';
    response.setEncoding('utf-8');
    response.on('data', function(chunk) {
        body += chunk;
      });
    response.on('end', function() {
      callback(body);
    });
  });
};