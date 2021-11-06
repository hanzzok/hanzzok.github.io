import { useEffect, useState } from 'react';

export const ColorScheme = Object.freeze({
  Dark: 'dark',
  Light: 'light',
} as const);
export type ColorScheme = typeof ColorScheme[keyof typeof ColorScheme];

function query(scheme: ColorScheme): MediaQueryList | null {
  return typeof window !== 'undefined'
    ? window.matchMedia(`(prefers-color-scheme: ${scheme})`)
    : null;
}

export function usePreferredColorScheme(): ColorScheme | null {
  const [currentColorScheme, setCurrentColorScheme] =
    useState<ColorScheme | null>(() => {
      for (const scheme of Object.values(ColorScheme)) {
        if (query(scheme)?.matches) {
          return scheme;
        }
      }

      return null;
    });

  useEffect(() => {
    const cleanupFunctionList: Array<() => void> = [];

    for (const scheme of Object.values(ColorScheme)) {
      const update = (matches: boolean) => {
        if (matches) {
          setCurrentColorScheme(scheme);
        }
      };

      const mediaQueryList = query(scheme);

      if (!mediaQueryList) {
        continue;
      }

      const listener = (e: MediaQueryListEvent): void => update(e.matches);
      mediaQueryList.addEventListener('change', listener);
      update(mediaQueryList.matches);

      cleanupFunctionList.push(() =>
        mediaQueryList.removeEventListener('change', listener)
      );
    }

    return () => {
      for (const cleanup of cleanupFunctionList) {
        cleanup();
      }
    };
  }, []);

  return currentColorScheme;
}
