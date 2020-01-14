<script>
  import hotkeys from "hotkeys-js";
  import Tailwindcss from "./Tailwindcss.svelte";
  import data from "../../src/data.json";
  import List from "./components/list.svelte";
  import SearchBar from "./components/searchbar.svelte";
  import Categories from "./components/categories.svelte";
  import FormBar from "./components/formbar.svelte";
  import Addform from "./components/addform.svelte";
  let Links = data.bookmarks;
  let bookmarks = Links;
  let openFormbar = false;

  const onFilter = results => {
    bookmarks = results.detail.items;
  };
  hotkeys("cmd+v", function(event, handler) {
    navigator.clipboard.readText().then(data => {
      console.log("data", data);
      openFormbar = true;
    });
    event.preventDefault();
  });
</script>

<main class="h-full">
  <Tailwindcss />
  <div
    class="w-full h-full lg:flex font-body lg:justify-end flex-col lg:flex-row">
    <div
      class="w-full lg:w-4/12 bg-primary flex flex-col lg:fixed top-0 left-0
      h-screen"
      id="pattern-one">
      <div class="flex-1 flex items-center justify-center flex-col">
        <h1 class="font-display text-5xl text-white text-center">BOOKIE</h1>
        <p class="text-blue-700">List of all my favorite application links</p>
      </div>
      <div class=" flex items-center justify-center ">
        <Categories links={Links} />
      </div>

    </div>
    <div
      class="w-full lg:w-8/12 bg-blue-100 px-4 lg:px-12 py-12 relative"
      id="pattern-two">
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

      <div class="lg:w-6/12 mx-auto relative">

        <SearchBar items={Links} on:filteredItems={onFilter} />
        <List {bookmarks} />
      </div>
    </div>
  </div>
</main>
