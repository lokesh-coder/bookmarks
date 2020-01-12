<script>
  import Actions from "./actions.svelte";
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

<div class="flex mb-8">
  <div class="relative flex items-center flex-1">
    <i class="ri-filter-2-fill mr-1 absolute mx-3 text-gray-400" />
    <input
      placeholder="filter bookmarks"
      on:keyup={handleFilter}
      class=" p-2 px-8 w-full bg-white border border-gray-400" />
  </div>
  <div class="flex">
    <Actions />
  </div>
</div>
