'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
  $(function() {
    if (!element_exists('#helpers-padding')) {
      return false;
    }
    $('.highlight code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  });
})();
