/*!
 * cond - v0.1 - 6/10/2009
 * http://benalman.com/projects/jquery-cond-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Licensed under the MIT license
 * http://benalman.com/about/license/
 * 
 * Based on suggestions and sample code by Stephen Band and DBJDBJ in the
 * jquery-dev Google group: http://bit.ly/jqba1
 */

(function($, window, undefined) {
    'use strict';

    $.fn.cond = function() {
        var i = 0,
            test,
            callback,
            result;

        while (!test && i < arguments.length) {
            test = arguments[i++];
            callback = arguments[i++];

            test = $.isFunction(test) ? test.call(this) : test;

            result = !callback ? test
                : test ? callback.call(this, test)
                : undefined;
        }

        return result !== undefined ? result : this;
    };
})(jQuery, window);