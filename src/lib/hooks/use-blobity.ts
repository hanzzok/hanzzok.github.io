import Blobity from 'blobity';
import { createContext, useContext } from 'react';

export const BlobityContext = createContext<Blobity | null>(null);

export function useBlobity(): Blobity | null {
  const blobity = useContext(BlobityContext);

  return blobity;
}
