"use client";

import React, { useRef, useEffect } from 'react';
import { Linkedin } from 'lucide-react';
import { ParticleText } from '@/components/ui/ParticleText';

export function Hero() {
    return (
        <section id="home" data-scroll-section
            className="relative min-h-screen hero-gradient flex flex-col justify-center items-center overflow-hidden">

            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center">
                <h1 className="font-bold text-6xl md:text-8xl leading-tight mb-4">
                    Hi, I'm <span className="text-[#D55A21]">Zahin Azri</span>
                </h1>
                <div className="w-full max-w-4xl h-[120px] mb-8">
                    <ParticleText text="UI/UX Designer" fontSize={120} className="w-full h-full" />
                </div>

                <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-12">
                    I specialise in user-centred design, transforming complex problems into elegant, intuitive solutions. Currently crafting digital experiences that bridge business goals with user needs
                </p>

                <div>
                    <button
                        onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-[#D55A21] hover:bg-[#D55A21]/90 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 text-lg shadow-[0_10px_30px_-10px_rgba(213,90,33,0.5)]"
                    >
                        View Portfolio
                    </button>
                </div>
            </div>

            <div className="absolute bottom-12 left-12 z-20">
                <a href="https://www.linkedin.com/in/muhamad-zahin-azri-nazri-28ab5a1a3/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                    <Linkedin className="w-6 h-6" />
                </a>
            </div>
        </section>
    );
}
