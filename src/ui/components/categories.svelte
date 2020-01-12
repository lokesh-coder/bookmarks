<script>
  import { groupByCategories } from "../utils/group-links";
  export let links;
  const categories = groupByCategories(links);
</script>

<div class="p-2 text-gray-100 my-8">
  {#each categories as [name, links]}
    <a class=" text-sm px-1" href="#{name}">
      <span>{name} ({links.length})</span>

    </a>
  {/each}
</div>
