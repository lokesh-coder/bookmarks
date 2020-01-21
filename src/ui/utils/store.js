import { writable } from "svelte/store";
import {
  groupByCategories,
  groupCollectionBy,
  filterCollectionByCategory,
  filterCollectionByTag
} from "./group-links";
import { filterItems } from "./filter";

function redux(init, reducer) {
  const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__.connect();

  const { update, subscribe } = writable(init);

  function dispatch(action, payload) {
    update(state => {
      let updatedState = reducer(state, action, payload);
      devTools.send(action, updatedState);
      return updatedState;
    });
  }

  return {
    subscribe,
    dispatch
  };
}

const reducer = (state, action, payload) => {
  console.log(state.count, action);
  switch (action) {
    case "toggleCategoriesSection":
      return {
        ...state,
        isTagsSectionOpen: false,
        isCategoriesSectionOpen: !state.isCategoriesSectionOpen
      };
    case "toggleTagsSection":
      return {
        ...state,
        isCategoriesSectionOpen: false,
        isTagsSectionOpen: !state.isTagsSectionOpen
      };
    case "setLinks":
      return {
        ...state,
        links: groupCollectionBy(payload.links, ""),
        actualLinks: payload.links
      };
    case "groupByCategories":
      return {
        ...state,
        groupType: "category",
        links: groupCollectionBy(state.actualLinks, "category")
      };
    case "groupByTags":
      return {
        ...state,
        groupType: "tag",
        links: groupCollectionBy(state.actualLinks, "tags")
      };
    case "filterByCategories":
      console.log("payload.categoryName", payload.categoryName);
      return {
        ...state,
        groupType: "category",
        links: filterCollectionByCategory(
          state.actualLinks,
          payload.categoryName
        )
      };
    case "filterByTags":
      return {
        ...state,
        groupType: "tag",
        links: filterCollectionByTag(state.actualLinks, payload.tagName)
      };
    case "searchLinks":
      console.log("payload.keyword", payload.keyword);
      return {
        ...state,
        groupType: "search",
        links: filterItems(state.actualLinks, payload.keyword)
      };
    case "resetFilter":
      return {
        ...state,
        groupType: "default",
        isTagsSectionOpen: false,
        isCategoriesSectionOpen: false,
        links: groupCollectionBy(state.actualLinks, "")
      };
    default:
      return state;
  }
};

export const store = redux(
  {
    isCategoriesSectionOpen: false,
    isTagsSectionOpen: false,
    links: [],
    actualLinks: [],
    groupType: "default"
  },
  reducer
);
