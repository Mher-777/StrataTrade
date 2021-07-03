import tippy from 'tippy.js';

var tooltip = {
    init: () => {
        tippy('[data-tippy-content]', {
            allowHTML: true,
            duration: 200,
            trigger: 'click',
            maxWidth: null,
        });
    }
}

export { tooltip };