<script>
  import { fade, fly, blur } from "svelte/transition";
  import { store } from "../utils/store";

  export let bookmarks = [];

  const icons = {
    default: "bookmark-fill",
    category: "file-mark-fill",
    tag: "price-tag-3-fill",
    search: "filter-2-fill"
  };
</script>

{#each bookmarks as [name, links]}
  <span
    class="text-xs uppercase text-primary px-2 py-1 inline-block border
    border-primary inline-flex justify-center mb-4 font-title"
    id={name}
    transition:blur>
    <i class="ri-{icons[$store.groupType]} mr-1" />
    {name == 'undefined' ? 'All bookmarks' : name} ({links.length})
  </span>
  <div class="overflow-hidden mb-4">
    {#each links as link}
      <div
        class="py-1 flex hover:bg-blue-200 cursor-pointer pr-2 "
        transition:blur>
        <span class="favicon-frame border-r border-blue-300 ">
          <img
            src={link.meta.icon}
            alt={link.meta.title}
            onerror="this.src=`https://dummyimage.com/64/eb5757/ffffff.png&amp;text={link.meta.title[0]}`" />
        </span>
        <span class="pl-2 flex flex-col justify-center overflow-hidden">
          <h3 class="text-sm font-medium text-blue-700 capitalize truncate">
            {link.meta.title}
          </h3>
          <p class="text-gray-600 text-sm truncate">{link.url}</p>
        </span>
      </div>
    {/each}
  </div>
{/each}
