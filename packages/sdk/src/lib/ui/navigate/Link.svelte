<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { page } from '$app/stores';
  import { IconTest } from '../../app/iconify/index.js';
  import Nav from './Nav.js';

  /*
  import type { SvelteHTMLElements } from 'svelte/elements';

  type Props = Omit<SvelteHTMLElements['a'], 'class'> & {
    class?: ClassName;
    base?: string;
    target?: string;
    disallow?: boolean;
    label?: string;
    icon?: string;
    size?: number | string;
    pointer?: boolean;
  };

  let {
    children,
    class: className,
    href,
    base,
    target,
    rel,
    role,
    itemprop,
    disallow,
    label,
    icon,
    size,
    pointer = false,
    ...rest
  }: Props = $props();
  */

  let className: ClassName = undefined;
  export { className as class };

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

  /*
  const pathname = $state(page.url.pathname);
  item.pathname = pathname;
  */

  $: item.pathname = $page.url.pathname;
</script>

<!-- svelte-ignore event_directive_deprecated -->
<!-- svelte-ignore slot_element_deprecated -->
<svelte:element
  this={item.tag}
  on:click
  on:dblclick
  on:keydown
  class={twMerge(
    'select-none',
    item.tag === 'button' && 'inherit',
    item.active && !item.pointer && 'disabled',
    className
  )}
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
