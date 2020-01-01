var ghpages = require("gh-pages");
function ReleaseUI(message = "auto commit") {
  ghpages.publish("public", { message }, function(err) {});
}

ReleaseUI();
