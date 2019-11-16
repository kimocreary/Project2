const EXPRESS = require('express');

const PORT = process.env.PORT || 8080;

const APP = EXPRESS();

APP.use(EXPRESS.urlencoded({ extended: true }));
APP.use(EXPRESS.json());

APP.use(EXPRESS.static('public'));

const ROUTES = require('./controllers/burgers_controller.js');

APP.use(ROUTES);

require('./routes')(APP);

APP.listen(PORT, function() {
	console.log('Server listening on: http://localhost:' + PORT);
});
