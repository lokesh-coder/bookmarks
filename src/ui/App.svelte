<script>
  import Tailwindcss from "./Tailwindcss.svelte";
  import data from "../../src/data.json";
  import List from "./components/list.svelte";
  import SearchBar from "./components/searchbar.svelte";
  import Categories from "./components/categories.svelte";
  let Links = data.bookmarks;
  let bookmarks = Links;

  const onFilter = results => {
    bookmarks = results.detail.items;
  };
</script>

<main class="h-screen">
  <Tailwindcss />
  <div
    class="w-full h-full lg:flex font-body lg:justify-end flex-col lg:flex-row">
    <div
      class="w-full lg:w-4/12 bg-primary flex flex-col lg:fixed top-0 left-0
      h-screen"
      id="pattern-one">
      <div class="flex-1 flex items-center justify-center flex-col">
        <h1 class="font-display text-5xl text-white text-center">BOOKIE</h1>
        <p class="text-blue-900">List of all my favorite application links</p>
      </div>
      <div class=" flex items-center justify-center ">
        <Categories links={Links} />
      </div>

    </div>
    <div class="w-full lg:w-8/12 bg-whitish px-12 py-12" id="pattern-two">
      <div class="lg:w-6/12 mx-auto relative">
        <SearchBar items={Links} on:filteredItems={onFilter} />
        <List {bookmarks} />
      </div>
    </div>
  </div>
</main>
