var html = require('http');
var express = require('express');
var path = require('path');
var fs = require('fs');

var accountsFile = fs.readFile('./data/account.json', 'UTF8', function(err, data) {});

var app = express();

app.listen(8080);
console.log('Server listening...');

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/register', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/register.html'));
});

app.get('/login.css', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/styles/login.css'));
});

/*
app.get('/login', function(req, res) {
	var user = { username: req.query.username, password: req.query.password };
	
	console.log(accountsFile)

	var isUser = false;

	for(acc in accountsFile) {
		if((acc.username === acc.username) && (acc.password === acc.password)) isUser = true;
	}

	if(isUser) res.send('yes');
	else res.send('no');
});
*/

app.get('/dashboard', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/landing.html'));
});

app.get('/landing.css', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/styles/landing.css'));
});

app.get('/browse', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/browse.html'));
});

app.get('/browse.css', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/styles/browse.css'));
});

app.get('/friends', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/friends.html'));
});

app.get('/friends.css', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/styles/friends.css'));
});

app.get('/library', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/library.html'));
});

app.get('/library.css', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/styles/library.css'));
});

app.get('/results', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/results.html'));
});

app.get('/results.css', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/styles/results.css'));
});

app.get('/stream', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/stream.html'));
});

app.get('/stream.css', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/styles/stream.css'));
});

app.get('/upload', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/upload.html'));
});

app.get('/upload.css', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/styles/upload.css'));
});

app.get('/profile', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/profile.html'));
});

app.get('/profile.css', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/styles/profile.css'));
});

app.get('/pictures/rapper', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/pictures/rapper.png'));
});

app.get('/pictures/play', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/pictures/play.png'));
});

app.get('/pictures/like', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/pictures/like.png'));
});

app.get('/pictures/repost', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/pictures/repost.png'));
});

app.get('/pictures/download', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/pictures/download.png'));
});

app.get('/pictures/vr', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/pictures/virtualRiot.png'));
});

app.get('/songResults', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/songsResults.html'));
});

app.get('/artistResults', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/artistResults.html'));
});

app.get('/otherProfile', function(req, res) {
	res.sendFile(path.join(__dirname, '../frontend/otherProfile.html'));
});

