const jetpack = require("fs-jetpack");

const AddBookmark = function(bookmark) {
  const dataFilePath = "./data.json";
  let dataFileContent = jetpack.read(dataFilePath);
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
};

module.exports = {
  AddBookmark
};
