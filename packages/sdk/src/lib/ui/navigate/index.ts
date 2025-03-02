export interface NavBrand {
  custom: Record<string, ClassName>;
  label: string;
  alt: string;
  size: number | string;
  home: string;
  inner: string;
}

export interface NavLink {
  href: string;
  target: string;
  title: string;
  rel: string;
  role: string;
  itemprop: string;
}

export interface NavItem extends NavLink {
  class: ClassName;
  label: string;
  icon: string;
  base: string;
  disallow: boolean;
  // FIXME:
  handle: (...x: unknown[]) => unknown | void;
  links: Partial<NavItem>[];
}

export interface NavSite {
  navbar: {
    links: Partial<NavItem>[];
    scope?: string[];
    brand?: Partial<NavBrand>;
  };
  draver?: {
    links: Partial<NavItem>[];
  };
  footer?: {
    links: Partial<NavItem>[];
    copylink?: Partial<NavItem>;
  };
  allow?: string[];
}

export { default as Link } from './Link.svelte';
export { default as NavHome } from './NavHome.svelte';
export { default as NavPath } from './NavPath.svelte';
export { default as NavToTop } from './NavToTop.svelte';

import Nav from './Nav.js';
export default Nav;
