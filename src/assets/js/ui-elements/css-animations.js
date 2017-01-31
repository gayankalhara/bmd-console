'use strict';
/**
 * @author Batch Themes Ltd.
 */
$.fn.extend({
  animateCss: function(animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);
    });
  }
});
(function() {
  $(function() {
    if (!element_exists('#ui-elements-css-animations')) {
      return false;
    }
    $('[data-toggle="animation"]').click(function(e) {
      e.preventDefault();
      var animation = $(this).data('animation');
      var parent = $(this).data('parent');
      $('#animation-' + parent).animateCss(animation);
      return false;
    });
  });
})();
