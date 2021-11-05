import type { CreateStitches } from '@stitches/react';
const createStitches: CreateStitches =
  require('@stitches/react').createStitches;
import OpenColor from 'open-color';

const Colors = [
  'gray',
  'red',
  'pink',
  'grape',
  'violet',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'green',
  'lime',
  'yellow',
  'orange',
] as const;

type ColorRanges = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const Alphas = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...(Object.fromEntries(
        Colors.flatMap((key) =>
          OpenColor[key].flatMap((color, index) => [
            [`${key}-${index}00`, color],
            ...Alphas.map(
              (alpha) =>
                [
                  `${key}-${index}00-a${alpha}0`,
                  color + Math.floor((0xff * alpha) / 10).toString(16),
                ] as const
            ),
          ])
        )
      ) as Record<
        | `${typeof Colors[number]}-${ColorRanges}00`
        | `${typeof Colors[number]}-${ColorRanges}00-a${typeof Alphas[number]}0`,
        string
      >),

      fg: '$gray-900',
    },
  },
});
