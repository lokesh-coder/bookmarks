const simpleGit = require("simple-git")("./");
const CommitFiles = function(msg) {
  simpleGit
    .addConfig("user.name", "inbot")
    .addConfig("user.email", "mexican.dirtyfellow@gmail.com")
    .add("./data.json")
    .commit(msg)
    .push("origin", "master");
};
module.exports = {
  CommitFiles
};
