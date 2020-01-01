const simpleGit = require("simple-git")("./");
function ReleaseRepo(msg) {
  simpleGit
    .addConfig("user.name", "inbot")
    .addConfig("user.email", "mexican.dirtyfellow@gmail.com")
    .add("./src/data.json")
    .commit(msg)
    .push("origin", "master");
}

ReleaseRepo("releaseing..");
