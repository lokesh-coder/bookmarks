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
  simpleGit.branchLocal((_, branches) => {
    console.log("bra", branches);
    if (branches["gh-pages"]) {
      simpleGit.checkoutBranch(["gh-pages"]);
    } else {
      console.log("foo");
      simpleGit.checkout(["--orphan", "gh-pages"]);
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
