// requires yamljs:  `npm install --save-dev yamljs`

const fs = require("fs");
const ROOT_FUNCTION_PATH = "./functions";
const DEFAULT_FUNCTION_DEFINITION_FILE = "serverless-function.yml";
const files = fs.readdirSync(ROOT_FUNCTION_PATH);
const YAML = require("yamljs");


module.exports = () => {
  const functionDefinition = files
    .map((f) => {
      const path = `${ROOT_FUNCTION_PATH}/${f}/${DEFAULT_FUNCTION_DEFINITION_FILE}`;
      const readFunctionYML = fs.readFileSync(`${path}`, "utf8");
      return readFunctionYML;
    })
    .map((raw) => YAML.parse(raw))
    .reduce((result, handler) => Object.assign(result, handler), {});
  return functionDefinition;
};
