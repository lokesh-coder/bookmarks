const jetpack = require("fs-jetpack");
const github = require("@actions/github");
console.log("######", github.event);

function BuildRepo(bookmark) {
  const dataFilePath = "./src/data.json";
  let dataFileContent = jetpack.read(dataFilePath);
  console.log("bookmark=>", dataFileContent);
  if (!dataFileContent) {
    dataFileContent = JSON.stringify({ bookmarks: [], lastUpdated: "" });
    jetpack.file(dataFilePath, { content: dataFileContent, mode: "777" });
  }
  dataFileContent = JSON.parse(dataFileContent);

  const isBookmarkExists = dataFileContent.bookmarks.find(
    b => b.url === bookmark.url
  );
  if (!isBookmarkExists) {
    dataFileContent.bookmarks.push(bookmark);
    jetpack.write(dataFilePath, JSON.stringify(dataFileContent, null, 2));
  }
}
let bookmark = process.argv
  .splice(-1, 1)
  .join("")
  .replace("--data=", "");
BuildRepo(JSON.parse(bookmark));
