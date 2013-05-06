define(["require", "exports", "tsmoduleDependency"], function(require, exports, __dependency__) {
    var dependency = __dependency__;

    function tsmoduleFunction(what) {
        console.log("tsmoduleFunction called");
        dependency.sayIt(what);
    }
    exports.tsmoduleFunction = tsmoduleFunction;
})
//@ sourceMappingURL=tsmodule.js.map
