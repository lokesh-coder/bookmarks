<script>
  import { groupByCategories } from "../utils/group-links.js";

  export let bookmarks = [];
  $: categories = groupByCategories(bookmarks);
</script>

{#each categories as [name, links]}

  <h1
    class="text-xs uppercase text-primary px-2 py-1 inline-block border
    border-primary inline-flex justify-center mb-4"
    id={name}>
    <i class="ri-bookmark-fill mr-1" />
    {name}
  </h1>
  <div class="overflow-hidden mb-4">
    {#each links as link}
      <div class="py-3 flex hover:bg-indigo-100 cursor-pointer">
        <span class="favicon-frame border-r border-gray-30 ">
          <img src={link.meta.icon} alt={link.meta.title} />
        </span>
        <span class="pl-2 flex flex-col justify-center overflow-hidden">
          <h3 class="text-sm font-medium text-gray-700 capitalize">
            {link.meta.title}
          </h3>
          <p class="text-gray-600 text-sm truncate">{link.url}</p>
        </span>
      </div>
    {/each}
  </div>
{/each}
