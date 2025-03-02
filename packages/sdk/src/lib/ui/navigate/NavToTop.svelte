<script lang="ts">
  import { fade } from 'svelte/transition';
  import { sineIn, sineOut } from 'svelte/easing';
  import Icon from '../../app/iconify/Icon.svelte';
  import { toTop } from '../../utils/scroll.js';
  import { twMerge } from 'tailwind-merge';

  let className: ClassName = undefined;
  export { className as class };

  export let label = 'to top';

  export let scrolled: boolean;
  export let size: number | string = '1.75em';
  export let duration = 300;
  export let speed = duration * 5;

  function handleClck() {
    toTop({ duration: speed });
  }
</script>

{#if scrolled}
  <button
    in:fade={{
      duration,
      easing: sineIn
    }}
    out:fade={{
      duration,
      easing: sineOut
    }}
    on:click|preventDefault={handleClck}
    class={twMerge(
      'absolute top-full z-10 flex',
      'opacity-50 hover:opacity-100',
      'transition ease-in-out',
      className
    )}
    style:transition-duration={`${duration}ms`}
    aria-label={label}>
    <span class="sr-only">{@html label}</span>
    <Icon
      class="pointer-events-none"
      icon="mdi:transfer-up"
      {size} />
  </button>
{/if}
