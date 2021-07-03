
var card = {
    content: $('.js-card'),
    init: () => {
        const number = card.content.find('.card__number'),
              day = card.content.find('.card__day'),
              code = card.content.find('.card__code');

        const inputNumber = card.content.find('.input__field[name="card"]'),
            inputDay = card.content.find('.input__field[name="day"]'),
            inputCode = card.content.find('.input__field[name="code"]');

        inputNumber.on('input', function () {
            number.text($(this).val())
        })

        inputDay.on('input', function () {
            day.text($(this).val())
        })

        inputCode.on('input', function () {
            code.text($(this).val())
        })
    },
};

export { card };
