define(["require", "exports", "./tsmoduleDependency"], function(require, exports, __dependency__) {
    // Either use path from your base path:
    //import dependency = module("tsmodule/tsmoduleDependency");
    // OR relative path from currnet file
    var dependency = __dependency__;

    function tsmoduleFunction(what) {
        console.log("tsmoduleFunction called");
        dependency.sayIt(what);
    }
    exports.tsmoduleFunction = tsmoduleFunction;
})
//@ sourceMappingURL=tsmodule.js.map
