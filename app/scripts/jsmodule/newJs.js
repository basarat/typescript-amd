// Again we can use a relative url or a url based off of baseUrl 
define(['exports', './newJsDependency'], function (exports, newJsDependency) {
    function newJsFunction(what) {
        console.log("newJsFunction called");
        newJsDependency.sayIt(what);
    };
    exports.newJsFunction = newJsFunction;
});