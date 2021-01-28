import { useEffect, useRef } from 'react';

export function useCompDidUpdate(
  effect: () => void,
  dependencies: ReadonlyArray<number | string | boolean>
): void {
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    effect();
  }, [dependencies]);
}
