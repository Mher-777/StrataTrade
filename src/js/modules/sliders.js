import Swiper from 'swiper';
import SwiperCore, { Autoplay, EffectFade, Pagination } from 'swiper/core';
SwiperCore.use([Autoplay, EffectFade, Pagination]);

var sliders = {
	selector: ".js-slider",

	settings: {
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	},

	build: (selector) => {
		let data = $(selector).attr("data-settings")
			? $(selector).data("settings")
			: {};
		let clone = JSON.parse(JSON.stringify(sliders.settings));

		let current = Object.assign(clone, data);
		new Swiper($(selector)[0], current)
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
