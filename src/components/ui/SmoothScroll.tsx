"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const scroll = new LocomotiveScroll({
                lenisOptions: {
                    lerp: 0.05, // Must be between 0 and 1. Lower = slower/smoother.
                    duration: 0.7, // Higher = longer/slower scroll.
                    wheelMultiplier: 1.5, // Reduces how much page moves per click.
                    smoothWheel: true,
                }
            });
        })();
    }, []);

    return null;
}
