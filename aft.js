/*!
 * AFT.js - Tab Reminder Plugin in Vanilla JS
 * https://github.com/MrSaints/aft.js
 *
 * Copyright 2015 Ian Lai and other contributors
 * Released under the MIT license
 * http://ian.mit-license.org/
 */

;(function () {
    // Notice me senpai!
    var $AFT_VISIBLE_TITLE = document.title;
    var $AFT_HIDDEN_TITLE = "Don't forget about me! :(";
    var $AFT_TIMEOUT = 3000;
    var $AFT_TIMEOUT_FN;

    function _show($title) {
        document.title = $AFT_VISIBLE_TITLE;
        _reset();
    }

    function _hide($title) {
        $AFT_TIMEOUT_FN = setTimeout(function() {
            document.title = $AFT_HIDDEN_TITLE;
            _reset();
        }, 2000);
    }

    function _reset() {
        clearTimeout($AFT_TIMEOUT_FN);
    }

    function AFT($title, $timeout) {
        $AFT_HIDDEN_TITLE = $title || $AFT_HIDDEN_TITLE;
        $AFT_TIMEOUT = $timeout || $AFT_TIMEOUT;

        document.addEventListener("visibilitychange", function() {
            if (document.visibilityState === "hidden") {
                _hide($AFT_HIDDEN_TITLE);
            } else {
                _show($AFT_VISIBLE_TITLE);
            }
        });
    }

    if (typeof exports === "object") {
        module.exports = AFT;
    } else if (typeof define === "function" && define.amd) {
        define(function () {
            return AFT;
        });
    } else {
        window.AFT = AFT;
    }
})();