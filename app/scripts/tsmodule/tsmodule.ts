import dependency = module("tsmoduleDependency");

export function tsmoduleFunction(what: string) {
    console.log("tsmoduleFunction called");
    dependency.sayIt(what);
}

