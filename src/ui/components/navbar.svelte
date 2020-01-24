<script>
  import { store } from "../utils/store";
  const toggleCategoriesSection = () => {
    store.dispatch("toggleCategoriesSection");
  };
  const toggleTagsSection = () => {
    store.dispatch("toggleTagsSection");
  };
  const groupByCategories = () => {
    store.dispatch("groupByCategories");
  };
  const groupByTags = () => {
    console.log("groupByTags");
    store.dispatch("groupByTags");
  };
</script>

<div class="flex justify-between mb-8">
  <h3 class="font-medium">Bookie</h3>
  <nav>
    <ul
      class="flex text-gray-700 text-sm items-center justify-center
      text-blue-700">

      <li
        on:click={toggleCategoriesSection}
        class="px-3 py-1 border-l border-r border-gray-300 text-xs
        cursor-pointer">
        Categories
      </li>
      <li
        on:click={toggleTagsSection}
        class="px-3 py-1 border-r border-gray-300 text-xs cursor-pointer">
        Tags
      </li>
      <li class="px-3 py-1 border-r border-gray-300 flex">
        <i
          class="ri-file-mark-fill text-lg cursor-pointer leading-none"
          on:click={groupByCategories} />

      </li>
      <li class="px-3 py-1 flex">

        <i
          class="ri-price-tag-2-fill text-lg cursor-pointer leading-none"
          on:click={groupByTags} />
      </li>

    </ul>
  </nav>
</div>
