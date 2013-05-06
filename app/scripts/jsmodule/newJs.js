// All dependencies are relative to current path: 
define(['exports', './newJsDependency'], function (exports, newJsDependency) {
    function newJsFunction(what) {
        console.log("newJsFunction called");
        newJsDependency.sayIt(what);
    };
    exports.newJsFunction = newJsFunction;
});