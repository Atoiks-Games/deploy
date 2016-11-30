var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))

app.use(express.static(__dirname))

app.get('/die-or-rage',
	(req, res) => res.render(__dirname + '/die-or-rage/index.html'))

app.get('/die-or-rage-nm',
	(req, res) => res.render(__dirname + '/die-or-rage-nm/index.html'))

app.get('/jarg',
	(req, res) => res.render(__dirname + '/jarg/index.html'))

app.get('/jarg-2',
	(req, res) => res.render(__dirname + '/jarg-2/index.html'))

app.get('/snark',
	(req, res) => res.render(__dirname + '/snark/index.html'))

app.get('/balance',
	(req, res) => res.render(__dirname + '/balance/index.html/'))

app.get('/',
	(req, res) => res.redirect('http://atoiks-games.github.io'))

app.use((req, res) => res.status(404).send('<em>The page you are trying to navigate to cannot be found! Click <a href="/">here</a> to return to homepage.</em>'));

app.use((req, res) => res.status(500).send('<em>Something went wrong! Click <a href="/">here</a> to return to homepage.</em>'));

app.listen(app.get('port'),
	() => console.log('Node app is running on port ' + app.get('port')))
