<script lang="ts">
  import Icon from './Icon.svelte';
  import { isIcon } from './index.js';

  let className: undefined | string = undefined;
  export { className as class };

  export let label: string | undefined = undefined;
  export let icon: string | undefined = undefined;

  export let size: number | string | undefined = undefined;
</script>

{#if icon}
  {#if isIcon(icon)}
    <Icon
      class={className}
      {icon}
      {size}>
      {@html label}
    </Icon>
  {:else}
    {@html label ?? icon}
  {/if}
{:else}
  {@html label}
{/if}
