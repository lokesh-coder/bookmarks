const core = require("@actions/core");
const github = require("@actions/github");

try {
  const mndata = core.getInput("mndata");
  console.log(`Hello ${mndata}!`);
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
