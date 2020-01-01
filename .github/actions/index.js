const core = require("@actions/core");
const github = require("@actions/github");
const app = require("../../index");

try {
  const mndata = core.getInput("mndata");
  const data = JSON.parse(mndata);
  data.updatedAt = new Date().toTimeString();
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  app.AddBookmark(data);
} catch (error) {
  core.setFailed(error.message);
}
