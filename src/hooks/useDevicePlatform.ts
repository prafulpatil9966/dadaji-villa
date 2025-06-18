import { useEffect, useState } from 'react';

export default function useDevicePlatform() {
    const [isIOS, setIsIOS] = useState(false);
    const [isAndroid, setIsAndroid] = useState(false);

    useEffect(() => {
        const userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            setIsIOS(true);
        } else if (/android/i.test(userAgent)) {
            setIsAndroid(true);
        }
    }, []);

    return { isIOS, isAndroid };
}
