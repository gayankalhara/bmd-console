'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
  $(function() {
    if (!element_exists('.left-sidebar-1')) {
      return false;
    }
    $('.left-sidebar-section .collapse').on('show.bs.collapse', function() {
      $('.left-sidebar-section .collapse.in').each(function() {
        var id = $(this).attr('id');
        $('.btn-sidebar[data-target="#' + id + '"]').trigger('click').addClass('collapsed').attr('aria-expanded', false);
        $(this).removeClass('in');
      });
    });
  });
})();
