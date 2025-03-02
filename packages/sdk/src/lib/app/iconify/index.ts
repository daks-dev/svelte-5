export interface IconifyBundle {
  prefix: string;
  icons: Record<string, unknown>;
}

export const isIcon = (x: Attribute): boolean =>
  typeof x === 'string' && /^[a-z,-]+:[a-z,-]+$/.test(x);

export { default as IconTest } from './IconTest.svelte';

import Icon from './Icon.svelte';
export default Icon;
