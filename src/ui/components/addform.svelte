<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let data;
  import Select from "svelte-select";
  const addUrlHandler = async data => {
    let response = await fetch(
      "https://api.github.com/repos/lokesh-coder/bookmarks/dispatches",
      {
        method: "POST",
        headers: {
          Accept: "application/vnd.github.everest-preview+json",
          "Content-Type": "application/json",
          Authorization: `token ${localStorage.getItem("BOOKIE_TOKEN")}`
        },
        body: JSON.stringify({
          event_type: "new-bm",
          client_payload: {
            data: {
              type: "add",
              url: data.url,
              category: "general",
              tags: []
            }
          }
        })
      }
    );
    let result = await response.json();
  };

  const closeHandler = e => {
    e.preventDefault();
    dispatch("close", {});
  };

  let items = [{ value: "general", label: "General", group: "null" }];
  let tags = [];

  onMount(() => {
    let links = data.bookmarks.map(x => x.category.toLowerCase());
    links = [...new Set(links)];
    links = links.map(x => ({ value: x, label: x, group: "null" }));
    items = items.concat(links);

    tags = data.bookmarks.map(x => x.tags);
    tags = tags
      .flatMap(a => a)
      .filter(a => a)
      .map(a => a.toLowerCase());
    tags = [...new Set(tags)];
    tags = tags.map(x => ({ value: x, label: x, group: "null" }));
  });
</script>

<div class="flex p-12 bg-blue-800 ">
  <div class="lg:w-6/12 mx-auto ">
    <h3 class="text-whitish text-xl mb-3 text-center">Add new bookmark</h3>
    <div class="relative flex items-center">
      <i class="ri-bookmark-fill mr-1 absolute mx-3 text-gray-400" />
      <input
        placeholder="paste bookmark url..."
        on:keydown={addUrlHandler}
        class=" p-2 px-8 w-full bg-white-alpha-30 rounded text-white
        focus:outline-none" />
    </div>
    <div class="flex mt-2">
      <div class="w-64 mr-3">
        <Select {items} isCreatable isClearable={false} />
      </div>
      <div class="w-full">
        <Select
          items={tags}
          isCreatable
          isMulti
          isClearable={false}
          placeholder="add tags" />
      </div>
    </div>
    <div class="flex mt-10 justify-center">
      <button
        class="bg-primary text-white px-3 py-2 rounded mt-2 uppercase
        font-medium text-sm mr-4 text-white">
        <i class="ri-save-fill" />
        Add link
      </button>
      <button
        class="border border-blue-300 text-white px-3 py-2 rounded mt-2
        uppercase font-medium text-sm text-blue-300"
        on:click={closeHandler}>
        <i class="ri-close-fill" />
        Close
      </button>
    </div>

  </div>
</div>
