<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import placeholder from '../../assets/images/placeholder.js';

  export let data: unknown;
  const { src, width, height, format: _f, orientation: _o, ...caption } = data as ImageMetainfo;
  const entries = Object.entries(caption);

  let className: ClassName = undefined;
  export { className as class };
  export let style: string | undefined = undefined;

  export let custom: Record<string, ClassName> = {};

  export let native = false;
  export let loaded: ((x?: Event | HTMLElement) => void) | undefined = undefined;

  const handleLoad = native && loaded ? (ev: Event) => loaded?.call(ev) : undefined;

  export let alt = '';
</script>

<figure
  class={twMerge('relative', className)}
  {style}>
  <slot name="before" />
  <img
    on:load={handleLoad}
    class={twMerge(
      !native && 'bg--loading bg-20% bg-center bg-no-repeat',
      'bg-neutral-300',
      custom.image
    )}
    class:lazy={!native}
    src={native ? src : placeholder}
    data-src={native ? undefined : src}
    {width}
    {height}
    {alt}
    decoding="async"
    loading="lazy" />
  <slot>
    {#if entries.length}
      <figcaption class={twMerge('flex flex-col', custom.caption)}>
        {#each entries as [key, val]}
          {#if val}
            {#if key === 'title'}
              <span class={twMerge('order-first font-semibold', custom[key])}>{@html val}</span>
            {:else if key === 'description'}
              <small class={twMerge('order-last', custom[key])}>{@html val}</small>
            {:else}
              <span class={twMerge(custom[key])}>{@html val}</span>
            {/if}
          {/if}
        {/each}
      </figcaption>
    {/if}
  </slot>
  <slot name="after" />
</figure>
