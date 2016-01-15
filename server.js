'use strict';

const express = require('express');
const app     = express();
const request = require('request');

app.use(express.static('public'));

// *** Set up route for grabbing quote *** //
app.get('/quote', (req, res) => {
  let myUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
  request(myUrl, (error, response, body) => {
    if(!error && response.statusCode === 200) {
      let jsonData = JSON.parse(body);

      res.json(jsonData);
    }
  });
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log('Express server running.');
});
