var charts = {
    selector: ".js-chart",

    settings: {

    },

    build: (selector) => {
        let dataSettings = $(selector).attr("data-settings")
            ? $(selector).data("settings")
            : {};
        if($(selector).attr('id') !== 'chart-pie') {
            am4core.addLicense("ch-custom-attribution");
            am4core.options.autoSetClassName = true;
            am4core.ready(function() {
                am4core.useTheme(am4themes_animated);
                var chart = am4core.create($(selector).attr('id'), am4charts.XYChart);
                chart.data = dataSettings;

                /* Create axes */
                var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
                categoryAxis.renderer.labels.template.fontSize = 12;
                categoryAxis.renderer.labels.template.fill = am4core.color("#8181A5");
                categoryAxis.dataFields.category = "time";
                /* Create value axis */
                var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
                valueAxis.renderer.labels.template.fontSize = 12;
                valueAxis.renderer.labels.template.fill = am4core.color("#8181A5");
                valueAxis.renderer.labels.template.color = 'red'
                /* Create series */
                var series = chart.series.push(new am4charts.LineSeries());
                series.dataFields.valueY = "scale";
                series.dataFields.categoryX = "time";
                series.stroke = "#5E81F4";
                series.strokeWidth = 2;
                series.tensionX = 0.7;


                /* Add a single HTML-based tooltip to first series */
                series.tooltipText = `[bold]{price}[/]
                                    Открытых позиций: {position}
                                    Активных сигналов: {active}
                                  `;
                series.tooltip.getFillFromObject = false;
                series.tooltip.background.fill = am4core.color("#303940");
                series.tooltip.background.stroke = am4core.color("#303940");
                series.tooltip.background.fillOpacity = null;
                series.tooltip.pointerOrientation = "vertical";

                /* Create a cursor */
                chart.cursor = new am4charts.XYCursor();
                chart.cursor.maxTooltipDistance = -1;

                var bullet = series.bullets.push(new am4charts.CircleBullet());
                bullet.circle.stroke = am4core.color("#5E81F4");
                bullet.circle.fill = am4core.color("#ffffff");
                bullet.circle.strokeWidth = 18;
                bullet.fillOpacity = 0;
                bullet.strokeOpacity = 0;

                var bulletState = bullet.states.create("hover");
                bulletState.properties.fillOpacity = 1;
                bulletState.properties.strokeOpacity = 1;
            });
        } else {
            var chart = am4core.create($(selector).attr('id'), am4charts.PieChart);
            chart.data = dataSettings;
            var pieSeries = chart.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.value = "port";
            pieSeries.dataFields.category = "strategy";
            pieSeries.slices.template.propertyFields.fill = "color";
// Let's cut a hole in our Pie chart the size of 40% the radius
            chart.innerRadius = am4core.percent(65);

// Put a thick white border around each Slice
            pieSeries.slices.template.strokeWidth = 1;
            pieSeries.slices.template.strokeOpacity = 1;
            pieSeries.tooltip.getFillFromObject = false;
            pieSeries.tooltip.background.fill = am4core.color("#303940");
            pieSeries.tooltip.background.stroke = am4core.color("#303940");
            pieSeries.tooltip.background.fillOpacity = null;
            pieSeries.tooltip.pointerOrientation = "vertical";
            pieSeries.labels.template.disabled = true;
            pieSeries.ticks.template.disabled = true;
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