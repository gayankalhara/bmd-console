'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
  $(function() {
    if (!element_exists('#maps-vector-maps')) {
      return false;
    }
    var config = Storages.localStorage.get('config');
    var colors = bootstrap_colors();
    var url = page_url();
		var background = url.background;
		var color_palettes = palettes();
    var palette = color_palettes[background];

    var defaultFill = darken(palette.borderColor, 10);
    var altFill = darken(palette.borderColor, 20);
    var labelFill = darken(palette.borderColor, 30);

    worldMap('world', defaultFill, altFill, labelFill, colors.danger, colors.warning, colors.info, colors.success);
    usaMap('usa', defaultFill, altFill, labelFill);
    worldMapWithBubbles('bubble-map', defaultFill, altFill, colors.warning, colors.warning, colors.warning);
  });
})();
function worldMap(id, defaultFill, altFill, labelFill, dangerFill, warningFill, infoFill, successFill) {
  var world = new Datamap({
    element: document.getElementById(id),
    responsive: true,
    projection: 'mercator',
    fills: {
      defaultFill: defaultFill,
      altFill: altFill,
      labelFill: labelFill,
      dangerFill: dangerFill,
      warningFill: warningFill,
      infoFill: infoFill,
      successFill: successFill
    },
    geographyConfig: {
      borderWidth: 1,
      borderOpacity: 1,
      borderColor: altFill,
      highlightOnHover: true,
      highlightFillColor: altFill,
      highlightBorderColor: altFill,
      highlightBorderWidth: 1,
      highlightBorderOpacity: 1
    },
    labels: {
      labelColor: 'labelFill',
      fontSize: 12
    },
    data: {
      AUS: {
        fillKey: 'infoFill'
      },
      JPN: {
        fillKey: 'dangerFill'
      },
      ITA: {
        fillKey: 'altFill'
      },
      BRA: {
        fillKey: 'successFill'
      },
      DEU: {
        fillKey: 'warningFill'
      },
    }
  });
  window.addEventListener('resize', function() {
    world.resize();
  });
}
function usaMap(id, defaultFill, altFill, labelColor) {
  var USmap = new Datamap({
    element: document.getElementById(id),
    scope: 'usa', //currently supports 'usa' and 'world', however with custom map data you can specify your own
    projection: 'equirectangular', //style of projection to be used. try 'mercator'
    responsive: true,
    fills: {
      defaultFill: defaultFill
    },
    geographyConfig: {
      borderWidth: 1,
      borderOpacity: 1,
      borderColor: altFill,
      highlightOnHover: true,
      highlightFillColor: altFill,
      highlightBorderColor: altFill,
      highlightBorderWidth: 1,
      highlightBorderOpacity: 1,
      popupTemplate: function(geography, data) {
        return '<div class="hoverinfo">' + geography.properties.name + '</div>';
      }
    }
  });
  USmap.labels({
    labelColor: labelColor,
    fontSize: 12
  });
  window.addEventListener('resize', function() {
    USmap.resize();
  });
}
function worldMapWithBubbles(id, defaultFill, altFill, borderColor, highlightFillColor, highlightBorderColor) {
  var bubbleMap = new Datamap({
    element: document.getElementById(id),
    scope: 'world',
    projection: 'mercator',
    responsive: true,
    fills: {
      defaultFill: defaultFill
    },
    geographyConfig: {
      popupOnHover: false,
      borderWidth: 1,
      borderOpacity: 1,
      borderColor: altFill,
      highlightOnHover: true,
      highlightFillColor: altFill,
      highlightBorderColor: altFill,
      highlightBorderWidth: 1,
      highlightBorderOpacity: 1,
      popupTemplate: function(geography, data) {
        return '<div class="hoverinfo">' + geography.properties.name + '</div>';
      }
    }
  });
  var bubbles = [{
    name: 'Bubble 1',
    radius: 25,
    latitude: 0,
    longitude: 0
  }, {
    name: 'Bubble 2',
    radius: 25,
    latitude: 50,
    longitude: 0
  }, {
    name: 'Bubble 3',
    radius: 25,
    latitude: -33,
    longitude: -70
  }, {
    name: 'Bubble 4',
    radius: 45,
    latitude: 50,
    longitude: -78
  }, {
    name: 'Bubble 5',
    radius: 45,
    latitude: 50,
    longitude: 120
  }, ];
  bubbleMap.bubbles(bubbles, {
    borderWidth: 1,
    borderOpacity: 1,
    borderColor: borderColor,
    highlightFillColor: highlightFillColor,
    highlightBorderColor: highlightBorderColor,
    popupTemplate: function(geo, data) {
      return ['<div class="hoverinfo">' + data.name,
        '</div>'
      ].join('');
    }
  });
  window.addEventListener('resize', function() {
    bubbleMap.resize();
  });
}
