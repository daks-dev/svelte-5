<script lang="ts">
  import { page } from '$app/state';
  import Icon, { isIcon } from '../../app/iconify/index.js';
  import { twMerge } from 'tailwind-merge';
  import Link from './Link.svelte';
  import type { NavBrand } from './index.d.ts';

  let className: ClassName = undefined;
  export { className as class };

  export let brand: Partial<NavBrand>;
  const { custom = {}, label = 'home page', alt = '', size = '1.25em', home, inner } = brand;
</script>

<Link
  class={twMerge(className, custom.link)}
  href="/"
  aria-label={label}>
  <span class="sr-only">{@html label}</span>
  {#if page.url.pathname === '/'}
    {#if home}
      {#if isIcon(home)}
        <Icon
          class={twMerge('disabled', custom.home)}
          icon={home}
          {size}>
          {alt}
        </Icon>
      {:else}
        <img
          class={twMerge('disabled', custom.home)}
          src={home}
          width={size}
          height={size}
          {alt} />
      {/if}
    {/if}
  {:else if inner}
    {#if isIcon(inner)}
      <Icon
        class={twMerge('pointer-events-none', custom.inner)}
        icon={inner}
        {size}>
        {alt}
      </Icon>
    {:else}
      <img
        class={twMerge('pointer-events-none', custom.inner)}
        src={inner}
        width={size}
        height={size}
        {alt} />
    {/if}
  {/if}
</Link>
