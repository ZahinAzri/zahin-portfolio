"use client";

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './Preloader';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <Preloader onComplete={() => setIsLoading(false)} />
                )}
            </AnimatePresence>

            {/* 
              We render children fully but maybe hide them or let them sit behind.
              Legacy code had `opacity: 0` on content until loaded.
              Let's mimic that behavior to prevent visible layout shifts or partial paints.
            */}
            <div
                className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            >
                {children}
            </div>
        </>
    );
}
