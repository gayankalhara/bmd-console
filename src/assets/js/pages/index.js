/**
 * @author Batch Themes Ltd.
 */
(function() {
    'use strict';
    $(function() {
        if (!element_exists('#pages-index')) {
            return false;
        }

        var storage = Storages.localStorage;
        //reset localstorage. for development only
        storage.removeAll();

    });
})();
