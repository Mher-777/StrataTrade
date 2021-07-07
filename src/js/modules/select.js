import select2 from "select2";

var select = {
    selector: $('.js-select'),
    init: () => {
        select.selector.select2({
            minimumResultsForSearch: -1,
            width: '100%'
        }).on('select2:open', function (e) {
            $('.select2-dropdown').addClass('animated fadeIn');
        }).on('select2:close', function (e) {
            $('.select2-dropdown').removeClass('animated fadeIn');
        });
    }
}

export { select };