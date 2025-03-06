<script lang="ts">
  import Icon from '../../../app/iconify/Icon.svelte';
  import { twMerge } from 'tailwind-merge';

  let className: ClassName = undefined;
  export { className as class };

  export let disabled: boolean;
  export let size: number | string = '1.25em';
</script>

{#if disabled}
  <div
    class={twMerge(className)}
    aria-label="waiting">
    <Icon
      icon="svg-spinners:8-dots-rotate"
      {size} />
  </div>
{/if}
