module.exports = function (app) {
	var options = app.get('sliderOptions');
	app.get("/", function(req, res) {
		res.render("index.ect", {options: options});
	});

	app.get("/control", function(req, res) {
		res.render('index.ect', {control: 'inControl', options: options});
	});
}