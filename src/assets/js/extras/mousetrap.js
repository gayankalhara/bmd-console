'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
  $(function() {
    if (!element_exists('#extras-mousetrap')) {
      return false;
    }
    Mousetrap.bind('4', function() {
      $('.mousetrap-1').toggleClass('highlighted');
    });
    Mousetrap.bind('h', function() {
      $('.mousetrap-2').toggleClass('hidden');
    });
    Mousetrap.bind(['alt+w', 'command+shift+k'], function() {
      $('.right-sidebar-outer').toggleClass('show-from-right');
      if ($('.right-sidebar-outer').hasClass('show-from-right')) {
        $('.right-sidebar-backdrop').toggleClass('fade in');
      } else {
        $('.right-sidebar-backdrop').removeClass('fade');
        $('.right-sidebar-backdrop').removeClass('in');
      }
    });
    Mousetrap.bind('q a', function() {
      toastr.options = {
        positionClass: 'toast-top-right'
      };
      toastr.error('Danger!');
    });
    Mousetrap.bind('w s', function() {
      toastr.options = {
        positionClass: 'toast-top-right'
      };
      toastr.success('Great idea!');
    });
  });
})();
