var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool=require('pg'),pool;

var config={
    user:'salmondommeti407',
    host:'db.imad.hasura-app.io.',
    database:'salmondommeti407',
    port:'5432',
    password:'process.env DB_PASSWORD'
};

var app = express();
app.use(morgan('combined'));

var counter=0;
app.get('/counter',function(req,res)
{
    counter=counter+1;
    res.send(counter.toString());
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/article-one',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two',function(req,res){
    res.send('Article -two is Here');
});
app.get('/article-three',function(req,res){
    res.send('Article -three is Here');
});
//module p:10's pracitle

app.get('/test-db',function(req,res)
{
   //make selet request
   //respose the request
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
