const core = require("@actions/core");
const github = require("@actions/github");

try {
  console.log(`===>: ${github.event.client_payload}`);
  const mndata = core.getInput("mndata");
  console.log("mndata", mndata);
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
