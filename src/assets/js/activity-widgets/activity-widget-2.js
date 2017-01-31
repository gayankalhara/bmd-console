/**
 * @author Batch Themes Ltd.
 */
(function() {
  'use strict';
  $(function() {
    if (!element_exists('.activity-widget-2')) {
      return false;
    }
    var items = [{
      text: 'Finish project',
      done: false
    }, {
      text: 'Check out branch from github',
      done: false
    }, {
      text: 'Build Android app',
      done: false
    }, {
      text: 'Call client',
      done: false
    }];
    var drawList = function() {
      var str = '';
      for (var i in items) {
        str += '<li class="list-group-item">';
        str += '<label class="custom-control custom-checkbox">';
        str += '<input type="checkbox" data-index="' + i + '" class="task custom-control-input">';
        str += '<span class="custom-control-indicator"></span>';
        str += '<span class="custom-control-description text">' + items[i].text + '</span> ';
        str += '</label>';
        str += '</li>';
      }
      $('.tasks').html(str);
    };
    var count = function() {
      var completed = 0;
      var remaining = 0;
      items.forEach(function(val, key) {
        if (val.done === true) {
          completed++;
        }
        if (val.done === false) {
          remaining++;
        }
      });
      var text = remaining === 1 ? '1 task to do' : remaining + ' tasks to do';
      $('.activity-widget-2 .total').text(text);
    };
    count();
    drawList();
    $('.activity-widget-2 form').on('submit', function(e) {
      e.preventDefault();
      return false;
    });
    $('.activity-widget-2 .form-control').on('change', function(e) {
      e.preventDefault();
      var text = $(this).val();
      if (!text) {
        return false;
      }
      var task = {
        'text': text,
        'done': false
      };
      items.push(task);
      count();
      drawList();
      $(this).val('').blur();
      $('.activity-widget-2 form .text-muted').addClass('hidden');
      return false;
    });
    $(document).on('click', '.task', function(e) {
      e.preventDefault();
      var index = $(this).data('index');
      items.splice(items.indexOf(index), 1);
      count();
      drawList();
      $('.activity-widget-2 form .text-muted').addClass('hidden');
      return false;
    });
  });
})();
