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
  simpleGit.branchLocal((_, d) => {
    if (d.branches["gh-pages"]) {
      simpleGit.checkout(["gh-pages"]);
    } else {
      console.log("aa");
      simpleGit.checkout(["--orphan", "foo"]);
    }
  });

  simpleGit
    .add("./*")
    .commit(msg)
    .push("origin", "gh-pages");
};

PushUI("foo");
module.exports = {
  CommitFiles,
  PushUI
};
