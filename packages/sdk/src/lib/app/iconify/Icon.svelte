<script lang="ts">
  import { BROWSER } from 'esm-env';
  import { twMerge } from 'tailwind-merge';
  import { onMount } from 'svelte';
  import Icon from '@iconify/svelte';

  import type { IconifyIconAttributes } from './index.d.ts';

  const {
    children,
    class: className,
    icon,
    label: ariaLabel,
    size,
    width: w,
    height: h,
    role = 'image',
    hidden: ariaHidden = true,
    ...rest
  }: IconifyIconAttributes = $props();
  const width = w ?? size;
  const height = h ?? size;

  let visible = $state(false);

  onMount(() => (visible = BROWSER));
</script>

{#if visible}
  {#key icon}
    <Icon
      class={twMerge(className)}
      {icon}
      {width}
      {height}
      {role}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      {...rest} />
  {/key}
{:else}
  {@render children?.()}
{/if}
