<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let data;
  import Select from "svelte-select";
  let formCategory = "general";
  let formTags = null;
  let formUrl = "";
  const addUrlHandler = async () => {
    const data = {
      category: formCategory.value,
      tags: (formTags || []).map(x => x.value),
      url: formUrl
    };
    console.log("data", data);

    if (!data.url) return;
    try {
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
                category: data.category,
                tags: data.tags
              }
            }
          })
        }
      );
      let result = await response.json();
    } catch (error) {
      dispatch("close", {});
    }
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

<div class="flex px-12 py-8 bg-blue-100 ">
  <div class="lg:w-4/12 mx-auto ">
    <div class="relative flex items-center">
      <i class="ri-bookmark-fill mr-1 absolute mx-3 text-gray-400" />
      <input
        placeholder="paste bookmark url..."
        bind:value={formUrl}
        class=" py-1 px-8 w-full bg-white border border-blue-300 text-blue-500
        text-sm focus:outline-none" />
    </div>
    <div class="flex mt-4">
      <div class="w-64 mr-3">
        <Select
          {items}
          isCreatable
          isClearable={false}
          bind:selectedValue={formCategory} />
      </div>
      <div class="w-full">
        <Select
          items={tags}
          isCreatable
          isMulti
          isClearable={false}
          placeholder="add tags"
          bind:selectedValue={formTags} />
      </div>
    </div>
    <div class="flex mt-4 justify-start">
      <button
        class="bg-primary text-white px-2 py-1 mt-2 uppercase text-xs mr-4
        text-white flex items-center font-title"
        on:click={addUrlHandler}>
        <i class="ri-save-line text-base mr-2 leading-none" />
        Add link
      </button>
    </div>

  </div>
</div>
