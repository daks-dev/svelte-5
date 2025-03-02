<script lang="ts">
  import { beforeNavigate } from '$app/navigation';
  import Icon from '../../app/iconify/Icon.svelte';
  import { navigate } from '../../stores/index.js';
  import { twMerge } from 'tailwind-merge';
  import Link from '../navigate/Link.svelte';

  let className: ClassName = undefined;
  export { className as class };

  export let icon = 'ic:round-play-arrow';
  export let size: number | string = '1.25em';

  beforeNavigate(navigate.clear);
</script>

{#key $navigate}
  <Link
    class={twMerge('disabled:opacity-50', className)}
    href={$navigate?.prev?.href || undefined}
    title={$navigate?.prev?.title || undefined}
    disabled={!$navigate?.prev?.href || undefined}>
    <Icon
      class="pointer-events-none"
      {icon}
      {size}
      hFlip>
      {$navigate?.prev?.title || null}
    </Icon>
  </Link>

  <Link
    class={twMerge('disabled:opacity-50', className)}
    href={$navigate?.next?.href || undefined}
    title={$navigate?.next?.title || undefined}
    disabled={!$navigate?.next?.href || undefined}>
    <Icon
      class="pointer-events-none"
      {icon}
      {size}>
      {$navigate?.next?.title || null}
    </Icon>
  </Link>
{/key}
