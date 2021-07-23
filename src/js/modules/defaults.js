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
		$('.js-tab').on('click', function (e) {
			e.preventDefault()
			const $this = $(this)
			const index = $this.index()
			$('.js-tab').find('a').removeClass('is-active')
			$this.find('a').addClass('is-active')
			$('.js-tab-content').each((i, el) => {
				if(i === index) {
					$(el).addClass('is-active')
				} else {
					$(el).removeClass('is-active')
				}
			});
		})
		$('.js-accordion').on('click', function (e) {
			e.preventDefault()
			$(this).toggleClass('is-active')
			$(this).next().slideToggle()
		})
	},

	init: () => {

		defaults.events();

	}
}

export { defaults }