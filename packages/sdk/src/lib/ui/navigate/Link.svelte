<script lang="ts">
  // TODO:
  import { page } from '$app/stores';
  import { IconTest } from '../../app/iconify/index.js';
  import Nav from './Nav.js';

  export let label: string | undefined = undefined;
  export let icon: string | undefined = undefined;

  export let href: string | undefined = undefined;
  export let base: string | undefined = undefined;

  export let target: string | undefined = undefined;

  export let rel: string | undefined = undefined;
  export let role: string | undefined = undefined;
  export let itemprop: string | undefined = undefined;

  // export let handle: ((...x: unknown[]) => unknown) | undefined = undefined;

  export let disallow = false;

  export let size: undefined | number | string = undefined;
  export let pointer = false;

  const item = new Nav({
    href,
    target,
    rel,
    role,
    itemprop,
    base,
    disallow
  });
  item.pointer = pointer;
  $: item.pathname = $page.url.pathname;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
  this={item.tag}
  on:click
  on:dblclick
  on:keydown
  class:select-none={true}
  class:inherit={item.tag === 'button'}
  class:disabled={item.active && !item.pointer}
  {...item.props}
  aria-label={icon || $$slots.default ? label : undefined}
  {...$$restProps}>
  <slot name="before" />
  <slot>
    {#if icon}
      <span class="sr-only">{@html label}</span>
    {/if}
    <IconTest
      class="disabled"
      {label}
      {icon}
      {size} />
  </slot>
  <slot name="after" />
</svelte:element>
