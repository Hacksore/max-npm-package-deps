import allNames from "all-the-package-names";

const allNameArray: string[] = allNames as string[]; 
const MAX_DEPENDENCIES = 1000;

// add the first 1k packages to the dependency package.json
const packageNames = allNameArray.slice(0, MAX_DEPENDENCIES);
console.log(packageNames.join("\n"));

