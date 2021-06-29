import Swiper from 'swiper';
import { config } from "../config";
import { defaults } from "./defaults";

var sliders = {
	selector: ".js-slider",

	settings: {

	},

	build: (selector) => {
		let data = $(selector).attr("data-settings")
			? $(selector).data("settings")
			: {};

		let clone = JSON.parse(JSON.stringify(sliders.settings));

		let current = Object.assign(clone, data);
		new Swiper(sliders.selector, current)
	},

	run: (selector) => {
		sliders.build(selector);
	},

	init: () => {
		if (!$(sliders.selector).length) return false;

		$(window).on("load", (e) => {
			$(sliders.selector).each((i, el) => {
				sliders.run(el);
			});
		});
	},
};

export { sliders };
