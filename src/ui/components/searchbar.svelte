<script>
  import { createEventDispatcher } from "svelte";
  import { filterItems } from "../utils/filter";
  export let items;

  const dispatch = createEventDispatcher();
  const handleFilter = ({ target: { value: keyword } }) => {
    dispatch("filteredItems", {
      items: filterItems(items, keyword)
    });
  };
</script>

<input
  placeholder="filter bookmarks"
  on:keyup={handleFilter}
  class=" p-3 w-full rounded bg-gray-300" />
