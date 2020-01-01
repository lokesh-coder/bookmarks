const core = require("@actions/core");
const github = require("@actions/github");
const app = require("../../index");
const gitprocess = require("../../process");

try {
  const mndata = core.getInput("mndata");
  const data = JSON.parse(mndata);
  data.updatedAt = new Date().toTimeString();
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  app.AddBookmark(data);
  gitprocess.CommitFiles(`added bookmark: ${data.url}`);
} catch (error) {
  core.setFailed(error.message);
}
