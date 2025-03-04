<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import Icon, { isIcon } from '../../app/iconify/index.js';
  import Link from '../navigate/Link.svelte';
  import { twMerge } from 'tailwind-merge';
  import { outside, uuid } from '../../utils/index.js';
  import DropdownWrapper from './DropdownWrapper.svelte';
  import type { NavItem } from '../navigate/index.d.ts';

  export let classWrapper: ClassName = undefined;
  let classLink: ClassName =
    'py-2 px-4 bg-inherit hover:bg-gray-400/25 rounded-sm border border-gray-500/50';
  export { classLink as class };

  export let label: string | undefined = undefined;

  export let href: string | undefined = undefined;
  export let base: string | undefined = undefined;

  export let inline = false;
  export let sign = !isIcon(label);
  export let size: number | string = '1.25em';

  export let items: NavItem[] = [];

  export let index: number | undefined = undefined;

  const id = uuid();

  let hidden = true;

  function close() {
    hidden = true;
  }

  function handleClick(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    hidden = !hidden;
  }

  function handleDblClick(ev: Event) {
    if (href && page.url.pathname !== href) {
      ev.stopPropagation();
      close();
      goto(href);
    }
  }

  function handleKey(ev: KeyboardEvent) {
    if (ev.key === 'Escape' && !hidden) {
      ev.stopPropagation();
      close();
    }
  }
</script>

<div
  use:outside={close}
  on:click={close}
  on:keydown={handleKey}
  role="button"
  class={twMerge('relative', inline ? 'inline-flex' : 'flex', classWrapper)}
  tabindex={index}>
  <Link
    on:click={handleClick}
    on:dblclick={handleDblClick}
    class={twMerge('flex w-fit min-w-full items-center', classLink)}
    {label}
    {href}
    {base}
    {size}
    pointer
    aria-expanded={!hidden}
    aria-haspopup={!hidden}
    aria-controls={id}
    tabindex={index}>
    <svelte:fragment slot="after">
      {#if sign}
        <Icon
          icon="ic:round-chevron-right"
          class="pointer-events-none"
          rotate={hidden ? (page.url.pathname.indexOf(`${href}/`) === 0 ? 90 : 45) : -45}
          size="1em" />
      {/if}
    </svelte:fragment>
  </Link>

  {#if items.length}
    <DropdownWrapper
      {id}
      {hidden}
      {items}
      {base}>
      <slot {hidden} />
    </DropdownWrapper>
  {:else}
    <slot
      {id}
      {hidden} />
  {/if}
</div>
