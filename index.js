/* eslint-env node */
'use strict';

module.exports = {
	name: 'ember-cli-hallo',

	isDevelopingAddon: function() {
		return true;
	},

	included: function(app) {
		this._super.included.apply(this, arguments);

		app.import(app.bowerDirectory + '/jquery/dist/jquery.min.js');
		app.import(app.bowerDirectory + '/jquery-htmlclean/jquery.htmlClean.min.js');
		app.import(app.bowerDirectory + '/jquery-ui/ui/minified/jquery-ui.min.js');
		app.import(app.bowerDirectory + '/rangy-official/rangy-core.min.js');
		app.import(app.bowerDirectory + '/font-awesome/css/font-awesome.min.css');
		app.import(app.bowerDirectory + '/font-awesome/fonts/FontAwesome.otf');
		app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.eot');
		app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.svg');
		app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.ttf');
		app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.woff');
		app.import(app.bowerDirectory + '/hallo/dist/hallo.js');
	}
};
