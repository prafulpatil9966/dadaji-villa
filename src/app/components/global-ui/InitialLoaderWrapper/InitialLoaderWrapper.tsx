// components/InitialLoaderWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import PreLoader from "../PreLoader/PreLoader";
import LoadingText from "../LoadingText/LoadingText";

export default function InitialLoaderWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // simulate 1.5s loading delay
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <LoadingText />;

    return <>{children}</>;
}
