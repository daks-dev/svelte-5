<script lang="ts">
  import outside from '../../utils/outside.js';
  import { twMerge } from 'tailwind-merge';

  let className: ClassName = undefined;
  export { className as class };

  export let close: () => void;
  export let disabled: boolean;
  export let duration = 300;

  let scrollY: number = 0;
  let navbar: HTMLElement;

  $: scrolled = scrollY > navbar?.clientHeight;
</script>

<svelte:window bind:scrollY />

<div
  bind:this={navbar}
  id="navbar"
  class={twMerge(
    'fixed top-0 left-0 z-10 w-full',
    'vector-non-scaling-stroke text-lg',
    'origin-top transition-colors ease-in-out',
    'overflow-y-offset',
    className
  )}
  class:scrolled
  class:disabled
  style:transition-duration={`${duration}ms`}>
  <div
    use:outside={close}
    class="
      wrapper-xl relative flex flex-wrap items-center
      justify-end">
    <slot {scrolled} />
  </div>
</div>
