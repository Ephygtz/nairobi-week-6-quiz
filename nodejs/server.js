//require Express
var express = require('express');
var app = express();

//create an array
var contact = [];


app.post('/save-number', function(req, res) {

  var object = {};

  object.name = name;
  object.number = phone_number;
  object.occupation = occupation;

  contact.push(object);
  res.redirect('/');

});


app.get('/', function(req, res) {
    res.json(contact);

});



app.listen(9090, function() {
    console.log('server running on port 9090');
});
