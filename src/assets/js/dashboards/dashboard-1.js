'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
  $(function() {
    if (!element_exists('#dashboards-dashboard-1')) {
      return false;
    }
    var colors = bootstrap_colors();
    var url = page_url();
		var background = url.background;
		var color_palettes = palettes();
    var palette = color_palettes[background];

    setTimeout(function() {
      $('#counter-1').text('1,998').counterUp({
        delay: 1,
        time: 100
      });
      $('#counter-2').text('4,553').counterUp({
        delay: 1,
        time: 100
      });
      $('#counter-3').text('230').counterUp({
        delay: 1,
        time: 100
      });
      $('#counter-4').text('4,564').counterUp({
        delay: 1,
        time: 100
      });
      var c1 = lighten(colors.primary, 0);
      var c2 = darken(colors.primary, 20);
      var c3 = darken(colors.primary, 40);
      if (background == 'dark') {
        c1 = lighten(colors.warning, 0);
        c2 = darken(colors.warning, 20);
        c3 = darken(colors.warning, 40);
      }
      if (background == 'primary') {
        c1 = lighten(colors.success, 0);
        c2 = darken(colors.success, 20);
        c3 = darken(colors.success, 40);
      }
      d3.json('/assets/json/stackedAreaData.json', function(data) {
        data.splice(2, 4);
        nv.addGraph(function() {
          var chart = nv.models.stackedAreaChart()
                        .x(function(d) {
                          return d[0];
                        })
                        .y(function(d) {
                          return d[1];
                        })
                        .margin({
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0
                        })
                        .color([c1, c2, c3])
                        .showLegend(false)
                        .showControls(false)
                        .showXAxis(false)
                        .showYAxis(false)
                        .clipEdge(false)
                        .useInteractiveGuideline(true);
          chart.xAxis
                        .showMaxMin(false)
                        .tickFormat(function(d) {
                          return d3.time.format('%x')(new Date(d));
                        });
          chart.yAxis
                        .tickFormat(d3.format(',.2f'));
          chart.legend
                        .rightAlign(true)
                        .margin({
                          top: 0,
                          right: 0,
                          bottom: 0,
                          left: 10
                        });
          d3.select('#sales-volume-chart svg')
                        .datum(data)
                        .transition().duration(5000).call(chart);
          nv.utils.windowResize(chart.update);
          return chart;
        });
      });
    }, 3000);
    var normalFill = darken(palette.borderColor, 10);
    var ratedFill = colors.warning;
    for (var x = 0; x < 10; x++) {
      var rating = Math.floor(Math.floor(Math.random() * 50) / 10) + 1;
      $('#rating-' + x).rateYo({
        starWidth: '22px',
        readOnly: true,
        normalFill: normalFill,
        ratedFill: ratedFill,
        rating: rating
      });
    }
  });
})();
