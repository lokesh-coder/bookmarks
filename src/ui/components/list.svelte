<script>
  import { groupByCategories } from "../utils/group-links.js";

  export let bookmarks = [];
  $: categories = groupByCategories(bookmarks);
</script>

{#each categories as [name, links]}

  <h1
    class="text-lg uppercase font-bold text-indigo-500 text-center py-5"
    id={name}>
    {name}
  </h1>
  <div class=" rounded-lg overflow-hidden">
    {#each links as link}
      <div
        class="px-4 py-1 border-b border-gray-300 flex items-center
        hover:bg-indigo-100 cursor-pointer">
        <span class="favicon-frame">
          <img src={link.meta.icon} alt={link.meta.title} />
        </span>
        <span>
          <h3 class="text-sm font-semibold text-gray-700 capitalize">
            {link.meta.title}
          </h3>
          <p class="text-gray-600 text-sm">{link.url}</p>
        </span>
      </div>
    {/each}
  </div>
{/each}
