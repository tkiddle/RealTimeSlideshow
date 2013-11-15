module.exports = function( app, express ) {
	var config = this,
	sass = require('node-sass'),
	ECT = require('ect');

	app.configure( function() {
		app.set('port', 80);
		app.set('view options', { layout: false });
		app.set('ectRenderer', ECT({ watch: true, root: __dirname + '/views' }))
		app.set('sliderOptions', {
			title: "A responsive website for ",
			brand: "Mint Velvet",
			btlogo: 'images/BT-logo.jpg',
			clientlogo: 'images/MV-logo.jpg',
			slideDir: "slides/",
			enableProgress: false,
			slides: [
				


				{
					file: 'intro.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 1',
					param: {
						image: 'image file',
						title: 'title example'
					}
				},


				{
					file: 'text-1.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 1'
				},
				{
					file: 'text-2.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 1'
				},
				{
					file: 'text-3.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 1'
				},
				{
					file: 'text-4.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 1'
				},
				{
					file: 'text-5.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 1'
				},
				{
					file: 'text-6.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 1'
				},
				{
					file: 'text-7.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 1'
				},



				{
					file: 'wireframe-1.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 2'
				},
				{
					file: 'wireframe-2.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 2'
				},


				{
					file: 'res-normal-1.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 2'
				},
				{
					file: 'res-normal-2.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 3'
				},
				{
					file: 'res-normal-3.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 4'
				},
				{
					file: 'res-normal-4.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 5'
				},
				{
					file: 'res-normal-5.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 6'
				},

				//Alternative Menu
				
				{
					file: 'res-burger-1.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 2'
				},
				{
					file: 'res-burger-2.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 3'
				},
				{
					file: 'res-burger-3.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 4'
				},
				{
					file: 'res-burger-4.ect',
					thumb: 'http://placehold.it/140x100&text=Slide 5'
				},
				{
					file: 'res-burger-5.ect',
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