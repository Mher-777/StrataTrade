import { defaults } from "./modules/defaults";
import { config } from "./config";
import { sliders } from "./modules/sliders";
import { button } from "./modules/button";
import { forms } from "./modules/forms";

var App = () => {};

App.prototype.init = () => {

	defaults.init();
	sliders.init();
	button.init();
	forms.init();
	config.log('app init')
	
};

export { App };