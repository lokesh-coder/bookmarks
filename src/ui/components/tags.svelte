<script>
  import { store } from "../utils/store";
  import { groupCollectionBy } from "../utils/group-links";
  const filterByTag = name => {
    store.dispatch("filterByTags", { tagName: name });
  };

  const resetFilter = () => {
    store.dispatch("resetFilter");
  };
  const tags = groupCollectionBy($store.actualLinks, "tags").filter(
    x => x[0] !== "undefined" && x[0] !== ""
  );
</script>

<div class="p-2 text-gray-800 bg-gray-200 my-8">
  {#each tags as [name, links]}
    <a
      class=" text-sm px-1"
      on:click|preventDefault={() => filterByTag(name)}
      href="/">
      <span>{name} ({links.length})</span>

    </a>
  {/each}
  <a class=" text-sm px-1" on:click|preventDefault={resetFilter} href="/">
    <span>Reset</span>

  </a>
</div>
