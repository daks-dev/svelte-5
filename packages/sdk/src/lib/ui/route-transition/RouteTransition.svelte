<script lang="ts">
  import { blur, fly } from 'svelte/transition';
  import { sineIn, sineOut } from 'svelte/easing';
  import { navigating } from '$app/stores';
  import { twMerge } from 'tailwind-merge';
  import { routeTransitionMode } from '$lib/stores/index.js';

  let className: ClassName = undefined;
  export { className as class };

  export let refresh: string;
  export let mode: number | string = 0;
  export let roots: string | string[] = ['/', '/admin', '/search'];
  typeof roots === 'string' && (roots = roots.split(' '));
  export let tag = 'div';

  export let duration = 500;
  export let delay = 200;

  $routeTransitionMode = Number(mode);

  const transition = $routeTransitionMode ? fly : blur;
  const options = () => {
    if (!roots.includes($navigating?.to?.url.pathname ?? ''))
      switch ($routeTransitionMode) {
        case 3:
          return {
            in: {
              x: -512,
              duration,
              delay,
              easing: sineIn
            },
            out: {
              x: 512,
              duration: delay,
              easing: sineOut
            }
          };
        case 2:
          return {
            in: {
              y: 384,
              duration,
              delay,
              easing: sineIn
            },
            out: {
              y: -384,
              duration: delay,
              easing: sineOut
            }
          };
        case 1:
          return {
            in: {
              y: -384,
              duration,
              delay,
              easing: sineIn
            },
            out: {
              y: 384,
              duration: delay,
              easing: sineOut
            }
          };
      }
    return {
      in: {
        duration,
        delay,
        amount: 5,
        easing: sineIn
      },
      out: {
        duration: delay,
        easing: sineOut
      }
    };
  };
</script>

{#key refresh}
  <svelte:element
    this={tag}
    in:transition={options().in}
    out:transition={options().out}
    class={twMerge(className)}>
    <slot />
  </svelte:element>
{/key}
