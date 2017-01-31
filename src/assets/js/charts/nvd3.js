'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
  $(function() {
    if (!element_exists('#charts-nvd3')) {
      return false;
    }
    var colors = bootstrap_colors();
    var url = page_url();
		var background = url.background;
		var color_palettes = palettes();
    var palette = color_palettes[background];

        //bar chart 1
    nv.addGraph(function() {
      var chart = nv.models.multiBarChart()
                .reduceXTicks(true)
                .rotateLabels(0)
                .showControls(false)
                .groupSpacing(0)
                .color([colors.primary, colors.secondary, colors.info]);
      chart.xAxis
                .tickFormat(d3.format(',f'));
      chart.yAxis
                .tickFormat(d3.format(',.1f'));
      d3.select('#nvd3-bar-1 svg')
                .datum(barChartData())
                .call(chart);
      nv.utils.windowResize(chart.update);
      return chart;
    });
        //bar chart 2
    nv.addGraph(function() {
      var chart = nv.models.multiBarChart()
                .reduceXTicks(true)
                .rotateLabels(0)
                .showControls(false)
                .groupSpacing(0.1)
                .stacked(true)
                .color([colors.danger, colors.warning, colors.success]);
      chart.xAxis
                .tickFormat(d3.format(',f'));
      chart.yAxis
                .tickFormat(d3.format(',.1f'));
      d3.select('#nvd3-bar-2 svg')
                .datum(barChartData())
                .call(chart);
      nv.utils.windowResize(chart.update);
      return chart;
    });
        //pie chart
    nv.addGraph(function() {
      var chart = nv.models.pieChart()
                .x(function(d) {
                  return d.label;
                })
                .y(function(d) {
                  return d.value;
                })
                .showLegend(false)
                .color([colors.primary, colors.secondary, colors.info, colors.success])
                .showLabels(true);
      d3.select('#nvd3-pie svg')
                .datum(pieChartData())
                .transition()
                .duration(350)
                .call(chart);
      return chart;
    });
        //donut chart
    nv.addGraph(function() {
      var chart = nv.models.pieChart()
                .x(function(d) {
                  return d.label;
                })
                .y(function(d) {
                  return d.value;
                })
                .showLabels(true)
                .showLegend(false)
                .labelThreshold(0.05)
                .labelType('percent')
                .color([colors.primary, colors.secondary, colors.info, colors.success])
                .donut(true)
                .donutRatio(0.35);
      d3.select('#nvd3-donut svg')
                .datum(pieChartData())
                .transition()
                .duration(350)
                .call(chart);
      return chart;
    });
        //bar chart 2
    nv.addGraph(function() {
      var chart = nv.models.discreteBarChart()
                .x(function(d) {
                  return d.label;
                })
                .y(function(d) {
                  return d.value;
                })
                .staggerLabels(true)
                .showValues(true)
                .color([colors.danger, colors.warning, colors.success]);
      d3.select('#nvd3-bar-3 svg')
                .datum(discreteBarChartData())
                .call(chart);
      nv.utils.windowResize(chart.update);
      return chart;
    });
        //horizontal bar
    nv.addGraph(function() {
      var chart = nv.models.multiBarHorizontalChart()
                .x(function(d) {
                  return d.label;
                })
                .y(function(d) {
                  return d.value;
                })
                .margin({
                  top: 30,
                  right: 20,
                  bottom: 50,
                  left: 175
                })
                .showValues(true)
                .showControls(true);
      chart.yAxis
                .tickFormat(d3.format(',.2f'));
      d3.select('#nvd3-horizontal-bar svg')
                .datum(multiBarHorizontalChartData())
                .call(chart);
      nv.utils.windowResize(chart.update);
      return chart;
    });
        //line chart
    var nvd3LineChartData = sinAndCos();
    nv.addGraph(function() {
      var chart = nv.models.lineChart()
                .useInteractiveGuideline(true)
                .showLegend(false)
                .showYAxis(true)
                .color([colors.primary])
                .forceY([-1, 1])
                .showXAxis(true);
      chart.xAxis
                .axisLabel('Time (ms)')
                .tickFormat(d3.format(',r'));
      chart.yAxis
                .axisLabel('Voltage (v)')
                .tickFormat(d3.format('.02f'));
      d3.select('#nvd3-line-1 svg')
                .datum(nvd3LineChartData.slice(1, 2))
                .call(chart);
      nv.utils.windowResize(function() {
        chart.update();
      });
      return chart;
    });
    nv.addGraph(function() {
      var chart = nv.models.lineChart()
                .useInteractiveGuideline(true)
                .showLegend(false)
                .color([colors.primary, colors.secondary, colors.info])
                .forceY([0, 1])
                .showYAxis(true)
                .showXAxis(true);
      chart.xAxis
                .axisLabel('Time (ms)')
                .tickFormat(d3.format(',r'));
      chart.yAxis
                .axisLabel('Voltage (v)')
                .tickFormat(d3.format('.02f'));
      d3.select('#nvd3-line-2 svg')
                .datum(nvd3LineChartData.slice(2, 3))
                .call(chart);
      nv.utils.windowResize(function() {
        chart.update();
      });
      return chart;
    });
    nv.addGraph(function() {
      var chart = nv.models.lineChart()
                .useInteractiveGuideline(true)
                .showLegend(true)
                .showYAxis(true)
                .forceY([-1.5, 1.5])
                .color([colors.primary, colors.secondary, colors.info])
                .showXAxis(true);
      chart.xAxis
                .axisLabel('Time (ms)')
                .tickFormat(d3.format(',r'));
      chart.yAxis
                .axisLabel('Voltage (v)')
                .tickFormat(d3.format('.02f'));
      d3.select('#nvd3-line-3 svg')
                .datum(nvd3LineChartData)
                .call(chart);
      nv.utils.windowResize(function() {
        chart.update();
      });
      return chart;
    });
        //scatter chart
    var nvd3ScatterChartData = scatterChartData();
    nv.addGraph(function() {
      var chart = nv.models.scatterChart()
                .showDistX(false)
                .showDistY(false)
                .showLegend(false)
                .color([colors.primary]);
      chart.xAxis.tickFormat(d3.format('.01f'));
      chart.yAxis.tickFormat(d3.format('.01f'));
      d3.select('#nvd3-scatter svg')
                .datum(nvd3ScatterChartData.slice(1, 2))
                .call(chart);
      nv.utils.windowResize(chart.update);
      return chart;
    });
  });
})();
