import validate from "jquery-validation";
import "../vendor/jquery-pincode-autotab.min"
import inputMask from "inputmask";
import { config } from "../config";

var forms = {
	focusUpdate: (set = false, field) => {
		let input = $(field);

		let val = Number(
			input
				.val()
				.replace(/\s/g, "")
				.match(/[+-]?([0-9]*[.])?[0-9]+/g)
		);

		if (set) {
			if (val == 0) input.val("").trigger("change");
			else input.val(config.numberWithSpaces(val)).trigger("change");
		} else {
			if (val == 0) input.val("").trigger("change");
			else input.val(val).trigger("change");
		}
	},
	translate: () => {
		$.extend($.validator.messages, {
			required: "Это поле необходимо заполнить",
			remote: "Исправьте это поле чтобы продолжить",
			email: "Введите правильный email адрес.",
			url: "Введите верный URL.",
			date: "Введите правильную дату.",
			dateISO: "Введите правильную дату (ISO).",
			number: "Введите число.",
			digits: "Введите только цифры.",
			creditcard: "Введите правильный номер вашей кредитной карты.",
			equalTo: "Повторите ввод значения еще раз.",
			accept: "Пожалуйста, введите значение с правильным расширением.",
			maxlength: jQuery.validator.format("Нельзя вводить более {0} символов."),
			minlength: jQuery.validator.format("Должно быть не менее {0} символов."),
			rangelength: jQuery.validator.format("Введите от {0} до {1} символов."),
			range: jQuery.validator.format("Введите число от {0} до {1}."),
			max: jQuery.validator.format("Введите число меньше или равное {0}."),
			min: jQuery.validator.format("Введите число больше или равное {0}.")
		});
	},
	validate: () => {
		$("form").each((i, el) => {
			var $form = $(el);

			$form.validate({
				errorPlacement: function (error, element) {
					if(!element.hasClass('checkbox__input')) {
						element.parent().after(error);
					}

				},
				highlight: (element, errorClass, validClass) => {

					$(element)
						.parent()
						.addClass(errorClass)
						.removeClass(validClass);
				},
				unhighlight: (element, errorClass, validClass) => {
					$(element)
						.parent()
						.removeClass(errorClass)
						.addClass(validClass);
				},
				submitHandler: (form) => {
					var data = $(form).serialize();
					alert(data)
					$.ajax({
						type: "POST",
						url: $(form).attr("action"),
						data: data,
						success: function (data) {
							$(form)[0].reset();
						},
					});
				},
				errorElement: 'span',
				ignore: "input.is-deactive",
				debug: false,
				rules: {
					password: {
						minlength: 8
					},
					password_repeat: {
						minlength: 8,
					},
					card: {
						minlength: 19,
					},
					day: {
						minlength: 5,
					},
					code: {
						minlength: 3,
					},
				},
				messages: {
					card: {
						minlength: 'Должно быть не менее 16 символов.'
					}
				}

			});
		});
	},

	events: () => {
		$(".input__field")
			.on("focus", (e) => {
				let $input = $(e.target);
				$input.parent().addClass("is-focus");
			})
			.on("blur change", (e) => {
				let $input = $(e.target);

				if ($input.val() == "") $input.parent().removeClass("is-focus");
			});
		$('.js-type-change').on('click', function () {
			const input = $(this).closest('.input').find('input')
			if(input.attr('type') == 'text') {
				$(this).closest('.input').find('input').attr('type', 'password')
			} else {
				$(this).closest('.input').find('input').attr('type', 'text')
			}
		})
		$('.js-checkbox input[type="checkbox"]').on('change', function () {
			if($(this).is(":checked")) {
				$(this).closest('.modal').find('button[type="submit"]').addClass('js-modal')
			} else {
				$(this).closest('.modal').find('button[type="submit"]').removeClass('js-modal')
			}c
		})
		$(".code input").jqueryPincodeAutotab({
			prevElement: null,
			nextElement: null,
		});
	},

	init: () => {
		forms.translate()
		forms.validate();
		forms.events();

		$(".js-num").on({
			"keypress keyup": forms.num,
			focus: (e) => forms.focusUpdate(0, e.currentTarget),
			focusout: (e) => forms.focusUpdate(1, e.currentTarget),
		});
		inputMask().mask($("input[data-inputmask]"), {})

	},
};

export { forms };
