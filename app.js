var express = require("express"),
	app = express(),
	currentSlide = 0,
	connectCounter = 0,
	config = require('./config.js');

config(app, express);
app.engine('.ect', app.get('ectRenderer').render);
require('./routes/index')(app);

var io = require('socket.io').listen(app.listen(app.get('port')));
console.log("Listening on port " + app.get('port'));

io.sockets.on('connection', function (socket) {
	socket.on('send', function (data) {
		if (data.direction) {
			var action = data.direction;
			if (action == "next" && currentSlide < data.end - 1) {
				currentSlide += 1;
			} else if (action == "prev" && currentSlide > 0) {
				currentSlide -= 1;
			}
			data.currentSlide = currentSlide;
		}
		if (typeof data.currentSlide === 'undefined') data.currentSlide = currentSlide;
		currentSlide = data.currentSlide;
		if (data.toggle === true) {
			io.sockets.emit('toggleProgress', data);
		} else {
			io.sockets.emit('changeSlide', data);
		}
	});

	socket.on('sendToggleProgress', function (data) {
		console.log('test');
		io.sockets.emit('toggleProgress', data);
	});
});
