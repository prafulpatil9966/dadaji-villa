import { useEffect, useState } from 'react';

export default function useDevicePlatform() {
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    if (typeof navigator === 'undefined') return;

    const userAgent = navigator.userAgent || (navigator as any).vendor || '';

    if (/iPad|iPhone|iPod/.test(userAgent)) {
      setIsIOS(true);
    } else if (/android/i.test(userAgent)) {
      setIsAndroid(true);
    }
  }, []);

  return { isIOS, isAndroid };
}
