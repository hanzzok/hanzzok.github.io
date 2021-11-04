import { defaultTheme, th } from '@xstyled/system';
import deepmerge from 'deepmerge';

export const MyTheme = deepmerge(defaultTheme, {
  colors: {
    bg: th.color('gray-100'),

    fg: th.color('gray-900'),
    fgLight: th.color('gray-400'),

    highlight: th.color('amber-600-a50'),

    modes: {
      dark: {
        bg: th.color('gray-800'),

        fg: th.color('gray-300'),
        fgLight: th.color('gray-500'),
      },
    },
  },
});

export type MyTheme = typeof MyTheme;
