<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { timer, timerFormat as format } from '../../stores/persistent.js';

  let className: ClassName = undefined;
  export { className as class };
</script>

<time class={twMerge(className)}>
  {format($timer)}
</time>
