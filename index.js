var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))

app.use(express.static(__dirname))

app.get('/die-or-rage',
  (req, res) => res.render(__dirname + '/die-or-rage/index.html'))

app.get('/die-or-rage-nm',
  (req, res) => res.render(__dirname + '/die-or-rage-nm/index.html'))

app.get('/Jarg',
  (req, res) => res.render(__dirname + '/Jarg/index.html'))

app.get('/',
  (req, res) => res.redirect('http://atoiks-games.github.io'))

app.listen(app.get('port'),
  () => console.log('Node app is running on port ' + app.get('port')))
