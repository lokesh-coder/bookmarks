import Fuse from "fuse.js";

export const filterItems = (items, keyword) => {
  if (!keyword) {
    return items;
  }
  const fuse = new Fuse(items, {
    keys: ["name", "url", "category", "domain"]
  });
  return [["search", fuse.search(keyword)]];
};
