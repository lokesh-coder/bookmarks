<script>
  import { store } from "../utils/store";
  import { groupCollectionBy } from "../utils/group-links";
  const filterByCategory = name => {
    store.dispatch("filterByCategories", { categoryName: name });
  };

  const resetFilter = () => {
    store.dispatch("resetFilter");
  };
  const categories = groupCollectionBy($store.actualLinks, "category");
</script>

<div class="p-2 text-gray-800 bg-gray-200 my-8">
  {#each categories as [name, links]}
    <a
      class=" text-sm px-1"
      on:click|preventDefault={() => filterByCategory(name)}
      href="/">
      <span>{name} ({links.length})</span>

    </a>
  {/each}
  <a class=" text-sm px-1" on:click|preventDefault={resetFilter} href="/">
    <span>Reset</span>

  </a>
</div>
