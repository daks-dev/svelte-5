export interface IconifyIconAttributes {
  children?: () => any;
  icon: string;
  class?: ClassName;
  label?: string;
  size?: number | string;
  width?: number | string;
  height?: number | string;
  inline?: boolean;
  hFlip?: boolean;
  vFlip?: boolean;
  flip?: string;
  rotate?: number;
  color?: string;
  role?: string;
  hidden?: boolean;
}

export interface IconifyBundle {
  prefix: string;
  icons: Record<string, unknown>;
}

export const isIcon = (x: Attribute): boolean =>
  typeof x === 'string' && /^[a-z,-]+:[a-z,-]+$/.test(x);

export { default as IconTest } from './IconTest.svelte';

import Icon from './Icon.svelte';
export default Icon;
