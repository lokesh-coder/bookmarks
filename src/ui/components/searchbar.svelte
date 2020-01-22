<script>
  import Actions from "./actions.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const handleFilter = ({ target: { value: keyword } }) => {
    dispatch("search", { keyword });
  };
  const showAddForm = () => {
    dispatch("showAddForm");
  };
  const groupByCategories = () => {
    dispatch("groupByCategories");
  };
  const groupByTags = () => {
    console.log("ss");
    dispatch("groupByTags");
  };
</script>

<div class="flex mb-6">
  <div
    class="flex items-center justify-center p-2 rounded-full bg-blue-900
    text-white leading-none mr-2 font-medium text-2xl w-10">
    B
  </div>
  <div class="relative flex items-center flex-1 rounded-full overflow-hidden ">
    <i class="ri-search-line mr-2 absolute mx-3 text-gray-700 text-lg" />
    <input
      placeholder="filter bookmarks"
      on:keyup={handleFilter}
      class="p-2 px-10 w-full bg-gray-200 outline-none" />
  </div>

  <div class="flex">
    <Actions on:showAddForm={showAddForm} />
  </div>
</div>
