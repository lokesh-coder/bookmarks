<script>
  import { groupByCategories } from "../utils/group-links";
  export let links;
  const categories = groupByCategories(links);
</script>

<div class="p-2 bg-gray-200 my-2">
  {#each categories as [name, links]}
    <a class=" text-sm text-gray-700 px-1" href="#{name}">
      <span>{name} ({links.length})</span>

    </a>
  {/each}
</div>
