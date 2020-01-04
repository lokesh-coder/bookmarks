const jetpack = require("fs-jetpack");

function BuildRepo(bookmark) {
  const dataFilePath = "./src/data.json";
  let dataFileContent = jetpack.read(dataFilePath);

  if (!dataFileContent) {
    dataFileContent = JSON.stringify({ bookmarks: [], lastUpdated: "" });
    jetpack.file(dataFilePath, { content: dataFileContent, mode: "777" });
  }
  dataFileContent = JSON.parse(dataFileContent);

  if (bookmark.type == "add") {
    const isBookmarkExists = dataFileContent.bookmarks.find(
      b => b.url === bookmark.url
    );
    if (!isBookmarkExists) {
      dataFileContent.bookmarks.push(bookmark);
    } else {
      dataFileContent.bookmarks = dataFileContent.bookmarks(b =>
        b.id == bookmark.id ? bookmark : b
      );
    }
    jetpack.write(dataFilePath, JSON.stringify(dataFileContent, null, 2));
  }
  if (bookmark.type == "remove") {
    dataFileContent.bookmarks = dataFileContent.bookmarks.filter(
      b => b.id == bookmark.id
    );
    jetpack.write(dataFilePath, JSON.stringify(dataFileContent, null, 2));
  }
  if (bookmark.type == "fav") {
    dataFileContent.bookmarks = dataFileContent.bookmarks.map(b => {
      if (b.id == bookmark.id) {
        b.isFav = !bookmark.isFav;
        return b;
      }
    });
    jetpack.write(dataFilePath, JSON.stringify(dataFileContent, null, 2));
  }

  if (bookmark.type == "removeall") {
    dataFileContent.bookmarks = [];
    jetpack.write(dataFilePath, JSON.stringify(dataFileContent, null, 2));
  }
}

BuildRepo(JSON.parse(`${jetpack.read("./datafile.txt")}`));
