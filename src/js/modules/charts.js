var charts = {
    selector: ".js-chart",

    settings: {
        chartArea: {
            width: '100%',
            left: 40,
        },
        hAxis: {
            title: null,
            textStyle:{
                color: '#8181A5',
                fontSize: 12,
                fontName: 'Manrope'
            },

        },
        vAxis: {
            title: null,
            gridlines: {
                color: "rgba(228, 228, 228, 0.6)"
            },
            baselineColor: 'transparent',
            textStyle:{
                color: '#8181A5',
                fontSize: 12,
                fontName: 'Manrope'
            },
            format: 'short',
        },
        colors: ['#5E81F4'],
        legend: 'none',
        tooltip: { isHtml: true }
    },

    build: (selector) => {
        let dataSettings = $(selector).attr("data-settings")
            ? $(selector).data("settings")
            : {};
        google.charts.load('current', {packages: ['corechart', 'line']});
        google.charts.setOnLoadCallback(drawBasic);

        function drawBasic() {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Time');
            data.addColumn('number', 'Sales');
            // A column for custom tooltip content
            data.addColumn({type: 'string', role: 'tooltip', 'p': {'html': true}});
            data.addRows(dataSettings);

            var chart = new google.visualization.LineChart($(selector)[0]);

            chart.draw( data, charts.settings);
        }

    },

    run: (selector) => {
        charts.build(selector);
    },

    init: () => {
        if (!$(charts.selector).length) return false;
        $(window).on('load', function () {
            $(charts.selector).each((i, el) => {
                charts.run(el);
            });
        })
    },
}

export {charts}