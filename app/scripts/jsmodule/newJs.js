define('exports', 'newJsDependency', function (exports, newJsDependency) {
    exports.newJsFunction = function (what) {
        console.log("newJsFunction called");
        newJsDependency.sayIt(what);
    };
});