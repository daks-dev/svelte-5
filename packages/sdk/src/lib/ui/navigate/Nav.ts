import type { NavItem } from './index.js';

class Nav implements Partial<NavItem> {
  href?: string;
  target?: string;
  rel?: string;
  role?: string;
  itemprop?: string;

  base?: string;
  disallow?: true;

  constructor(args: Partial<NavItem>) {
    Object.assign(this, args);
    if (this.href) {
      this.base && this.href && (this.href = `${this.base}${this.href}`);
      this.external && (this.target ??= '_blank');
      (this.external || this.disallow) && (this.rel ??= 'nofollow');
    }
  }

  private __pointer = false;
  set pointer(val: boolean) {
    this.__pointer = val;
  }
  get pointer() {
    return this.__pointer;
  }

  private __pathname!: string;
  set pathname(val: string) {
    this.__pathname = val;
  }
  get pathname() {
    return this.__pathname;
  }

  get active() {
    return this.pathname === this.href;
  }

  get external() {
    return this.href?.includes('//');
  }

  get tag(): 'a' | 'span' | 'button' {
    return this.href ? (this.active ? 'span' : 'a') : 'button';
  }

  get current(): 'page' | 'step' | undefined {
    return this.active
      ? 'page'
      : this.href && this.href !== '/' && this.pathname.startsWith(this.href)
        ? 'step'
        : undefined;
  }

  get props() {
    return {
      rel: this.active ? undefined : this.href && this.rel,
      role:
        this.active && !this.pointer ? 'none' : this.active || !this.href ? 'button' : this.role,
      href: this.active ? undefined : this.href,
      type: this.href ? undefined : 'button',
      target: this.active ? undefined : this.href && this.target,
      'aria-current': this.current,
      itemprop:
        this.active || this.external ? undefined : (this.itemprop ?? (this.href && 'relatedLink'))
    };
  }

  static props = function (item: Partial<NavItem>) {
    const { class: _0, base: _1, disallow: _2, handle: _3, links: _4, ...props } = item;
    return props;
  };

  static map = function (items?: Partial<NavItem>[], fully = false, base = '') {
    return items?.length
      ? items.reduce((map, item) => {
          if (!item.disallow || fully) {
            const href = `${item.base ?? base}${item.href ?? ''}`;
            item.href && map.push(href);
            item.links && map.push(...Nav.map(item.links, fully, href));
          }
          return map;
        }, Array(0))
      : [];
  };
}

export default Nav;
