import { globalCss } from '../stitches.config';

export const applyRoughAnnotationStyles = globalCss({
  '.rough-annotation': {
    zIndex: -1,
  },
});

export const applyGlobalStyles = globalCss({
  body: {
    fontFamily: '$sansSerif',

    backgroundColor: '$bg',
    color: '$fg',
  },
});
