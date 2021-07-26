var defaults = {

	events: () => {
		$('.js-open-dropdown').on('click', function (e) {
			e.preventDefault()
			const $this = $(this)
			const index = $this.index()
			const dropdown = $this.closest('.search').find('.js-dropdown')
			if($this.hasClass('is-active')) {
				$('.js-open-dropdown').removeClass('is-active')
				$(dropdown).each((i, el) => {
					if(i === index) {
						$(el).slideUp()
					}
				});
			} else {
				$this.toggleClass('is-active')
				$(dropdown).each((i, el) => {
					$(el).slideUp()
					if(i === index) {
						$(el).slideToggle()
					}
				});
			}

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
		document.addEventListener('DOMContentLoaded', function () {
			// конечная дата
			const deadline = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 2);
			// id таймера
			let timerId = null;
			// склонение числительных
			function declensionNum(num, words) {
				return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
			}
			// вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
			function countdownTimer() {
				const diff = deadline - new Date();
				if (diff <= 0) {
					clearInterval(timerId);
				}
				const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
				const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
				const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
				const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

				$days.attr('data-title', declensionNum(days, ['день', 'дня', 'дней']));
				$hours.attr('data-title', declensionNum(hours, ['час', 'часа', 'часов']));
				$minutes.attr('data-title', declensionNum(minutes, ['минута', 'минуты', 'минут']));
				$seconds.attr('data-title', declensionNum(seconds, ['секунда', 'секунды', 'секунд']));

				$days.text(days < 10 ? '0' + days : days);
				$hours.text(hours < 10 ? '0' + hours : hours);
				$minutes.text(minutes < 10 ? '0' + minutes : minutes);
				$seconds.text(seconds < 10 ? '0' + seconds : seconds);

			}
			// получаем элементы, содержащие компоненты даты
			const $days = $('.timer__item_day');
			const $hours = $('.timer__item_hours');
			const $minutes = $('.timer__item_minutes');
			const $seconds = $('.timer__item_seconds');
			// вызываем функцию countdownTimer
			countdownTimer();
			// вызываем функцию countdownTimer каждую секунду
			timerId = setInterval(countdownTimer, 1000);
		});
	},

	init: () => {

		defaults.events();

	}
}

export { defaults }