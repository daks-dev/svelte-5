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
    class={twMerge(
      'w-full rounded-md p-5 shadow',
      'divide-y divide-current border border-current',
      animate,
      className
    )}>
    <slot />
    <div class="flex space-x-4">
      <div class="h-10 w-10 rounded-full bg-current"></div>
      <div class="flex-1 space-y-5">
        <div class="h-2.5 rounded-full bg-current"></div>
        <div class="space-y-2.5 opacity-50">
          <div class="grid grid-cols-3 gap-x-2 gap-y-2.5">
            <div class="col-span-2 h-2 rounded bg-current"></div>
            <div class="col-span-1 h-2 rounded bg-current"></div>
          </div>
          <div class="h-2 rounded bg-current"></div>
        </div>
      </div>
    </div>
  </div>
{/if}
