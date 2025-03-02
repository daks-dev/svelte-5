<script lang="ts">
  import { BROWSER } from 'esm-env';
  import { onMount } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  let className: ClassName = 'max-w-lg';
  export { className as class };

  export let animate = 'animate-pulse hover:animation-paused';

  let visible = false;
  onMount(() => (visible = BROWSER));
</script>

{#if visible}
  <div
    role="status"
    class={twMerge('space-y-2.5', animate, className)}
    aria-hidden="true">
    <div class="grid grid-cols-11 gap-x-2 gap-y-2.5">
      <div class="col-span-2 h-2.5 rounded-full bg-current opacity-50"></div>
      <div class="col-span-2 h-2.5 rounded-full bg-current"></div>
      <div class="col-span-5 h-2.5 rounded-full bg-current"></div>
    </div>
    <div class="grid grid-cols-11 gap-x-2 gap-y-2.5">
      <div class="col-span-5 h-2.5 rounded-full bg-current"></div>
      <div class="col-span-5 h-2.5 rounded-full bg-current opacity-50"></div>
      <div class="col-span-1 h-2.5 rounded-full bg-current opacity-50"></div>
    </div>
    <div class="grid grid-cols-11 gap-x-2 gap-y-2.5">
      <div class="col-span-3 h-2.5 rounded-full bg-current opacity-50"></div>
      <div class="col-span-2 h-2.5 rounded-full bg-current"></div>
      <div class="col-span-3 h-2.5 rounded-full bg-current opacity-50"></div>
    </div>
    <div class="grid grid-cols-11 gap-x-2 gap-y-2.5">
      <div class="col-span-4 h-2.5 rounded-full bg-current"></div>
      <div class="col-span-5 h-2.5 rounded-full bg-current opacity-50"></div>
      <div class="col-span- h-2.5 rounded-full bg-current opacity-50"></div>
    </div>
    <div class="grid grid-cols-11 gap-x-2 gap-y-2.5">
      <div class="col-span-3 h-2.5 rounded-full bg-current opacity-50"></div>
      <div class="col-span-2 h-2.5 rounded-full bg-current opacity-50"></div>
      <div class="col-span-4 h-2.5 rounded-full bg-current"></div>
    </div>
    <div class="grid grid-cols-11 gap-x-2 gap-y-2.5">
      <div class="col-span-4 h-2.5 rounded-full bg-current opacity-50"></div>
      <div class="col-span-2 h-2.5 rounded-full bg-current"></div>
      <div class="col-span-4 h-2.5 rounded-full bg-current opacity-50"></div>
    </div>
    <span class="sr-only">...loading...</span>
  </div>
{/if}
