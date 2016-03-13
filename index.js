var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))

app.use(express.static(__dirname))

app.get('/die-or-rage', function (req, res) {
  res.render(__dirname + '/die-or-rage/index.html')
})

app.get('/', function (req, res) {
  res.redirect('http://prototype-games.github.io/')
})

app.listen(app.get('port'), function () {
  console.log('Node app is running on port ' + app.get('port'))
})