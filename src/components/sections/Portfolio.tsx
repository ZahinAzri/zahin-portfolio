"use client";

import React, { useRef, useState, useEffect } from 'react';
import { CursorSVG } from '@/components/ui/CursorSVG';

export function Portfolio() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    // Use a ref for direct DOM manipulation specifically for the separate cursor element if needed,
    // but state is fine for this unless performance issues arise.
    // For smoother performance, we can direct manipulate the DOM style.
    // Refs for smooth animation
    const cursorRef = useRef<HTMLDivElement>(null);
    const targetPos = useRef({ x: 0, y: 0 });
    const currentPos = useRef({ x: 0, y: 0 });
    const rafId = useRef<number | null>(null);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            // Update target position directly
            targetPos.current = { x: e.clientX, y: e.clientY };

            // If this is the very first movement or we just started hovering, snap to position
            // to avoid the cursor flying in from (0,0)
            if (!isHovering && cursorRef.current) {
                currentPos.current = { x: e.clientX, y: e.clientY };
            }
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [isHovering]);

    useEffect(() => {
        if (!isHovering) return;

        const animate = () => {
            // Linear Interpolation (Lerp)
            // current = current + (target - current) * factor
            const lerpFactor = 0.1; // Adjust for more/less delay (0.05 = slow, 0.2 = fast)

            currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerpFactor;
            currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerpFactor;

            if (cursorRef.current) {
                // Adjust position to center the 72x73 cursor (36px offset)
                cursorRef.current.style.transform = `translate(${currentPos.current.x - 36}px, ${currentPos.current.y - 36.5}px)`;
            }

            rafId.current = requestAnimationFrame(animate);
        };

        // Start the animation loop
        rafId.current = requestAnimationFrame(animate);

        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, [isHovering]);

    // Note: Image paths need to be updated to /images/... if we moved assets.
    // Assuming we moved `_legacy/assets` to `public/assets` or better `public/images`.
    // Actually, I moved the whole `assets` folder to `_legacy`. I should copy it back to `public`.

    return (
        <section id="portfolio" data-scroll-section className="py-24 sm:py-32 relative">
            {/* Custom Cursor */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-300"
                style={{ opacity: isHovering ? 1 : 0 }}
            >
                <CursorSVG className="animate-spin-slow w-[72px] h-[73px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold">My Portfolio</h2>
                <p className="mt-4 text-lg text-gray-400">My design journey so far</p>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Project Card 1 */}
                    <a href="#"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        className="project-card block bg-[#121722] rounded-[15px] text-left transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-white/5 md:hover:scale-105 md:hover:shadow-[0_25px_60px_-15px_rgba(213,90,33,0.3)] p-4 cursor-none">
                        <div className="bg-zinc-900 rounded-[10px] overflow-hidden mb-6 pointer-events-none">
                            {/* Optimistically pointing to where I will put images */}
                            <img src="/assets/projects/pcari-booking.png" alt="Pcari Booking Mockup"
                                className="w-full h-auto" />
                        </div>
                        <h3 className="text-2xl font-medium px-2">Pcari Booking</h3>
                        <p className="mt-2 text-gray-400 font-light px-2">Manage Pcari bookings for a merchant, which
                            includes the main page and the merchant's dashboard.</p>
                        <div className="mt-4 flex items-center justify-between px-2">
                            <span className="text-[#D55A21] font-medium">View Case Study &rarr;</span>
                            <div className="flex gap-3">
                                <span className="px-3 py-1 rounded-full text-xs font-medium border border-[#D55A21] text-[#D55A21] bg-[#D55A21]/10">
                                    Mobile App
                                </span>

                            </div>
                        </div>
                    </a>
                    {/* Project Card 2 */}
                    <a href="#"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        className="project-card block bg-[#121722] rounded-[15px] text-left transition-all duration-300 md:hover:scale-105 md:hover:shadow-[0_25px_60px_-15px_rgba(213,90,33,0.3)] p-4 cursor-none">
                        <div className="bg-zinc-900 rounded-[10px] overflow-hidden mb-6 pointer-events-none">
                            <img src="/assets/projects/kad-pekerja-madani.png" alt="Card Project Mockup"
                                className="w-full h-auto" />
                        </div>
                        <h3 className="text-2xl font-medium px-2">Kad Pekerja Madani</h3>
                        <p className="mt-2 text-gray-400 font-light px-2">Redesign the website for Kad Pekerja Madani,
                            along with a new design for the mobile application
                        </p>
                        <div className="mt-4 flex items-center justify-between px-2">
                            <span className="text-[#D55A21] font-medium">View Case Study &rarr;</span>
                            <div className="flex gap-3">
                                <span className="px-3 py-1 rounded-full text-xs font-medium border border-purple-500 text-purple-400 bg-purple-500/10">
                                    Web Design
                                </span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium border border-[#D55A21] text-[#D55A21] bg-[#D55A21]/10">
                                    Mobile App
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
