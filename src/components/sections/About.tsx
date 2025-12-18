"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Search, PenTool, LayoutTemplate } from "lucide-react";
import { Tools } from './Tools';


export function About() {
    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const textRef = React.useRef<HTMLSpanElement>(null);

    React.useEffect(() => {
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
        <section id="about" data-scroll-section className="py-24 sm:py-32 px-8 md:px-[100px]">
            <div className="max-w-3xl mx-auto text-center mb-24">
                <h2 className="text-4xl font-bold mb-4">About</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    I don't just design screens; I design systems. My background in Informatic Media allows me to
                    bridge the gap between creative vision and technical feasibility.
                </p>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* UX Research */}
                    <Card className="group bg-[#0F1219] border-white/5 hover:border-primary transition-all duration-300 text-left">
                        <CardContent className="p-6">
                            <div className="w-12 h-12 rounded-lg bg-gray-800/50 flex items-center justify-center mb-6 text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300">
                                <Search className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-200 group-hover:text-white transition-colors">UX Research</h3>
                            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                Deep diving into user personas, journey mapping, and empathy studies to ensure every
                                pixel serves a real human need.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Visual Design */}
                    <Card className="group bg-[#0F1219] border-white/5 hover:border-primary transition-all duration-300 text-left">
                        <CardContent className="p-6">
                            <div className="w-12 h-12 rounded-lg bg-gray-800/50 flex items-center justify-center mb-6 text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300">
                                <PenTool className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-200 group-hover:text-white transition-colors">Visual Design</h3>
                            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                Crafting clean, accessible, and modern interfaces that align with brand identity and
                                current design trends (Dark Mode specialist).
                            </p>
                        </CardContent>
                    </Card>

                    {/* Prototyping */}
                    <Card className="group bg-[#0F1219] border-white/5 hover:border-primary transition-all duration-300 text-left">
                        <CardContent className="p-6">
                            <div className="w-12 h-12 rounded-lg bg-gray-800/50 flex items-center justify-center mb-6 text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300">
                                <LayoutTemplate className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-200 group-hover:text-white transition-colors">Prototyping</h3>
                            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                Building high-fidelity interactive flows. I speak the language of developers (HTML/CSS)
                                to ensure smooth handoffs.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>


            {/* Software & Tools Section */}
            <Tools />

            {/* Journey Section */}
            <div className="mt-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold">My journey</h2>
                    <div ref={wrapperRef} className="relative inline-block flashlight-wrapper">
                        <span ref={textRef} className="flashlight text-4xl font-bold hidden md:inline-block">so far</span>
                        <span className="text-4xl font-bold inline-block md:hidden">so far</span>
                    </div>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute top-0 left-4 md:left-1/2 -translate-x-1/2 h-full w-0.5 timeline-line"></div>
                    {/* Timeline Items Wrapper */}
                    <div className="space-y-12">
                        {/* Item 1 */}
                        <div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
                            <div className="md:text-right md:pr-8"></div>
                            <div>
                                <h3 className="text-xl font-bold">UI/UX Designer</h3>
                                <p className="text-md text-gray-400">Junior Executive</p>
                                <p className="text-sm text-gray-500 mt-1">RF Interactive Laiyon - 2025</p>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
                            <div className="md:text-right md:pr-8">
                                <h3 className="text-xl font-bold">UI/UX Designer</h3>
                                <p className="text-md text-gray-400">Internship</p>
                                <p className="text-sm text-gray-500 mt-1">RF Interactive Laiyon - 2024</p>
                            </div>
                            <div></div>
                        </div>
                        {/* Item 3 */}
                        <div className="relative pl-12 md:grid md:grid-cols-2 md:gap-8">
                            <div></div>
                            <div>
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 -bottom-2 w-5 h-5 bg-white rounded-full"></div>
                                <h3 className="text-xl font-bold">Bachelor Degree Informatic Media</h3>
                                <p className="text-md text-gray-400">Student</p>
                                <p className="text-sm text-gray-500 mt-1">Unisza, Besut - 2021-2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
