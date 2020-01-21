<script>
  import { onMount } from "svelte";
  import hotkeys from "hotkeys-js";
  import Tailwindcss from "./Tailwindcss.svelte";
  import data from "../../src/data.json";
  import List from "./components/list.svelte";
  import SearchBar from "./components/searchbar.svelte";
  import Categories from "./components/categories.svelte";
  import Tags from "./components/tags.svelte";
  import FormBar from "./components/formbar.svelte";
  import Addform from "./components/addform.svelte";
  import Navbar from "./components/navbar.svelte";
  import { store } from "./utils/store";
  let Links = data.bookmarks;
  let bookmarks = Links;
  let openFormbar = false;

  onMount(() => {
    store.dispatch("setLinks", { links: data.bookmarks });
  });

  hotkeys("cmd+v", function(event, handler) {
    navigator.clipboard.readText().then(data => {
      console.log("data", data);
      openFormbar = true;
    });
    event.preventDefault();
  });

  const onSearch = results => {
    console.log(results.detail.keyword);
    if (results.detail.keyword)
      store.dispatch("searchLinks", { keyword: results.detail.keyword });
    else store.dispatch("resetFilter");
  };
</script>

<main class="h-full">
  <Tailwindcss />
  <div
    class="w-full h-full lg:flex font-body lg:justify-end flex-col lg:flex-row">

    <div class="w-full px-4 lg:px-12 py-8 relative">
      <FormBar
        open={openFormbar}
        on:close={() => {
          console.log('closed');
          openFormbar = false;
        }}>
        <Addform
          {data}
          on:close={() => {
            openFormbar = false;
          }} />
      </FormBar>

      <div class="lg:w-4/12 mx-auto relative">

        <SearchBar on:search={onSearch} />
        <Navbar />
        {#if $store.isCategoriesSectionOpen}
          <Categories links={Links} />
        {/if}
        {#if $store.isTagsSectionOpen}
          <Tags links={Links} />
        {/if}
        <List bookmarks={$store.links} />
      </div>
    </div>
  </div>
</main>
