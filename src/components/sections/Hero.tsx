"use client";

import React, { useRef, useEffect } from 'react';
import { Orb } from './Orb';
import { Linkedin } from 'lucide-react';

export function Hero() {
    const wrapperRef = useRef<HTMLSpanElement>(null);
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

            <div className="px-8 md:px-[100px] relative z-10 w-full min-h-screen flex items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
                    {/* Left Column: Text Content */}
                    <div className="text-left order-2 md:order-1 pb-24 md:pb-0">


                        <h1 className="font-bold text-5xl md:text-7xl leading-tight max-w-4xl">
                            Hi, I'm <span className="text-[#D55A21]">Zahin Azri</span> <br />
                            <span ref={wrapperRef} className="relative hidden md:inline-block flashlight-wrapper">
                                <span ref={textRef} className="flashlight">UI/UX Designer</span>
                            </span>
                            <span className="inline md:hidden">UI/UX Designer</span>
                        </h1>
                        <p className="mt-6 text-xl md:text-2xl text-gray-300 font-light">
                            I specialize in user-centered design, transforming complex problems into elegant, intuitive
                            solutions. Currently crafting digital experiences that bridge business goals with user
                            needs.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4 justify-start">
                            <button
                                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 md:text-lg"
                            >
                                View Portfolio
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Orb */}
                    <div className="flex justify-center items-center order-1 md:order-2 h-[400px] md:h-auto">
                        <Orb />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-8 md:left-[100px] z-20 flex gap-6">
                <a href="https://www.linkedin.com/in/muhamad-zahin-azri-nazri-28ab5a1a3/" className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="w-6 h-6" />

                </a>
            </div>

            <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4">
                <span className="text-gray-400 text-[10px] tracking-[0.2em] font-medium uppercase opacity-80" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
                <div className="w-[1px] h-[60px] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-line"></div>
                </div>
            </div>
        </section>
    );
}
