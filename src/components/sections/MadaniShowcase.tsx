"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { ImageCard } from '@/components/ui/image-card';

interface MadaniShowcaseProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MadaniShowcase({ isOpen, onClose }: MadaniShowcaseProps) {
    const [selectedDesignIndex, setSelectedDesignIndex] = useState<number | null>(null);

    const galleryImages = [
        { title: "System Components", src: "/assets/images/Kad_Pekerja_Madani/system_components.png" },
        { title: "Prototyping Mobile Application", src: "/assets/images/Kad_Pekerja_Madani/prototyping_mobile_application.png" },
        { title: "Prototyping Web System", src: "/assets/images/Kad_Pekerja_Madani/prototyping_web_system.png" }
    ];

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <motion.div
            layoutId="madani-card"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed inset-0 z-[100] bg-[#0A0A0A] rounded-none overflow-y-auto overscroll-contain text-white font-sans"
            data-lenis-prevent
        >
            {/* Floating Nav Header */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="fixed top-8 left-0 right-0 flex justify-center z-50 pointer-events-none"
            >
                <div className="bg-[#1C1C1E] rounded-full px-2 py-2 flex items-center shadow-lg pointer-events-auto border border-white/5">
                    <button
                        onClick={onClose}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#2C2C2E] hover:bg-[#3A3A3C] transition-colors text-white text-sm font-normal"
                    >
                        <ArrowLeft size={16} />
                        Back to Portfolio
                    </button>
                    <div className="px-6 py-3 text-[#8e8e8f] text-[13px] font-normal">
                        Project Showcase
                    </div>
                </div>
            </motion.div>

            {/* Content Container */}
            <div className="min-h-screen pb-32 relative z-10">
                {/* Hero Section */}
                <div className="relative pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
                    {/* Hero Text */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-4 text-[12px] text-[#676e7e] mb-6 font-normal">
                            <button onClick={onClose} className="hover:text-white transition-colors cursor-pointer">Portfolio</button>
                            <span className="text-[#676e7e]">/</span>
                            <span>Project Showcase</span>
                        </div>
                        <h1 className="text-5xl md:text-[70px] font-bold bg-gradient-to-r from-[#b5d3e9] to-[#cc9d96] bg-clip-text text-transparent mb-6 tracking-tight leading-tight">
                            Kad Pekerja Madani
                        </h1>
                        <p className="text-xl md:text-[24px] text-[#99a1af] max-w-3xl leading-relaxed font-normal">
                            A comprehensive redesign of a national digital discount card for union. I led the UI/UX strategy for the web portal and mobile application, focusing on simplifying repetitive, complex verification workflows and modernizing the overall user experience.
                        </p>
                    </motion.div>

                    {/* Hero Image (ALWAYS VISIBLE for Morph) */}
                    <motion.div 
                        layoutId="madani-image"
                        className="relative aspect-video rounded-[35px] overflow-hidden bg-[#1A1A1A] border border-white/5 mb-16"
                    >
                        <motion.img
                            src="/assets/images/Kad_Pekerja_Madani/Hero.png"
                            alt="Kad Pekerja Madani Hero"
                            className="w-full h-full object-cover"
                            initial={{ scale: 1.15, y: 30 }}
                            animate={{ scale: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.05 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-50"></div>
                    </motion.div>

                    {/* Rest of Content (Staggered Fade) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Project Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-white/10 border-b mb-24">
                        <div>
                            <h3 className="text-[#a8a8a8] text-[16px] font-normal mb-2">My role</h3>
                            <p className="text-white text-[16px] font-bold">UI/UX Designer</p>
                        </div>
                        <div>
                            <h3 className="text-[#a8a8a8] text-[16px] font-normal mb-2">Timeline</h3>
                            <p className="text-white text-[16px] font-bold">4 Weeks</p>
                        </div>
                        <div>
                            <h3 className="text-[#a8a8a8] text-[16px] font-normal mb-2">Tools</h3>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.33724 32.0007C8.28124 32.0007 10.6706 29.6113 10.6706 26.6673V21.334H5.33724C2.39324 21.334 0.00390625 23.7233 0.00390625 26.6673C0.00390625 29.6113 2.39324 32.0007 5.33724 32.0007Z" fill="#0ACF83" />
                                    <path d="M0.00390625 15.9993C0.00390625 13.0553 2.39324 10.666 5.33724 10.666H10.6706V21.3327H5.33724C2.39324 21.3327 0.00390625 18.9433 0.00390625 15.9993Z" fill="#A259FF" />
                                    <path d="M0.00390625 5.33333C0.00390625 2.38933 2.39324 0 5.33724 0H10.6706V10.6667H5.33724C2.39324 10.6667 0.00390625 8.27733 0.00390625 5.33333Z" fill="#F24E1E" />
                                    <path d="M10.6719 0H16.0052C18.9492 0 21.3385 2.38933 21.3385 5.33333C21.3385 8.27733 18.9492 10.6667 16.0052 10.6667H10.6719V0Z" fill="#FF7262" />
                                    <path d="M21.3385 15.9993C21.3385 18.9433 18.9492 21.3327 16.0052 21.3327C13.0612 21.3327 10.6719 18.9433 10.6719 15.9993C10.6719 13.0553 13.0612 10.666 16.0052 10.666C18.9492 10.666 21.3385 13.0553 21.3385 15.9993Z" fill="#1ABCFE" />
                                </svg>
                                <p className="text-white text-[16px] font-bold">Figma</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[#a8a8a8] text-[16px] font-normal mb-2">Team</h3>
                            <p className="text-white text-[16px] font-bold">2 Designers, 4 Devs</p>
                        </div>
                    </div>

                    {/* The Challenge */}
                    <div className="mb-32 p-8 md:p-16">
                        <div className="flex flex-col md:flex-row gap-12 justify-center">
                            <h2 className="text-[40px] font-bold bg-gradient-to-r from-[#b5d3e9] to-[#cc9d96] bg-clip-text text-transparent w-full md:w-auto leading-normal shrink-0">The Challenge</h2>
                            <div className="w-full md:w-[706px] space-y-12">
                                <div className="flex gap-4 group">
                                    <div className="flex items-baseline font-bold shrink-0 pt-1 text-[40px] leading-[43px]" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>
                                        <span className="bg-clip-text bg-gradient-to-r from-[rgba(181,211,233,0.45)] to-[rgba(204,157,150,0.45)] text-transparent leading-[43px]">0</span>
                                        <span className="bg-clip-text bg-gradient-to-r from-[#b5d3e9] to-[#cc9d96] text-transparent -ml-2 leading-[43px]">1</span>
                                    </div>
                                    <p className="text-[#e0e0e0] text-[24px] leading-relaxed">
                                        The entire project had to ship within four weeks with only 2 weeks windows for designing, leaving almost no room for back-and-forth, revisions, or the usual breathing space a design process needs.
                                    </p>
                                </div>
                                <div className="flex gap-4 group">
                                    <div className="flex items-baseline font-bold shrink-0 pt-1 text-[40px] leading-[43px]" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>
                                        <span className="bg-clip-text bg-gradient-to-r from-[rgba(181,211,233,0.45)] to-[rgba(204,157,150,0.45)] text-transparent leading-[43px]">0</span>
                                        <span className="bg-clip-text bg-gradient-to-r from-[#b5d3e9] to-[#cc9d96] text-transparent -ml-2 leading-[43px]">2</span>
                                    </div>
                                    <p className="text-[#e0e0e0] text-[24px] leading-relaxed">
                                        The existing platform relied on a legacy workflow that wasn't optimized for a digital-first experience, kaing essential tasks like registration and ID management feel slow and overly complex for the average user.
                                    </p>
                                </div>
                                <div className="flex gap-4 group">
                                    <div className="flex items-baseline font-bold shrink-0 pt-1 text-[40px] leading-[43px]" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>
                                        <span className="bg-clip-text bg-gradient-to-r from-[rgba(181,211,233,0.45)] to-[rgba(204,157,150,0.45)] text-transparent leading-[43px]">0</span>
                                        <span className="bg-clip-text bg-gradient-to-r from-[#b5d3e9] to-[#cc9d96] text-transparent -ml-2 leading-[43px]">3</span>
                                    </div>
                                    <p className="text-[#e0e0e0] text-[24px] leading-relaxed">
                                        The existing web interface suffered from poor data visualization, making it difficult for administrators to manage and digest complex dashboard statistic effectively.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* The Solution */}
                    <div className="mb-32 p-8 md:p-16">
                        <div className="flex flex-col md:flex-row gap-12 justify-center">
                            <h2 className="text-[40px] font-bold bg-gradient-to-r from-[#b5d3e9] to-[#cc9d96] bg-clip-text text-transparent w-full md:w-auto leading-normal shrink-0">The Solution</h2>
                            <div className="w-full md:w-[706px]">
                                <div className="flex gap-4 group">
                                    <div className="flex items-baseline font-bold shrink-0 pt-1 text-[40px] opacity-0 leading-[43px]" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>
                                        <span className="bg-clip-text bg-gradient-to-r from-[rgba(181,211,233,0.45)] to-[rgba(204,157,150,0.45)] text-transparent leading-[43px]">0</span>
                                        <span className="bg-clip-text bg-gradient-to-r from-[#b5d3e9] to-[#cc9d96] text-transparent -ml-2 leading-[43px]">1</span>
                                    </div>
                                    <div className="space-y-6 text-[#e0e0e0] text-[24px] leading-relaxed">
                                        <p>Rather than designing screen by screen, I built a modular design system in Figma reusable components and patterns that turned a 2-week sprint into something structured and repeatable.</p>
                                        <p>I rearchitected the user flow from the ground up to support a native mobile experience. By focusing on a "user-first" journey, I simplified the registration and ID verification processes, making them intuitive and fast for workers who need quick access on the go.</p>
                                        <p>I focused on modernizing the dashboard using design as a functional tool rather than just an aesthetic upgrade. By redesigning the dashboard for easier digestion, I introduced a clear visual hierarchy and modular layouts that allow administrators to navigate high-volume data and interpret complex statistics with greater clarity.</p>
                                        <p>Alongside all of this, a live developer handoff kept design and build running in parallel so nothing was waiting on anything.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </motion.div>
                </div>

                {/* Rest of Page (FADES IN) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                >
                {/* Visual System Section (Full Width) */}
                <div className="relative mb-32 py-24 overflow-hidden w-full">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="/assets/images/Kad_Pekerja_Madani/wireframe_BG.png" 
                            alt="Wireframe Background" 
                            className="w-full h-full object-cover opacity-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                        <p className="text-center text-[24px] font-normal text-[#b1b1b1] mb-16">System Components & Wireframe</p>
                        <div className="flex justify-center gap-[25px] flex-wrap">
                            {galleryImages.map((img, i) => (
                                <div key={i} className="group cursor-pointer w-[281px]" onClick={() => setSelectedDesignIndex(i)}>
                                    <div className="aspect-[1.14] bg-[#1A1A1A] rounded-2xl border border-white/5 overflow-hidden mb-4 group-hover:border-[#b5d3e9]/50 transition-colors">
                                        <img
                                            src={img.src}
                                            alt={img.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <p className="text-center text-[20px] text-white font-normal">{img.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    {/* Revamping Section */}
                    <div className="mb-32 flex flex-col items-center">
                        <h2 className="text-[40px] font-bold bg-gradient-to-r from-[#b5d3e9] to-[#cc9d96] bg-clip-text text-transparent mb-12">Revamping</h2>
                        <div className="space-y-16 w-full max-w-[1040px]">
                            {/* Admin Homepage */}
                            <div className="border border-[#383635] rounded-[25px] overflow-hidden bg-[#1a1a1a]">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <div className="p-[25px] border-r border-[#383635]">
                                        <div className="flex justify-between items-center mb-5">
                                            <h4 className="text-[20px] font-normal text-white">Admin Homepage</h4>
                                            <span className="px-[15px] py-[4px] rounded-full text-[16px] font-normal leading-[22px] bg-[#312726] text-[#605c56] border border-[#cc9d96]">Original</span>
                                        </div>
                                        <div className="aspect-[1.78] bg-[#111] rounded-lg border border-white/5 flex items-center justify-center text-white/5">Screenshot</div>
                                    </div>
                                    <div className="p-[25px]">
                                        <div className="flex justify-between items-center mb-5">
                                            <h4 className="text-[20px] font-normal text-white">Admin Homepage</h4>
                                            <span className="px-[15px] py-[4px] rounded-full text-[16px] font-bold leading-[22px] bg-[#413838] bg-clip-text text-transparent bg-gradient-to-r from-[#b5d3e9] to-[#cc9d96] border border-[#b5d3e9]">Revamped</span>
                                        </div>
                                        <div className="aspect-[1.28] bg-[#111] rounded-lg border border-white/5 flex items-center justify-center text-white/5">Screenshot</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#383635]">
                                    <div className="p-[25px] border-r border-[#383635] flex flex-col justify-center">
                                        <p className="text-[20px] text-white leading-[25px] mb-6">The original admin landing page suffered from "Empty Space Syndrome." While it used large charts, they provided very little actionable data. There was no way to track daily or monthly growth trends, and the layout forced administrators to jump between different pages to get a complete picture of the system's health</p>
                                        <div className="flex flex-wrap gap-[10px]">
                                            <span className="px-[18px] py-[8px] rounded-full text-[16px] font-bold leading-[22px] bg-[#211818] text-[#b23b3b] border border-[#b23b3b]">Oversized Data Visuals</span>
                                            <span className="px-[18px] py-[8px] rounded-full text-[16px] font-bold leading-[22px] bg-[#211818] text-[#b23b3b] border border-[#b23b3b]">Limited Metric Overview</span>
                                            <span className="px-[18px] py-[8px] rounded-full text-[16px] font-bold leading-[22px] bg-[#211818] text-[#b23b3b] border border-[#b23b3b]">Lack of Historical Context</span>
                                        </div>
                                    </div>
                                    <div className="p-[25px] flex flex-col justify-center">
                                        <p className="text-[20px] text-white leading-[25px] mb-6">Rebuilt with a modular information hierarchy to handle high-volume data streams. The new layout introduces layered analytics and system-wide health indicators that scale across different admin roles, providing a comprehensive snapshot of platform performance without the cognitive load of the previous design</p>
                                        <div className="flex flex-wrap gap-[10px]">
                                            <span className="px-[18px] py-[8px] rounded-full text-[16px] font-bold leading-[22px] bg-[#1a2118] text-[#3bb260] border border-[#3bb260]">Multi-Series Analytics</span>
                                            <span className="px-[18px] py-[8px] rounded-full text-[16px] font-bold leading-[22px] bg-[#1a2118] text-[#3bb260] border border-[#3bb260]">Comparative Growth Stats</span>
                                            <span className="px-[18px] py-[8px] rounded-full text-[16px] font-bold leading-[22px] bg-[#1a2118] text-[#3bb260] border border-[#3bb260]">Account Health Gauges</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Application Page */}
                            <div className="border border-[#383635] rounded-[25px] overflow-hidden bg-[#1a1a1a]">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <div className="p-[25px] border-r border-[#383635]">
                                        <div className="flex justify-between items-center mb-5">
                                            <h4 className="text-[20px] font-normal text-white">Application Page</h4>
                                            <span className="px-[15px] py-[4px] rounded-full text-[16px] font-normal leading-[22px] bg-[#312726] text-[#605c56] border border-[#cc9d96]">Original</span>
                                        </div>
                                        <div className="aspect-[1.78] bg-[#111] rounded-lg border border-white/5 flex items-center justify-center text-white/5">Screenshot</div>
                                    </div>
                                    <div className="p-[25px]">
                                        <div className="flex justify-between items-center mb-5">
                                            <h4 className="text-[20px] font-normal text-white">Application Page</h4>
                                            <span className="px-[15px] py-[4px] rounded-full text-[16px] font-bold leading-[22px] bg-[#413838] bg-clip-text text-transparent bg-gradient-to-r from-[#b5d3e9] to-[#cc9d96] border border-[#b5d3e9]">Revamped</span>
                                        </div>
                                        <div className="aspect-[1.28] bg-[#111] rounded-lg border border-white/5 flex items-center justify-center text-white/5">Screenshot</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#383635]">
                                    <div className="p-[25px] border-r border-[#383635] flex flex-col justify-center">
                                        <p className="text-[20px] text-white leading-[25px] mb-6">The original layout treated data as final output rather than a starting point. Summary metrics were static, forcing users to manually search or filter the table to find specific application statuses, leading to a fragmented workflow.</p>
                                        <div className="flex flex-wrap gap-[10px]">
                                            <span className="px-[18px] py-[8px] rounded-full text-[16px] font-bold leading-[22px] bg-[#211818] text-[#b23b3b] border border-[#b23b3b]">Static Data Display</span>
                                            <span className="px-[18px] py-[8px] rounded-full text-[16px] font-bold leading-[22px] bg-[#211818] text-[#b23b3b] border border-[#b23b3b]">Wasted White Space</span>
                                            <span className="px-[18px] py-[8px] rounded-full text-[16px] font-bold leading-[22px] bg-[#211818] text-[#b23b3b] border border-[#b23b3b]">Disconnected Context</span>
                                        </div>
                                    </div>
                                    <div className="p-[25px] flex flex-col justify-center">
                                        <p className="text-[20px] text-white leading-[25px] mb-6">The new architecture introduces a "Filter-by-Metric" system. The summary cards now double as global filters, allowing admins to instantly drill down into 'Pending' or 'Rejected' cases with a single click, reducing time-on-task by roughly 40%.</p>
                                        <div className="flex flex-wrap gap-[10px]">
                                            <span className="px-[18px] py-[8px] rounded-full text-[16px] font-bold leading-[22px] bg-[#1a2118] text-[#3bb260] border border-[#3bb260]">Interactive Status Filter</span>
                                            <span className="px-[18px] py-[8px] rounded-full text-[16px] font-bold leading-[22px] bg-[#1a2118] text-[#3bb260] border border-[#3bb260]">Compact Data Grid</span>
                                            <span className="px-[18px] py-[8px] rounded-full text-[16px] font-bold leading-[22px] bg-[#1a2118] text-[#3bb260] border border-[#3bb260]">Visual Trend Metrics</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* User Homepage */}
                            <div className="border border-[#383635] rounded-[25px] overflow-hidden bg-[#1a1a1a]">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <div className="p-[25px] border-r border-[#383635]">
                                        <div className="flex justify-between items-center mb-5">
                                            <h4 className="text-[20px] font-normal text-white">User's Homepage</h4>
                                            <span className="px-[15px] py-[4px] rounded-full text-[16px] font-normal leading-[22px] bg-[#312726] text-[#605c56] border border-[#cc9d96]">Original</span>
                                        </div>
                                        <div className="aspect-[1.78] bg-[#111] rounded-lg border border-white/5 flex items-center justify-center text-white/5">Screenshot</div>
                                    </div>
                                    <div className="p-[25px]">
                                        <div className="flex justify-between items-center mb-5">
                                            <h4 className="text-[20px] font-normal text-white">User's Homepage</h4>
                                            <span className="px-[15px] py-[4px] rounded-full text-[16px] font-bold leading-[22px] bg-[#413838] bg-clip-text text-transparent bg-gradient-to-r from-[#b5d3e9] to-[#cc9d96] border border-[#b5d3e9]">Revamped</span>
                                        </div>
                                        <div className="aspect-[1.28] bg-[#111] rounded-lg border border-white/5 flex items-center justify-center text-white/5">Screenshot</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#383635]">
                                    <div className="p-[25px] border-r border-[#383635] flex flex-col justify-center">
                                        <p className="text-[20px] text-white leading-[25px] mb-6">The original homepage was purely functional but lacked user engagement. The layout felt like a static directory rather than a lifestyle application, with a generic card display and a long, unorganized list of partners that made discovering benefits difficult for the user.</p>
                                        <div className="flex flex-wrap gap-[10px]">
                                            <span className="px-[18px] py-[8px] rounded-full text-[16px] font-bold leading-[22px] bg-[#211818] text-[#b23b3b] border border-[#b23b3b]">Plain Visual Identity</span>
                                            <span className="px-[18px] py-[8px] rounded-full text-[16px] font-bold leading-[22px] bg-[#211818] text-[#b23b3b] border border-[#b23b3b]">Linear List Fatigue</span>
                                            <span className="px-[18px] py-[8px] rounded-full text-[16px] font-bold leading-[22px] bg-[#211818] text-[#b23b3b] border border-[#b23b3b]">Underutilised White Space</span>
                                        </div>
                                    </div>
                                    <div className="p-[25px] flex flex-col justify-center">
                                        <p className="text-[20px] text-white leading-[25px] mb-6">The revamped interface transforms the homepage into a discovery-led portal. By introducing promotional banners and categorizing "Rakan Strategik" into intuitive groups, users can now easily find relevant discounts. The digital card also received a visual overhaul to feel more like a premium membership asset</p>
                                        <div className="flex flex-wrap gap-[10px]">
                                            <span className="px-[18px] py-[8px] rounded-full text-[16px] font-bold leading-[22px] bg-[#1a2118] text-[#3bb260] border border-[#3bb260]">Strategic Ad Placement</span>
                                            <span className="px-[18px] py-[8px] rounded-full text-[16px] font-bold leading-[22px] bg-[#1a2118] text-[#3bb260] border border-[#3bb260]">Elevated Brand Identity</span>
                                            <span className="px-[18px] py-[8px] rounded-full text-[16px] font-bold leading-[22px] bg-[#1a2118] text-[#3bb260] border border-[#3bb260]">Categorised Discovery</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile App Section */}
                    <div className="mb-32 flex flex-col items-center">
                        <h2 className="text-[40px] font-bold bg-gradient-to-r from-[#b5d3e9] to-[#cc9d96] bg-clip-text text-transparent mb-16 text-center">Designing Mobile Application</h2>
                        <div className="w-full max-w-[1040px] space-y-16">
                            {/* Light Mode Mobile Previews */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {["Login Page", "User Homepage", "Application List", "Setting Page"].map((title, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="flex items-center justify-between w-[235px] mb-5">
                                            <p className="text-[20px] font-normal text-white">{title}</p>
                                        </div>
                                        <div className="bg-[#413838] border border-[#b5d3e9] rounded-[444px] px-[15px] py-[10px] mb-5 w-[110px] flex justify-center">
                                            <p className="bg-clip-text bg-gradient-to-r from-[#b5d3e9] to-[#cc9d96] text-transparent text-[16px] font-bold">Light Mode</p>
                                        </div>
                                        <div className="w-[235px] h-[474px] bg-[#111] rounded-[40px] border-[8px] border-[#222] shadow-xl flex flex-col justify-center items-center">
                                            <p className="text-white/20 text-sm">App Screen</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Dark Mode Mobile Previews */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
                                {["Login Page", "User Homepage", "Application List", "Setting Page"].map((title, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="flex items-center justify-between w-[235px] mb-5">
                                            <p className="text-[20px] font-normal text-white">{title}</p>
                                        </div>
                                        <div className="bg-[#413838] border border-[#b5d3e9] rounded-[444px] px-[15px] py-[10px] mb-5 w-[110px] flex justify-center">
                                            <p className="bg-clip-text bg-gradient-to-r from-[#b5d3e9] to-[#cc9d96] text-transparent text-[16px] font-bold">Dark Mode</p>
                                        </div>
                                        <div className="w-[235px] h-[474px] bg-[#000] rounded-[40px] border-[8px] border-[#222] shadow-xl flex flex-col justify-center items-center">
                                            <p className="text-white/20 text-sm">App Screen</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        <AnimatePresence>
                {selectedDesignIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                        onClick={() => setSelectedDesignIndex(null)}
                    >
                        <div onClick={(e) => e.stopPropagation()}>
                            <ImageCard
                                onClose={() => setSelectedDesignIndex(null)}
                                title={galleryImages[selectedDesignIndex].title}
                                imageUrl={galleryImages[selectedDesignIndex].src}
                                onPrev={() => setSelectedDesignIndex(prev => prev === 0 ? galleryImages.length - 1 : (prev! - 1))}
                                onNext={() => setSelectedDesignIndex(prev => prev === galleryImages.length - 1 ? 0 : (prev! + 1))}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
