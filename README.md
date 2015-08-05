aft.js
======

Away From Tab: A lightweight, vanilla JavaScript plugin to remind visitors about your page when they switch to a different tab.

It currently relies on the [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API) which may not be available in older web browsers.

NO feature detection and polyfill (fallback) included.


Usage
-----

1. Include `aft.js` in your HTML document.

2. Trigger the plugin by calling `AFT(awayTitle, timeout)`:

    ```js
    // Sets the document title to "Notice me senpai!" after 2000ms of being away from the tab
    AFT("Notice me senpai!", 2000);
    ```


License
-------

`aft.js` is licensed under the MIT license [(http://ian.mit-license.org/)](http://ian.mit-license.org/).