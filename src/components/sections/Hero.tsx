"use client";

import React, { useRef, useEffect } from 'react';
import { StarTrail } from './StarTrail';

export function Hero() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const text = textRef.current;

        if (!wrapper || !text) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = wrapper.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            text.style.setProperty('--x', `${(x / rect.width) * 100}%`);
            text.style.setProperty('--y', `${(y / rect.height) * 100}%`);
        };

        const handleMouseEnter = () => text.style.setProperty('--light-opacity', '1');
        const handleMouseLeave = () => text.style.setProperty('--light-opacity', '0.1');

        wrapper.addEventListener('mousemove', handleMouseMove);
        wrapper.addEventListener('mouseenter', handleMouseEnter);
        wrapper.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            wrapper.removeEventListener('mousemove', handleMouseMove);
            wrapper.removeEventListener('mouseenter', handleMouseEnter);
            wrapper.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <section id="home" data-scroll-section
            className="relative min-h-screen hero-gradient flex flex-col justify-center overflow-hidden">

            <StarTrail />

            <div className="px-8 md:px-[100px] relative z-10">
                <div className="text-center md:text-left pb-24">
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                        {['UI/UX Designer', 'Creative Designer', 'Prototyping'].map((tag) => (
                            <span key={tag}
                                className="border-2 border-[#D55A21] bg-[#D55A21]/[0.3] text-[#D55A21] text-sm md:text-base rounded-full px-[25px] py-[5px] font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-bold text-5xl md:text-7xl leading-tight max-w-4xl">
                        Hi, I'm <span className="text-[#D55A21]">Zahin Azri</span> <br />
                        <div ref={wrapperRef} className="relative hidden md:inline-block flashlight-wrapper">
                            <span ref={textRef} className="flashlight">UI/UX Designer</span>
                        </div>
                        <span className="inline md:hidden">UI/UX Designer</span>
                    </h1>
                    <p className="mt-6 text-xl md:text-2xl text-gray-300 font-light">
                        I specialize in user-centered design, transforming complex problems into elegant, intuitive
                        solutions. Currently crafting digital experiences that bridge business goals with user
                        needs.
                    </p>
                </div>
            </div>
            <div className="absolute bottom-[72px] left-1/2 -translate-x-1/2 z-10">
                <div className="scroll-indicator">
                    <div className="scroll-dot"></div>
                </div>
            </div>
        </section>
    );
}
