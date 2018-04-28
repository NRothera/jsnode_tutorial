var http = require('http');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser')

// This gives us access to all the methods inside the express module
var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.set('view engine', 'ejs')
app.use('/assets', express.static('assets'));

app.listen(3000);

app.get('/', function(req, res){
  res.render('index');
});

app.get('/contact', function(req, res){

  res.render('contact', {qs: req.query});
});

//When we get a post request it gets handled here. That urlencoder is going to fire and parse the data from the form. We can then get that data from req, it stores it for us
app.post('/contact', urlencodedParser, function(req, res){
  res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function(req, res){
  var data = {hobbies: ["reading", "fishing", "gym"]}
  res.render('profile', {person: req.params.name, data: data});
});

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html')
// });
//
// app.get('/contact', function(req, res){
//   res.sendFile(__dirname + '/contact.html')
// });
//
// app.get('/profile/:name', function(req, res){
//   var data = {hobbies: ["reading", "fishing", "gym"]}
//   res.render('profile', {person: req.params.name, data: data});
// });


// var server = http.createServer(function(req, res){
//   console.log("Request was made:" + req.url)
//   res.writeHead(200, {'Content-Type': 'application/json'});
//
//   var myObj = {
//     name: "Ryu",
//     job: 'Ninja',
//     age: 29
//   };
//   res.end(JSON.stringify(myObj));
// });

// For seding HTML to the web page

// var server = http.createServer(function(req, res){
//   console.log("Request was made:" + req.url)
//   if(req.url === '/home' ||  req.url === '/'){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/index.html').pipe(res);
//   } else if(req.url === '/contact'){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/contact.html').pipe(res);
//   } else if(req.url === '/api/ninjas'){
//     var ninjas = [{name: 'ryu', age:29}, {name: 'yoshi', age:32}];
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.end(JSON.stringify(ninjas));
//   } else{
//     res.writeHead(404, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/404.html').pipe(res);
//   }
// });
//   res.writeHead(200, {'Content-Type':'text/html'});
//
//   var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//   // var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
//
//   // Can only pipe from a readable stream, can't from a writeable stream.
//   //This one line does the same thing as the function below
//   // We also want to send this to the response and not to another file, so we send to res
//   myReadStream.pipe(res);
//   // myReadStream.on('data', function(chunk){
//   //   console.log('new chunk received')
//   //   myWriteStream.write(chunk);
//   // });
//
//   // res.end("This is some plain text")
// });

// server.listen(3000, '127.0.0.1');
// console.log("The port is listening correctly")
