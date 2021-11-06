import { globalCss } from '../stitches.config';

export const applyRoughAnnotationStyles = globalCss({
  '.rough-annotation': {
    zIndex: -1,
  },
});

export const applyGlobalStyles = globalCss({
  body: {
    backgroundColor: '$bg',
    fontFamily: '$sansSerif',
  },
});
