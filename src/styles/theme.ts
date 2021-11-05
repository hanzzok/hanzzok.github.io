import { createTheme } from '../stitches.config';

export const LightTheme = createTheme('light-theme', {
  colors: {
    bg: '$gray-100',
    fg: '$gray-900',
    fgLight: '$gray-500',

    highlight: '$orange-600-a50',
  },
});

export const DarkTheme = createTheme('dark-theme', {
  colors: {
    bg: '$gray-800',
    fg: '$gray-300',
    fgLight: '$gray-500',

    highlight: '$orange-600-a50',
  },
});
