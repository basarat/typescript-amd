// Either use path from your base path: 
//import dependency = module("tsmodule/tsmoduleDependency");
// OR relative path from currnet file
import dependency = module("./tsmoduleDependency");

export function tsmoduleFunction(what: string) {
    console.log("tsmoduleFunction called");
    dependency.sayIt(what);
}

