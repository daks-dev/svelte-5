<script lang="ts">
  import dayjs from 'dayjs';
  import custom from 'dayjs/plugin/customParseFormat.js';

  dayjs.extend(custom);

  import { twMerge } from 'tailwind-merge';

  let className: ClassName = undefined;
  export { className as class };

  export let d: string | Date;
  export { d as date };
  export let parse: string | undefined = undefined;
  const date = typeof d === 'string' ? dayjs(d, parse).toDate() : d;

  export let locale: 'en-US' | 'ru-RU' = 'ru-RU';
  export let year: 'numeric' | '2-digit' = 'numeric';
  export let month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow' = 'long';
  export let day: 'numeric' | '2-digit' = 'numeric';
</script>

<time
  class={twMerge(className)}
  datetime={date.toISOString()}
  {...$$restProps}>
  {date.toLocaleDateString(locale, { year, month, day })}
</time>
