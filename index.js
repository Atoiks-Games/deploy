var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))

app.use(express.static('public'))

app.get('/', function (req, res) {
	res.redirect('http://atoiks-games.github.io')
})

app.get('/pharah-system', function (req, res) {
	res.download('/pharah-system.zip', 'pharah-system.zip');
})

app.use(function (req, res) {
	res.status(404)
	   .send('<em>The page you are trying to navigate to cannot be found! Click <a href="/">here</a> to return to homepage.</em>')
})

app.use(function (req, res) {
	res.status(500)
	   .send('<em>Something went wrong! Click <a href="/">here</a> to return to homepage.</em>')
})

app.listen(app.get('port'), function () {
	console.log('Node app is running on port ' + app.get('port'))
})
