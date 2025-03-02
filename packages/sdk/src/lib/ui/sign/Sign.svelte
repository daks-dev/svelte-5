<script lang="ts">
  import Icon from '../../app/iconify/Icon.svelte';
  import { twMerge } from 'tailwind-merge';

  let className: ClassName = 'top-2 left-2';
  export { className as class };

  export let icon = 'mdi:link-variant';

  export let link = false;

  export let small = false;

  export let auto = false;
  export let dark = false;
  export let light = false;
</script>

<Icon
  class={twMerge(
    'absolute z-10',
    small ? 'h-5 w-5' : 'h-7 w-7',
    (auto || light || dark) && 'rounded-full p-1 shadow-md',
    light && 'bg-white/20',
    dark && 'bg-black/20',
    auto && 'bg-black/20 dark:bg-white/20',
    link ? 'text-sky-600 dark:text-sky-400' : 'text-white',
    'group-oversee:opacity-100 opacity-70',
    'group-oversee:mt-1 group-oversee:animate-bounce',
    className
  )}
  {icon} />
