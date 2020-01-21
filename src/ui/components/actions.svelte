<script>
  let isAddTokenFormVisible = false;
  let isAddUrlFormVisible = false;
  let isAddTokenBtnVisible = !localStorage.getItem("BOOKIE_TOKEN");
  const tokenAddHandler = () => {
    isAddTokenFormVisible = !isAddTokenFormVisible;
  };
  const addFormHandler = e => {
    if (e.keyCode != 13) return;
    localStorage.setItem("BOOKIE_TOKEN", e.target.value);
    isAddTokenFormVisible = false;
    isAddTokenBtnVisible = false;
  };

  const urlAddHandler = () => {
    isAddUrlFormVisible = true;
  };

  const addUrlHandler = async e => {
    if (e.keyCode != 13) return;

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
              url: e.target.value,
              category: "general",
              tags: []
            }
          }
        })
      }
    );
    let result = await response.json();
    // e.target.value
    isAddUrlFormVisible = false;
  };
</script>

<div class="flex">
  {#if isAddTokenBtnVisible}
    <button
      on:click={tokenAddHandler}
      class="text-gray=500 px-3 rounded text-sm flex align-center justify-center">
      <i class="ri-key-fill mr-1 text-lg" />

    </button>
  {/if}
  {#if !isAddTokenBtnVisible}
    <button
      on:click={urlAddHandler}
      class="text-white px-3 rounded text-sm flex align-center justify-center">
      <i class="ri-add-circle-fill text-primary text-2xl" />

    </button>
  {/if}
</div>

{#if isAddTokenFormVisible}
  <div>
    <input
      on:keydown={addFormHandler}
      placeholder="add token"
      class="flex w-full p-2 border border-gray-300" />
  </div>
{/if}

{#if isAddUrlFormVisible}
  <div>
    <input
      on:keydown={addUrlHandler}
      placeholder="add url"
      class="flex w-full p-2 border border-gray-300" />
  </div>
{/if}
