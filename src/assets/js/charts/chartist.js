'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
  $(function() {
    if (!element_exists('#charts-chartist')) {
      return false;
    }
    barChart1('#bar-chart-1');
    barChart2('#bar-chart-2');
    barChart3('#bar-chart-3');
    barChart4('#bar-chart-4');
    lineChart1('#line-chart-1');
    lineChart2('#line-chart-2');
    lineChart3('#line-chart-3');
    lineChart4('#line-chart-4');
    donutChart1('#donut-chart-1');
    donutChart2('#donut-chart-2');
    pieChart1('#pie-chart-1');
    pieChart2('#pie-chart-2');
    scatterChart1('#scatter-chart-1');
  });
})();
function pieChart1(element) {
  var data15 = {
    labels: ['Bananas', 'Apples', 'Grapes'],
    series: [20, 15, 40]
  };
  var options15 = {
    labelInterpolationFnc: function(value) {
      return value[0];
    }
  };
  var responsiveOptions15 = [
    ['screen and (min-width: 640px)', {
      chartPadding: 30,
      labelOffset: 100,
      labelDirection: 'explode',
      labelInterpolationFnc: function(value) {
        return value;
      }
    }],
    ['screen and (min-width: 1024px)', {
      labelOffset: 80,
      chartPadding: 20
    }]
  ];
  new Chartist.Pie(element, data15, options15, responsiveOptions15);
}
function donutChart2(element) {
  var data16 = {
    series: [20, 10, 30, 40]
  };
  var options16 = {
    donut: true,
    donutWidth: 60,
    startAngle: 270,
    total: 200,
    showLabel: false
  };
  new Chartist.Pie(element, data16, options16);
}
function lineChart1(element) {
  var asyncData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    series: [
            [1000, 1200, 1300, 1200, 1440, 1800],
            [1600, 1550, 1497, 1440, 1200, 1000],
    ]
  };
  new Chartist.Line(element, asyncData);
}
function pieChart2(element) {
  var data30 = {
    series: [20, 10, 30, 40]
  };
  new Chartist.Pie(element, data30);
}
function donutChart1(element) {
  var data31 = {
    series: [20, 10, 30, 40]
  };
  var options31 = {
    donut: true
  };
  new Chartist.Pie(element, data31, options31);
}
function scatterChart1(element) {
  var times = function(n) {
    return Array.apply(null, new Array(n));
  };
  var data3 = times(52).map(Math.random).reduce(function(data, rnd, index) {
    data.labels.push(index + 1);
    data.series.forEach(function(series) {
      series.push(Math.random() * 100);
    });
    return data;
  }, {
    labels: [],
    series: times(4).map(function() {
      return [];
    })
  });
  var options3 = {
    showLine: false,
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 13 === 0 ? 'W' + value : null;
      }
    }
  };
  var responsiveOptions3 = [
    ['screen and (min-width: 640px)', {
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 4 === 0 ? 'W' + value : null;
        }
      }
    }]
  ];
  new Chartist.Line(element, data3, options3, responsiveOptions3);
}
function lineChart3(element) {
  var data4 = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    series: [
            [5, 9, 7, 8, 5, 3, 5, 4, 5]
    ]
  };
  var options4 = {
    fullWidth: true,
    low: 0,
    showArea: true
  };
  new Chartist.Line(element, data4, options4);
}
function lineChart4(element) {
  var data5 = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
            [1, 2, 3, 1, -2, 0, 1, 0],
            [-2, -1, -2, -1, -2.5, -1, -2, -1],
            [0, 0, 0, 1, 2, 2.5, 2, 1],
            [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
    ]
  };
  var options5 = {
    high: 3,
    low: -3,
    showArea: true,
    showLine: false,
    showPoint: false,
    fullWidth: true,
    axisX: {
      showLabel: false,
      showGrid: false
    }
  };
  new Chartist.Line(element, data5, options5);
}
function lineChart2(element) {
  var data6 = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    series: [
            [1, 5, 2, 5, 4, 3],
            [2, 3, 4, 8, 1, 2],
            [5, 4, 3, 2, 1, 0.5]
    ]
  };
  var options6 = {
    low: 0,
    showArea: true,
    showPoint: false,
    fullWidth: true
  };
  var lineChart2 = new Chartist.Line(element, data6, options6);
  lineChart2.on('draw', function(data) {
    if (data.type === 'line' || data.type === 'area') {
      data.element.animate({
        d: {
          begin: 2000 * data.index,
          dur: 2000,
          from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
          to: data.path.clone().stringify(),
          easing: Chartist.Svg.Easing.easeOutQuint
        }
      });
    }
  });
}
function barChart4(element) {
  var data7 = {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    series: [
            [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
    ]
  };
  var options7 = {
    high: 10,
    low: -10,
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 2 === 0 ? value : null;
      }
    }
  };
  new Chartist.Bar(element, data7, options7);
}
function barChart3(element) {
  var data8 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
            [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
            [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
    ]
  };
  var options8 = {
    seriesBarDistance: 10
  };
  var responsiveOptions8 = [
    ['screen and (max-width: 640px)', {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }]
  ];
  new Chartist.Bar(element, data8, options8, responsiveOptions8);
}
function barChart1(element) {
  var data10 = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    series: [
            [800000, 1200000, 1400000, 1300000],
            [200000, 400000, 500000, 300000],
            [100000, 200000, 400000, 600000]
    ]
  };
  var options10 = {
    stackBars: true,
    axisY: {
      labelInterpolationFnc: function(value) {
        return (value / 1000) + 'k';
      }
    }
  };
  var chart10 = Chartist.Bar(element, data10, options10);
  chart10.on('draw', function(data) {
    if (data.type === 'bar') {
      data.element.attr({
        style: 'stroke-width: 40px'
      });
    }
  });
}
function barChart2(element) {
  var data11 = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    series: [
            [5, 4, 3, 7, 5, 10, 3],
            [3, 2, 9, 5, 4, 6, 4]
    ]
  };
  var options11 = {
    seriesBarDistance: 10,
    reverseData: true,
    horizontalBars: true,
    axisY: {
      offset: 70
    }
  };
  new Chartist.Bar(element, data11, options11);
}
