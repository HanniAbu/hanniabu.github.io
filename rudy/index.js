var express = require('express');
var quotes = [];


var bodyParser = require('body-parser');


var app = express();


app.use(bodyParser.urlencoded({
extended: false
}))


app.get('/', function(req, res) {

var html = '<div><center><br><br><br><br><br><br><br><br><br><br><br><br><form method="post" action="">\
				<input type="text" placeholder="Enter A Name" name="userName"/>\
				<button type="submit">Submit!</button>\
			</form></center></div>';
res.send(html);

});


app.post('/', function(req, res) {
var userName = req.body.userName;

quotes.push(userName);

var html = '<br>'+'<br>'+'<br>'+'<br>'+'<br>'+'<br>'+'<br>'+'<br>'+'<br>'+'<br>'+'<h2>' + '<center>' + 'Hello: ' + userName +  '</center>' +'</h2>' + '<center>' + 
'<a href="/"><button>Add Name</button></a>' + '<br>' + '<br>' +
'<a href="/quotes"><button>See Names Here</button></a>' + '<br>' + '<br>' +
'<a href="/random"><button>Click Here For A Random Name</button> </a>' + '</center>';
res.send(html);
console.log(quotes);
});

app.get('/quotes', function(req, res) {
res.send('<br>'+'<br>'+'<br>'+'<br>'+'<br>'+'<br>'+'<br>'+'<br>'+'<br>'+'<br>'+'<h2>' +  '<center>' + quotes + '</center>' +'</h2>' + '<center>' + '<br>' +
'<a href="/"><button>Add Name</button></a>' + '<br>' + '<br>' +
'<a href="/random"><button>Click Here For A Random Name</button></a>' +  '</center>' );

});

app.get('/random', function(req, res) {
var arrayLength = quotes.length;
var ran = Math.floor((Math.random() * arrayLength) + 0);
res.send('<br>'+'<br>'+'<br>'+'<br>'+'<br>'+'<br>'+'<br>'+'<br>'+'<br>'+'<br>'+'<h2>' +   '<center>' + quotes[ran] + '</center>' +'</h2>' + '<center>' + '<br>' +
'<a href="/"><button>Add Name</button></a>' + '<br>' + '<br>' +
'<a href="/quotes"><button>See Names Here</button></a>' + '<br>' + '<br>' +
'<a href="/random"><button>Click Here For A Random Name</button></a>' +  '</center>' );
});

app.listen(9000);