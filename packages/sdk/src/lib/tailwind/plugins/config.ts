import plugin from 'tailwindcss/plugin.js';

const r = (x: number, n = 4): number => {
  const f = Math.pow(10, n);
  return Math.round(x * f) / f;
};

const f = (x: number, d = 0.25) => [
  `${x}rem`,
  {
    lineHeight: r((x + d) / x)
  }
];

export default plugin(() => {}, {
  theme: {
    extend: {
      spacing: {
        inherit: 'inherit',
        unset: 'unset'
      },
      fontSize: {
        '3xs': f(0.5),
        '2xs': f(0.625),
        '1.5xl': f(1.375),
        '2.5xl': f(1.6875),
        '3.5xl': f(2),
        '4.5xl': f(2.5)
      },
      listStyleType: {
        circle: 'circle',
        square: 'square'
      },
      aspectRatio: {
        '3/4': '3 / 4',
        '4/3': '4 / 3',
        A4: '620 / 877',
        A4l: '877 / 620'
      },
      gradientColorStopPositions: {
        '150%': '150%'
      },
      backgroundImage: {
        loading: 'url(@daks.dev/svelte.sdk/icons/spinners/90-ring-bg.svg)',
        waiting: 'url(@daks.dev/svelte.sdk/icons/spinners/clock.svg)'
      }
    }
  }
});
