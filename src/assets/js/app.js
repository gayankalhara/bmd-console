'use strict';
/**
 * @author Batch Themes Ltd.
 */
(function() {
    $(function() {

				//default config values
        var config = {
            name: 'Kernel',
						layout: 'layout-1',
						background: 'light',
						navbar: 'light',
						sidebar: 'light',
						topNavigation: 'light'
        };

				var colors = bootstrap_colors();
        var storage = Storages.localStorage;

        if (storage.isEmpty('config') || !(storage.get('config'))) {
						//restart config values
            storage.removeAll();
            storage.set('config', config);
        } else {
					config = storage.get('config');

					//set attributes before page is loaded. this can be removed in production
					$('body').attr('data-background', config.background);
					$('body').attr('data-navbar', config.navbar);
					$('body').attr('data-sidebar', config.sidebar);
					$('body').attr('data-top-navigation', config.topNavigation);
					$('html').attr('class', 'loading loading-' + config.background)
				} 

				//set loader color
        if ($('html').hasClass('loading')) {
            var loaderTime = 3000;
            var loaderColor = colors.primary;
            var htmlClass = $('html').attr('class').toString();
            if (htmlClass.match(/loading\-dark/gi)) {
                loaderColor = colors.warning;
            } else if (htmlClass.match(/loading\-primary/gi)) {
                loaderColor = colors.success;
            }
            $('#fakeloader').fakeLoader({
                timeToHide: loaderTime,
                zIndex: '99999',
                spinner: 'spinner7',
                bgColor: loaderColor
            });
            setTimeout(function() {
                $('html').removeClass('loading');
            }, loaderTime);
        }

				//mousetrap helpers. this can be removed in production
        Mousetrap.bind('ctrl+1', function() {
            storage.removeAll();
        });
        Mousetrap.bind('ctrl+2', function() {
            var layout = $('body').attr('data-layout');
            if (layout == 'layout-1' || layout == 'layout-2') {
                $('body').toggleClass('layout-collapsed');
            }
        });
        Mousetrap.bind('ctrl+3', function() {
            $('.right-sidebar-outer').toggleClass('show-from-right');
            var layout = $('body').data('layout');
            if ($('.right-sidebar-outer').hasClass('show-from-right')) {
                $('.right-sidebar-backdrop').toggleClass('fade in');
            } else {
                $('.right-sidebar-backdrop')
                    .removeClass('fade')
                    .removeClass('in');
            }
        });
        Mousetrap.bind('ctrl+4', function() {
            $('.theme-config-outer').toggleClass('show-from-bottom')
            if ($('.theme-config-outer').hasClass('show-from-bottom')) {
                $('.theme-config-backdrop').toggleClass('fade in');
            } else {
                $('.theme-config-backdrop')
                    .removeClass('fade')
                    .removeClass('in');
            }
        });
    });
})();
