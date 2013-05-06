define('exports', function (exports) {
    exports.sayIt = function (what) {
        console.log("newJsDependency : sayIt called.");
        console.log("Someone said: " + what);
    };
});