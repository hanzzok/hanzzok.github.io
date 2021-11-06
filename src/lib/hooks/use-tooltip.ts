import { useCallback } from 'react';
import { useBlobity } from './use-blobity';

export interface TooltipProps {
  'data-blobity-tooltip': string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function useTooltip(text: string): TooltipProps {
  const blobity = useBlobity();

  const onMouseEnter = useCallback(() => {
    if (blobity) {
      blobity.updateOptions({ zIndex: 1 });
    }
  }, [blobity]);

  const onMouseLeave = useCallback(() => {
    if (blobity) {
      blobity.updateOptions({ zIndex: -1 });
    }
  }, [blobity]);

  return {
    'data-blobity-tooltip': text,
    onMouseEnter,
    onMouseLeave,
  };
}
