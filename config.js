module.exports = function( app, express ) {
	var config = this,
	sass = require('node-sass'),
	ECT = require('ect');

	app.configure( function() {
		app.set('port', 80);
		app.set('view options', { layout: false });
		app.set('ectRenderer', ECT({ watch: true, root: __dirname + '/views' }))
		app.set('sliderOptions', {
			brand: "Mint Velvet",
			title: "Responsive Proposal",
			slideDir: "slides/",
			enableProgress: false,
			slides: [
				{
					file: 'slide1.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 1',
					param: {
						image: 'image file',
						title: 'title example',
					}
				},
				{
					file: 'slide2.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 2'
				},
				{
					file: 'slide3.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 3'
				},
				{
					file: 'slide4.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 4'
				},
				{
					file: 'slide5.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 5'
				},
				{
					file: 'slide6.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 6'
				}
			]
		});
		app.use(express.static(__dirname + '/public')); // Public js methods
		app.use(
			sass.middleware({
				src: __dirname + '/sass',
				dest: __dirname + '/public',
				debug: true,
				outputStyle: 'compressed'
			})
		);
	});
	console.log( 'Configuration loaded' );
	return config;
}