const simpleGit = require("simple-git")("./");
const CommitFiles = function(msg) {
  simpleGit
    .addConfig("user.name", "inbot")
    .addConfig("user.email", "mexican.dirtyfellow@gmail.com")
    .add("./src/data.json")
    .commit(msg)
    .push("origin", "master");
};

const PushUI = function(msg) {
  simpleGit
    .checkoutLocalBranch("gh-pages")
    .add("./*")
    .commit(msg)
    .push("origin", "gh-pages");
};
module.exports = {
  CommitFiles,
  PushUI
};
