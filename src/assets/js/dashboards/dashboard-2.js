'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
  $(function() {
    if (!element_exists('#dashboards-dashboard-2')) {
      return false;
    }
    var config = Storages.localStorage.get('config');
    var colors = bootstrap_colors();
    var url = page_url();
		var background = url.background;
		var color_palettes = palettes();
    var palette = color_palettes[background];

    setTimeout(function() {
      $('#counter-1').text('1,998').counterUp({
        delay: 1,
        time: 300
      });
      $('#counter-2').text('4,553').counterUp({
        delay: 1,
        time: 300
      });
      $('#counter-3').text('230').counterUp({
        delay: 1,
        time: 300
      });
      $('#counter-4').text('4,564').counterUp({
        delay: 1,
        time: 300
      });
      var chartColors = [colors.info, colors.success, colors.primary];
      if (background == 'light') {
        animatedPeityLine('#small-line-1', 50, colors.primary, colors.primary);
        animatedPeityBar('#small-line-2', 50, colors.primary, colors.primary);
        animatedPeityLine('#small-line-3', 50, colors.primary, colors.primary);
        animatedPeityBar('#small-line-4', 50, colors.primary, colors.primary);
      } else if (background == 'dark') {
        chartColors = [colors.primary, colors.warning, colors.danger];
        animatedPeityLine('#small-line-1', 50, colors.warning, colors.warning);
        animatedPeityBar('#small-line-2', 50, colors.warning, colors.warning);
        animatedPeityLine('#small-line-3', 50, colors.warning, colors.warning);
        animatedPeityBar('#small-line-4', 50, colors.warning, colors.warning);
      } else if (background == 'primary') {
        chartColors = [colors.primary, colors.success, colors.info];
        animatedPeityLine('#small-line-1', 50, colors.success, colors.success);
        animatedPeityBar('#small-line-2', 50, colors.success, colors.success);
        animatedPeityLine('#small-line-3', 50, colors.success, colors.success);
        animatedPeityBar('#small-line-4', 50, colors.success, colors.success);
      }
            //bar chart
      nv.addGraph(function() {
        var chart = nv.models.multiBarChart()
                    .reduceXTicks(true)
                    .rotateLabels(0)
                    .showControls(false)
                    .groupSpacing(0.1)
                    .stacked(false)
                    .color(chartColors);
        chart.xAxis
                    .tickFormat(d3.format(',f'));
        chart.yAxis
                    .tickFormat(d3.format(',.1f'));
        d3.select('#nvd3-bar svg')
                    .datum(analyticsBarChartData())
                    .call(chart);
        nv.utils.windowResize(chart.update);
        return chart;
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
    var defaultFill = darken(palette.borderColor, 10);
    var altFill = darken(palette.borderColor, 20);
    var labelFill = darken(palette.borderColor, 30);
    worldMap('world', defaultFill, altFill, labelFill, colors.danger, colors.warning, colors.info, colors.success);
  });
})();
