require.config({
    // So that require calls compiled from typescript work as expected
    // The relative path from this file to the root of your typescript files 
    baseUrl: './scripts',

    // All paths are relative to baseUrl
    paths: {
        jquery: '../lib/jquery',
        legacyJs: '../js/legacyJs',
        legacyJsDependency: '../js/legacyJsDependency'
        // Not adding newJs here simply to demonstrate how to access those directly from typescript without using paths
    },

    // For root level exports.
    // For more than one global export you need to use a function : https://github.com/jrburke/requirejs/issues/482
    shim: {
        'legacyJs': {
            deps: ['legacyJsDependency'],
            exports: 'legacyJsFunction'
        },
        'legacyJsDependency': {
             exports: 'sayIt'
        },
    },
});

// Start the app: 
require(['app'], function (app) {
    app.start();
});
