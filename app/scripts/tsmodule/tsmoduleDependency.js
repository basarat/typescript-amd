define(["require", "exports"], function(require, exports) {
    function sayIt(what) {
        console.log("tsmoduleDependency : sayIt called.");
        console.log("Someone said: " + what);
    }
    exports.sayIt = sayIt;
})
