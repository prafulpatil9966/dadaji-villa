// app/components/ClientLayout.tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
// import Loader from "./global-ui/Loader/Loader";
import LoadingText from "./global-ui/LoadingText/LoadingText";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 1000); // simulate loading time

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            {/* {loading && <Loader />} */}
            {loading && <LoadingText />}
            {children}
        </>
    );
}
