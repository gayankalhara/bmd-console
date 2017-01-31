'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
  $(function() {
    if (!element_exists('#charts-easy-pie-chart')) {
      return false;
    }
    var colors = bootstrap_colors();
    var url = page_url();
		var background = url.background;
		var color_palettes = palettes();
    var palette = color_palettes[background];

    if (url.background == 'light') {
      palette.borderColor = darken(palette.borderColor, 10);
    }
    if (url.background == 'primary') {
      palette.borderColor = darken(palette.borderColor, 30);
    }
        //primary
    easyPieChart('.easy-pie-chart-primary-xs', colors.primary, palette.borderColor, 100);
    easyPieChart('.easy-pie-chart-primary-md', colors.primary, palette.borderColor, 150);
    easyPieChart('.easy-pie-chart-primary-lg', colors.primary, palette.borderColor, 200);
        //secondary
    easyPieChart('.easy-pie-chart-secondary-xs', colors.secondary, palette.borderColor, 100);
    easyPieChart('.easy-pie-chart-secondary-md', colors.secondary, palette.borderColor, 150);
    easyPieChart('.easy-pie-chart-secondary-lg', colors.secondary, palette.borderColor, 200);
        //info
    easyPieChart('.easy-pie-chart-info-xs', colors.info, palette.borderColor, 100);
    easyPieChart('.easy-pie-chart-info-md', colors.info, palette.borderColor, 150);
    easyPieChart('.easy-pie-chart-info-lg', colors.info, palette.borderColor, 200);
        //success
    easyPieChart('.easy-pie-chart-success-xs', colors.success, palette.borderColor, 100);
    easyPieChart('.easy-pie-chart-success-md', colors.success, palette.borderColor, 150);
    easyPieChart('.easy-pie-chart-success-lg', colors.success, palette.borderColor, 200);
        //warning
    easyPieChart('.easy-pie-chart-warning-xs', colors.warning, palette.borderColor, 100);
    easyPieChart('.easy-pie-chart-warning-md', colors.warning, palette.borderColor, 150);
    easyPieChart('.easy-pie-chart-warning-lg', colors.warning, palette.borderColor, 200);
        //danger
    easyPieChart('.easy-pie-chart-danger-xs', colors.danger, palette.borderColor, 100);
    easyPieChart('.easy-pie-chart-danger-md', colors.danger, palette.borderColor, 150);
    easyPieChart('.easy-pie-chart-danger-lg', colors.danger, palette.borderColor, 200);
  });
})();
