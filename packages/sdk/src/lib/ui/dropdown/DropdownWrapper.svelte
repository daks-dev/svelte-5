<script lang="ts">
  import type { NavItem } from '../navigate/index.d.ts';
  import Link from '../navigate/Link.svelte';
  import { twMerge } from 'tailwind-merge';

  let classWrapper: ClassName = 'z-10 bg-neutral-50/95 dark:bg-slate-700/95 rounded-md shadow-md';
  export { classWrapper as class };
  export let classLink: ClassName = 'py-2 px-4 hover:bg-gray-400/25';

  export let id: string | undefined = undefined;
  export let hidden: boolean;

  export let items: Partial<NavItem>[] = [];
  export let base: string | undefined = undefined;

  export let origin = 'top';
  export let duration = 300;
</script>

<!-- style:transform-origin={origin} -->
<div
  {id}
  role="menu"
  class={twMerge(
    'absolute flex w-max min-w-full flex-col overflow-hidden',
    'aria-hidden:disabled aria-hidden:scale-75 aria-hidden:opacity-0',
    'transition-all ease-in-out',
    classWrapper
  )}
  class:top-full={origin.includes('top')}
  class:bottom-full={origin.includes('bottom')}
  style:transition-duration={`${duration}ms`}
  aria-orientation="vertical"
  aria-hidden={hidden}>
  {#if items}
    {#each items as item}
      <Link
        on:click={item.handle ? item.handle : () => {}}
        role="menuitem"
        class={twMerge('flex w-full items-center', classLink)}
        {base}
        {...item}
        tabindex={hidden ? -1 : undefined} />
    {/each}
  {:else}
    <slot />
  {/if}
</div>
