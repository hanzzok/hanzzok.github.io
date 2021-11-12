import { useCallback, useState } from 'react';

export function useRerender(): () => void {
  const [, setState] = useState(0);
  const rerender = useCallback(() => {
    setState((prev) => prev + 1);
  }, []);

  return rerender;
}
