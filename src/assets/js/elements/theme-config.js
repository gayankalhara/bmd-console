'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
    $(function() {
        if (!element_exists('.theme-config')) {
            return false;
        }

				//this urls will get a page reload when then page background changes
				var urlsToReload = [
					'dashboards/dashboard-1',
					'dashboards/dashboard-2',
					'plugins/star-rating',
					'charts/easy-pie-chart',
					'maps/vector-maps'
				];

				$('.theme-config-action').on('click', function(e) {
					e.preventDefault();
					var storage = Storages.localStorage;
					var config = storage.get('config');
					var action = $(this).attr('data-action');
					var value = $(this).attr('data-value');
					var pageUrl = page_url();
					var url = pageUrl.controller + '/' + pageUrl.view;
					var reload = false;

					if(action == 'set-layout') {
						$('body').attr('data-layout', value);
						config = Object.assign({}, config, {
							layout: value
						});
						if(value == 'layout-2') {
							$('body').addClass('layout-collapsed');
						} else {
							$('body').removeClass('layout-collapsed');
						}
					} else if(action == 'set-background') {
						$('body').attr('data-background', value);
						config = Object.assign({}, config, {
							background: value
						});
						if(urlsToReload.includes(url)) {
							reload = true;
						}
					} else if(action == 'set-navbar') {
						$('body').attr('data-navbar', value);
						config = Object.assign({}, config, {
							navbar: value
						})
					} else if(action == 'set-sidebar') {
						$('body').attr('data-sidebar', value);
						config = Object.assign({}, config, {
							sidebar: value
						})
					} else if(action == 'set-top-navigation') {
						$('body').attr('data-top-navigation', value);
						config = Object.assign({}, config, {
							topNavigation: value
						})
					}
					storage.set('config', config);
					if(reload) {
						window.location.reload();
					}
					return false;
				})

    });
})();
