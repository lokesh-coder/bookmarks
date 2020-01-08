import groupBy from "lodash/groupBy";

export const groupByCategories = urls => {
  let coll = groupBy(urls, "category");
  return Object.entries(coll);
};
