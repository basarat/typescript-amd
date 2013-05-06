require.config({
    
    // Once you setup baseUrl
    // Relative urls continue to work normal (from source file).
    // However Non-relative URLs use this as base. 
    // By default this is the location of requirejs. 
    baseUrl: './scripts',
    // Since I just used a relative url. This url is relative to this file.
    

    paths: {
        jquery: '../lib/jquery', 
        legacyJs: 'js/legacyJs', // Relative to baseUrl
        legacyJsDependency: './js/legacyJsDependency' // Relative to this file
        
        // Not adding newJs here simply to demonstrate how to access those directly from typescript without using paths
    },

    // For legacy files that do not export anything you need shims
    // For root level exports. http://requirejs.org/docs/api.html#config-shim
    shim: {
        'legacyJs': {
            // For dependencies. 
            deps: ['legacyJsDependency'],
            // For more than one global export you need to use an init function :
            init: function (legacyJsSDependency) {
                // Inside this function this will refer to the global scope of the file
                return {
                    'legacyJsFunction': this.legacyJsFunction,
                    'legacyJsFunction2': this.legacyJsFunction2
                };
            }
        },
        'legacyJsDependency': {
            // For simple single exports Just use exports variable
            exports: 'sayIt'
        },
    },
    
    // Alternative to shim is something that jquery does. See bottom on jquery file. 

});

// Start the app: 
require(['app'], function (app) {
    app.start();
});
