import { defaults } from "./modules/defaults";
import { config } from "./config";
import { sliders } from "./modules/sliders";
import { modals } from "./modules/modals";
import { button } from "./modules/button";
import { forms } from "./modules/forms";
import { card } from "./modules/card";
import { tooltip } from "./modules/tooltip";
import { select } from "./modules/select";
import { charts } from "./modules/charts";

var App = () => {};

App.prototype.init = () => {

	defaults.init();
	sliders.init();
	modals.init();
	button.init();
	forms.init();
	card.init();
	tooltip.init();
	select.init();
	charts.init();
	config.log('app init')
	
};

export { App };