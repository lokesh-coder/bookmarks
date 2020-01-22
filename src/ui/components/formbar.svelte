<script>
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let open = false;
  export let title = "";

  const close = () => {
    dispatch("close", {});
  };
</script>

{#if open}
  <div
    transition:slide={{ delay: 250, duration: 300, easing: quintOut }}
    class="absolute top-0 left-0 w-full shadow-2xl z-50">
    <div class="px-12 py-2 bg-white text-blue-700 border-b border-blue-200">
      <div class="lg:w-4/12 mx-auto flex justify-between ">
        {title || 'no title'}
        <i
          class="ri-close-fill cursor-pointer"
          on:click={() => (open = false)} />
      </div>

    </div>
    <slot />
  </div>
{/if}
