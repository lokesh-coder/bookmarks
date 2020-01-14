<script>
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let open = false;

  const close = () => {
    dispatch("close", {});
  };
</script>

{#if open}
  <div
    transition:slide={{ delay: 250, duration: 300, easing: quintOut }}
    class="absolute top-0 left-0 w-full shadow-2xl z-50">

    <slot />
  </div>
{/if}
