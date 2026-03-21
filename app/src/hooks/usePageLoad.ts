import { useEffect, useState } from 'react';

export function usePageLoad(delay: number = 100) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowOverlay(false);
      setIsLoaded(true);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [delay]);

  return { isLoaded, showOverlay };
}
