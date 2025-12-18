"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const scroll = new LocomotiveScroll();
        })();
    }, []);

    return null;
}
