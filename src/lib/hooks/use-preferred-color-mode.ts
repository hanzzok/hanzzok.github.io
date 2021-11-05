import { useEffect, useState } from 'react';

export const ColorScheme = Object.freeze({
  Dark: 'dark',
  Light: 'light',
} as const);
export type ColorScheme = typeof ColorScheme[keyof typeof ColorScheme];

export function usePreferredColorScheme(): ColorScheme | null {
  const [currentColorScheme, setCurrentColorScheme] =
    useState<ColorScheme | null>(null);

  useEffect(() => {
    const cleanupFunctionList: Array<() => void> = [];

    for (const mode of Object.values(ColorScheme)) {
      const update = (matches: boolean) => {
        if (matches) {
          setCurrentColorScheme(mode);
        }
      };

      const mediaQueryList = window.matchMedia(
        `(prefers-color-scheme: ${mode})`
      );

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
