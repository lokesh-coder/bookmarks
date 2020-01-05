const jetpack = require("fs-jetpack");
const fetchFavicon = require("./fetch-favicon");

async function BuildRepo({ type, ...bookmark }) {
  const dataFilePath = "./src/data.json";
  let dataFileContent = jetpack.read(dataFilePath);

  const write = () => {
    dataFileContent.lastUpdated = new Date().toISOString();
    jetpack.write(dataFilePath, JSON.stringify(dataFileContent, null, 2));
  };

  if (!dataFileContent) {
    dataFileContent = JSON.stringify({ bookmarks: [], lastUpdated: "" });
    jetpack.file(dataFilePath, { content: dataFileContent, mode: "777" });
  }
  dataFileContent = JSON.parse(dataFileContent);

  if (type == "add") {
    const isBookmarkExists = dataFileContent.bookmarks.find(
      b => b.url === bookmark.url
    );
    if (!isBookmarkExists) {
      let icon = await fetchFavicon(bookmark.url);
      dataFileContent.bookmarks.push({
        id: Date.now(),
        title: "-TITLE-NOT-PROVIDED-",
        url: "",
        category: "general",
        tags: [],
        icon,
        time: new Date().toISOString(),
        ...bookmark
      });
    } else {
      dataFileContent.bookmarks = dataFileContent.bookmarks.map(b =>
        b.id == bookmark.id ? bookmark : b
      );
    }
    write();
  }
  if (type == "remove") {
    dataFileContent.bookmarks = dataFileContent.bookmarks.filter(
      b => b.id == bookmark.id
    );
    write();
  }
  if (type == "fav") {
    dataFileContent.bookmarks = dataFileContent.bookmarks.map(b => {
      if (b.id == bookmark.id) {
        b.isFav = !bookmark.isFav;
        return b;
      }
    });
    write();
  }

  if (type == "removeall") {
    dataFileContent.bookmarks = [];
    write();
  }
}

(async function run() {
  await BuildRepo(JSON.parse(`${jetpack.read("./datafile.txt")}`));
})();
