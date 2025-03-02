<script lang="ts">
  import { onMount } from 'svelte';
  import Icon from '../../app/iconify/Icon.svelte';
  import { twMerge } from 'tailwind-merge';

  let className: ClassName = undefined;
  export { className as class };

  export let label = 'color theme';

  export let icons = [
    // 'ic:twotone-dark-mode', 'ic:twotone-light-mode'
    'line-md:sunny-outline-to-moon-loop-transition',
    'line-md:moon-to-sunny-outline-loop-transition'
  ];
  export let size: number | string = '1.25em';

  let dark: boolean;
  function toggle() {
    dark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('color-theme', dark ? 'dark' : 'light');
  }

  onMount(() => (dark = document.documentElement.classList.contains('dark')));
</script>

<svelte:head>
  <script>
    ((d, l) =>
      l === 'dark'
        ? d.add('dark')
        : l === 'light'
          ? d.remove('dark')
          : d.contains('dark') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches && d.add('dark')))(
      document.documentElement.classList,
      localStorage.getItem('color-theme')
    );
  </script>
</svelte:head>

<button
  on:click={toggle}
  class={twMerge('hover:cursor-pointer', className)}
  type="button"
  aria-label={label}>
  <span class="sr-only">{@html label}</span>
  <Icon
    class="pointer-events-none"
    icon={icons[dark ? 1 : 0]}
    {size} />
</button>
