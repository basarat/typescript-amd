/// <reference path="defs/require/require.d.ts" />

// For each js file you need to access from typescript you need one of these: 
/// <amd-dependency path="legacyJs"/>
/// <amd-dependency path="./jsmodule/newJs"/>

export function start() {
    // Use a legacy js module: 
    var legacyJsFunction = require("legacyJs");
    legacyJsFunction("what");

    // Use a new js module: 

    // Use a typescript module  
}