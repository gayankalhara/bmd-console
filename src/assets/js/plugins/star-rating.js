'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
  $(function() {
    if (!element_exists('#plugins-star-rating')) {
      return false;
    }
    var colors = bootstrap_colors();
    var url = page_url();
		var background = url.background;
		var color_palettes = palettes();
    var palette = color_palettes[background];

    var normalFill = darken(palette.borderColor, 10);
    var ratedFill = colors.primary;
    var defaultFill = colors.warning;
    $('#example-1').rateYo({
      rating: 3,
      normalFill: normalFill,
      ratedFill: defaultFill,
      precision: 2
    });
    $('#example-2').rateYo({
      rating: 3,
      normalFill: normalFill,
      ratedFill: defaultFill,
      starWidth: '30px'
    });
    $('#example-3').rateYo({
      rating: 3,
      normalFill: normalFill,
      ratedFill: defaultFill,
      starWidth: '60px'
    });
    $('#example-4').rateYo({
      rating: 3,
      normalFill: normalFill,
      ratedFill: defaultFill,
      starWidth: '90px'
    });
    $('#example-5').rateYo({
      rating: 3,
      normalFill: normalFill,
      ratedFill: ratedFill
    });
    $('#example-6').rateYo({
      rating: 3,
      normalFill: normalFill,
      ratedFill: defaultFill,
      numStars: 10
    });
    $('#example-7').rateYo({
      rating: 3,
      normalFill: normalFill,
      ratedFill: defaultFill,
      readOnly: true
    });
  });
})();
