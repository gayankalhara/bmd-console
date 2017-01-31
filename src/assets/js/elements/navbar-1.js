'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
  $(function() {
    if (!element_exists('.navbar-1')) {
      return false;
    }
        //toggle layout
    $(document).on('click', '.toggle-layout', function(e) {
      e.preventDefault();
      $('body').toggleClass('layout-collapsed');
      return false;
    });
        //toggle right sidebar
    $(document).on('click', '.toggle-right-sidebar', function(e) {
      e.preventDefault();
      $('.right-sidebar-outer').toggleClass('show-from-right');
      if ($('.right-sidebar-outer').hasClass('show-from-right')) {
        $('.right-sidebar-backdrop').toggleClass('fade in');
      } else {
        $('.right-sidebar-backdrop')
                    .removeClass('fade')
                    .removeClass('in');
      }
      return false;
    });
        //toggle-theme-config
    $(document).on('click', '.toggle-theme-config', function(e) {
      e.preventDefault();
      $('.theme-config-outer').toggleClass('show-from-bottom');
      if ($('.theme-config-outer').hasClass('show-from-bottom')) {
        $('.theme-config-backdrop').toggleClass('fade in');
      } else {
        $('.theme-config-backdrop')
                    .removeClass('fade')
                    .removeClass('in');
      }
      return false;
    });
  });
})();
