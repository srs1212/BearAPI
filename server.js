var express = require('express'); //no ./ needed here it knows to look in node modules file

var app = express();
var monte = {name: 'monte', id: 001, age: 30, gender: 'male'};
var jack = {name: 'jack', id: 002, age: 35, gender: 'male'};
var dora = {name: 'dora', id: 003, age: 35, gender: 'female'};
var bud = {name: 'bud', id: 004, age: 19, gender: 'male'};

var bears = [monte, jack, dora, bud];

app.get('/api/bears', function (req, res){
	res.json(bears);
});
//give bears name, id, age, gender

app.listen(3000, function(){
	console.log('server up and running');
}); //get is to read (of Crud)