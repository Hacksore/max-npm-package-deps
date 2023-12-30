import allNames from "all-the-package-names";
import fs from "node:fs";

const allNameArray: string[] = allNames as string[]; 
const MAX_DEPENDENCIES = 768;

const packageNames = allNameArray.slice(0, MAX_DEPENDENCIES);

console.log("cwd: ", process.cwd());
// write the packages to the package.json
const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));

packageJson.dependencies = {};

packageNames.forEach((name) => {
  console.log(`Adding ${name} to package.json`);
  packageJson.dependencies[name] = "latest";
});

fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));
