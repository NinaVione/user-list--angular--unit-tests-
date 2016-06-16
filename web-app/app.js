var express = require('express');
var app = express();

app.use(express.static(__dirname));

//set port
app.set('port', process.env.PORT || 3000);

//create server
app.listen(3000, function () {
  console.log('app listening on port ' + app.get('port'));
});