var defaults = {

	events: () => {
		$('.js-open-dropdown').on('click', function (e) {
			e.preventDefault()
			const $this = $(this)
			const index = $this.index()
			const dropdown = $this.closest('.search').find('.js-dropdown')
			$(dropdown).each((i, el) => {
				$(el).slideUp()
				if(i === index) {
					$(el).slideToggle()
				}
			});
		})
		$('.js-close-dropdown').on('click', function (e) {
			$(this).closest('.js-dropdown').slideUp()
		})
	},

	init: () => {

		defaults.events();

	}
}

export { defaults }