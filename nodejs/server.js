//require Express
var express = require('express');
var app = express();



app.post('/save-number', function(req, res) {

    save-number = {
        name: 'My Name',
        phone_number: 45872698,
        occupation: 'Full Stacker'
    };
    
     var contact = [save-number];
 });


app.get('/', function(req, res) {
    res.json(contact);

});



app.listen(9090, function() {
    console.log('server running on port 9090');
});
