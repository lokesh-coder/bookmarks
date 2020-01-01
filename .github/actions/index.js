const core = require("@actions/core");
const github = require("@actions/github");
const fs = require("fs");

try {
  const mndata = core.getInput("mndata");
  const data = JSON.parse(mndata);
  data.updatedAt = new Date().toTimeString();
  console.log(fs.readdirSync("./"));
  // const payload = JSON.stringify(github.context.payload, undefined, 2);
} catch (error) {
  core.setFailed(error.message);
}
