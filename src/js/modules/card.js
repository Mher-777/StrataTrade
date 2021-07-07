
var card = {
    content: $('.js-card'),
    init: () => {
        const number = card.content.find('.card__number input'),
              day = card.content.find('.card__day input'),
              code = card.content.find('.card__code input');

        const inputNumber = card.content.find('.input__field[name="card"]'),
            inputDay = card.content.find('.input__field[name="day"]'),
            inputCode = card.content.find('.input__field[name="code"]');

        inputNumber.on('input', function () {
            number.val($(this).val())
        })

        inputDay.on('input', function () {
            day.val($(this).val())
        })

        inputCode.on('input', function () {
            code.val($(this).val())
        })
    },
};

export { card };
