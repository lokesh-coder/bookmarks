<script>
  import Tailwindcss from "./Tailwindcss.svelte";
  import data from "../../src/data.json";
  import List from "./components/list.svelte";
  import SearchBar from "./components/searchbar.svelte";
  import Categories from "./components/categories.svelte";
  let Links = data.bookmarks;
  let bookmarks = Links;

  const onFilter = results => {
    console.log("results", results.detail.items);
    bookmarks = results.detail.items;
  };
</script>

<main class="h-full py-6">
  <Tailwindcss />
  <div class="w-full">
    <div class="w-2/6 mx-auto">
      <SearchBar items={Links} on:filteredItems={onFilter} />
      <Categories links={Links} />
      <List {bookmarks} />
    </div>
  </div>
</main>
