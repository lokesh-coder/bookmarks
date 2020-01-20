import { writable } from "svelte/store";

function redux(init, reducer) {
  const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__.connect();

  const { update, subscribe } = writable(init);

  function dispatch(action) {
    update(state => {
      let updatedState = reducer(state, action);
      devTools.send(action, updatedState);
      return updatedState;
    });
  }

  return {
    subscribe,
    dispatch
  };
}

const reducer = (state, action) => {
  console.log(state.count, action);
  switch (action) {
    case "toggleCategoriesSection":
      console.log("state", state);
      return { isCategoriesSectionOpen: !state.isCategoriesSectionOpen };
    default:
      return state;
  }
};

export const store = redux({ isCategoriesSectionOpen: false }, reducer);
