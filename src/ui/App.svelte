<script>
  import Tailwindcss from "./Tailwindcss.svelte";
  export let name;
  import data from "../../src/data.json";
</script>

<main class="bg-gray-100 h-screen">
  <Tailwindcss />
  <div class="w-2/6 mx-auto ">
    <h1 class="text-3xl uppercase font-light text-pink-500 text-center py-12">
      my bookmarks
    </h1>
    <div class="shadow-lg rounded-lg overflow-hidden">
      {#each data.bookmarks as bm}
        <div class="bg-white p-4 border-b border-gray-200">{bm.url}</div>
      {/each}
    </div>
  </div>
</main>
