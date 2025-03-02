import plugin from 'tailwindcss/plugin.js';

export default plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      wrapper: (value, { modifier }) => {
        // if there are both value and modifier
        // modifier will override value anyway
        // `wrapper-[header]/footer` will generate `grid-area: footer`
        if (modifier !== null) {
          value = modifier;
        }
        const css: Record<string, string | Record<string, string>> = {
          width: '100%',
          'margin-left': 'auto',
          'margin-right': 'auto',
          'padding-left': '2rem',
          'padding-right': '2rem'
        };
        if (value) {
          css['max-width'] = value;
          css[`@media (min-width: calc(${value} + 2rem))`] = {
            'padding-left': '0px',
            'padding-right': '0px'
          };
        }
        return css;
      }
    },
    {
      values: Object.assign(theme('wrapperMaxSize', {}), {
        DEFAULT: '',
        lg: '1024px',
        xl: '1280px'
      }),
      modifiers: 'any'
    }
  );
});
