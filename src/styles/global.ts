import { globalCss } from '../stitches.config';

export const applyRoughAnnotationStyles = globalCss({
  '.rough-annotation': {
    zIndex: -1,
  },
});

export const applyShikiStyles = globalCss({
  '.shiki': {
    position: 'relative',

    '&::after': {
      content: ' ',
      zIndex: -1,
      height: '100%',
      width: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      background: 'currentColor',
    },
  },
});

export const applyGlobalStyles = globalCss({
  body: {
    fontFamily: '$sansSerif',

    backgroundColor: '$bg',
    color: '$fg',

    margin: 0,
  },
});
