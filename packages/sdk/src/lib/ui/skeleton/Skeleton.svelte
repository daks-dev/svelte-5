<script lang="ts">
  import { BROWSER } from 'esm-env';
  import { onMount } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  let className: ClassName = 'max-w-sm';
  export { className as class };

  export let animate = 'animate-pulse hover:animation-paused';

  let visible = false;
  onMount(() => (visible = BROWSER));
</script>

{#if visible}
  <div
    role="status"
    class={twMerge('grid grid-cols-10 gap-y-2.5', animate, className)}
    aria-hidden="true">
    <div class="col-span-3 mb-1.5 h-2.5 rounded-full bg-current"></div>
    <div class="col-span-9 h-2 rounded-full bg-current"></div>
    <div class="col-span-full h-2 rounded bg-current"></div>
    <div class="col-span-8 h-2 rounded bg-current"></div>
    <div class="col-span-7 h-2 rounded bg-current"></div>
    <div class="col-span-9 h-2 rounded bg-current"></div>
    <span class="sr-only">...loading...</span>
  </div>
{/if}
