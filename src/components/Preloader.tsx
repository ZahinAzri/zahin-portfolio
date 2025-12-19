"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
    onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
    const paths = [
        // Z
        "M25 20 L40 20",
        "M75 25 L25 75",
        "M60 80 L75 80",
        // A
        "M95 80 L115 45",
        "M125 20 L145 80"
    ];

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden';

        // Timer to signal completion - match the animation duration
        // 5 paths * 0.5s = 2.5s + 0.5s delay = 3.0s
        const timer = setTimeout(() => {
            onComplete();
            document.body.style.overflow = 'unset';
        }, 3000);

        return () => {
            document.body.style.overflow = 'unset';
            clearTimeout(timer);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-[#080808] z-[100] flex items-center justify-center"
        >
            <svg className="w-24 h-24" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                {paths.map((d, index) => (
                    <motion.path
                        key={index}
                        d={d}
                        stroke="white"
                        strokeWidth="15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                            pathLength: { type: "tween", duration: 0.5, ease: "easeInOut", delay: index * 0.5 },
                            opacity: { duration: 0.01, ease: "linear", delay: index * 0.5 }
                        }}
                    />
                ))}
            </svg>
        </motion.div>
    );
}
