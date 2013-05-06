/// <reference path="defs/require/require.d.ts" />

// For each js file you need to access from typescript you need an amd-dependency
/// <amd-dependency path="legacyJs"/>
/// <amd-dependency path="jsmodule/newJs"/>


// Typescript modules must be imported any function scopes: 
import tsmodule = module("tsmodule/tsmodule");

export function start() {
    // Use a legacy js module: 
    var legacyJs = require("legacyJs");
    legacyJs.legacyJsFunction("what legacyjs");
    legacyJs.legacyJsFunction2("what legacyjs Function2");

    // Use a new js module: 
    var newJs = require('jsmodule/newJs');
    newJs.newJsFunction("what newjs");

    // Use a typescript module: tsc makes this effortless
    tsmodule.tsmoduleFunction("what ts");

}