import groupBy from "lodash/groupBy";

export const groupCollectionBy = (urls, key) => {
  let coll = groupBy(urls, key);
  console.log(Object.entries(coll));
  return Object.entries(coll);
};

export const filterCollectionByCategory = (urls, categoryName) => {
  let coll = groupBy(urls, x => x.category == categoryName);
  return [[categoryName, coll["true"]]];
};

export const filterCollectionByTag = (urls, tagName) => {
  let coll = groupBy(urls, x => (x.tags || []).includes(tagName));
  console.log("&&&", coll, coll["true"]);
  return [[tagName, coll["true"]]];
};

export const groupByCategories = urls => {
  let coll = groupBy(urls, "category");
  return Object.entries(coll);
};

export const groupByTags = urls => {
  let coll = groupBy(urls, "tags");
  return Object.entries(coll);
};
