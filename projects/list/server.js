var express = require('express');
var bodyParser = require('body-parser');

var list = [];
var app = express();
var randomButton = ('<a href="/random"><button>Click Here For A Random Item From Your List</button></a>');
var allButton = ('<a href="/list"><button>View List</button></a>');
var addButton = ('<a href="/add"><button>Add Item</button></a>');
var purpose = '<h1>What are you making a list for?</h1>';
var gap = ('<br><br><br><br><br><br><br><br><br><br>');
var br = ('<br><br>');
var htmlStart = (gap + '<h2><center>');
var htmlEnd = ('</center></h2><center>' + addButton + br + 
			allButton + br + randomButton + br + '</center>');

// //Displays array elements as a list. Need to replace 'list' in app.get(/list) with 'colomnList'
// var columnList = function() {
// 		for (i=0;i<list.length;i++) {
// 			conosle.log(list[i] + '<br>');
// 		};};

app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function(req, res) {
	var html = br + '<div><center>' + gap + purpose + '<br><form method="post" action="/add">\
					<input type="text" name="listType" autofocus/>\
					<button type="submit">Submit!</button>\
				</form></center></div>';
	res.send(html);
});

app.post('/add', function(req, res) {
	var variable = req.body.listType;
	var upper = variable[0].toUpperCase();
	var lower = variable.substr(1);
	var capitalize = (upper + lower);
	var title = ('<h1>'+ capitalize + ' List!</h1><strike>' + purpose + '</strike>');
	var html = '<div><center>' + '<br><br><br><br><br><br><br><br><br>' + title + '<form method="post" action="/add">\
					<input type="text" placeholder="Start Your List Here" name="listEntry" autofocus/>\
					<button type="submit">Submit!</button>\
				</form></center></div>';
	res.send(html);
});

app.post('/add', function(req, res) {
	var listEntry = req.body.listEntry;
	list.push(listEntry);
	var html = htmlStart + 'Entry #' + list.length + ': ' + listEntry + htmlEnd;
	res.send(html);
	console.log(list);
});

app.get('/list', function(req, res) {
	res.send(htmlStart + list + htmlEnd);
});

app.get('/random', function(req, res) {
	var arrayLength = list.length;
	var ran = Math.floor((Math.random() * arrayLength) + 0);
	res.send(htmlStart + list[ran] + htmlEnd);
});


app.listen(9000);