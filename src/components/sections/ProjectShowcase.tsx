"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface ProjectShowcaseProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectShowcase({ isOpen, onClose }: ProjectShowcaseProps) {

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
            initial={{ y: '100%' }}
            animate={{ y: isOpen ? '0%' : '100%' }}
            exit={{ y: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-[#0A0A0A] overflow-y-auto overscroll-contain"
            data-lenis-prevent
        >
            {/* Floating Nav Header */}
            <div className="fixed top-8 left-0 right-0 flex justify-center z-50 pointer-events-none">
                <div className="bg-[#1C1C1E] rounded-full px-2 py-2 flex items-center shadow-lg pointer-events-auto border border-white/5">
                    <button
                        onClick={onClose}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#2C2C2E] hover:bg-[#3A3A3C] transition-colors text-white text-sm font-medium"
                    >
                        <ArrowLeft size={16} />
                        Back to Portfolio
                    </button>
                    <div className="px-6 py-3 text-white/50 text-sm font-medium">
                        Project Showcase
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="min-h-screen pb-32">
                {/* Hero Section */}
                <div className="relative pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
                    <div className="mb-12">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                            <span>Back to Portfolio</span>
                            <span>/</span>
                            <span>Project Showcase</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-6">
                            Pcari <span className="text-[#D55A21]">Booking</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
                            Collaborated with the UX/UI team to conduct detailed research on profit margin and expenses based on current market trends, creating data visualizations.
                        </p>
                    </div>

                    {/* Hero Image */}
                    <div className="relative aspect-video rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 mb-16">
                        {/* Placeholder for Hero Image - using the card image for now */}
                        <img
                            src="/assets/projects/pcari-booking.png"
                            alt="Pcari Booking Hero"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-50"></div>
                    </div>

                    {/* Project Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-white/10 border-b mb-24">
                        <div>
                            <h3 className="text-gray-500 text-sm font-medium mb-2">My Role</h3>
                            <p className="text-white text-lg font-medium">Intern UI/UX Designer</p>
                        </div>
                        <div>
                            <h3 className="text-gray-500 text-sm font-medium mb-2">Timeline</h3>
                            <p className="text-white text-lg font-medium">12 Weeks</p>
                        </div>
                        <div>
                            <h3 className="text-gray-500 text-sm font-medium mb-2">Tools</h3>
                            <div className="flex items-center gap-2">
                                {/* Figma Icon placeholder */}
                                <div className="w-5 h-5 bg-[#F24E1E] rounded-full"></div>
                                <p className="text-white text-lg font-medium">Figma</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-gray-500 text-sm font-medium mb-2">Team</h3>
                            <p className="text-white text-lg font-medium">3 Designers, 5 Devs</p>
                        </div>
                    </div>

                    {/* The Challenge */}
                    <div className="mb-32">
                        <div className="flex flex-col md:flex-row gap-12">
                            <h2 className="text-[#D55A21] text-2xl font-bold w-full md:w-1/4">The Challenge</h2>
                            <div className="w-full md:w-3/4 space-y-6 text-gray-400 text-lg leading-relaxed">
                                <p>
                                    The existing ecosystem was fragmented. Merchants struggled to manage their reservations and booking flow efficiently, often relying on manual tracking. On the user side, users had a high error rate when locating pending reviews after visiting the mall.
                                </p>
                                <p className="font-medium text-white">
                                    The Goal: Design a unified mobile app architecture that seamlessly connects the Merchant Dashboard (Tablet/Web) ecosystem with the User Journey (booking, dining & finding).
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Wireframes Section */}
                    <div className="mb-32">
                        <h3 className="text-center text-sm text-gray-500 uppercase tracking-widest mb-12">Wireframes & Low Fidelity Prototypes</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {/* Placeholders for wireframes */}
                            <div className="aspect-[9/16] bg-zinc-900 rounded-xl border border-white/5 p-4 flex items-center justify-center">
                                <span className="text-xs text-gray-600">Merchant Onboarding</span>
                            </div>
                            <div className="aspect-[9/16] bg-zinc-900 rounded-xl border border-white/5 p-4 flex items-center justify-center">
                                <span className="text-xs text-gray-600">Merchant Menu Mgmt</span>
                            </div>
                            <div className="aspect-[9/16] bg-zinc-900 rounded-xl border border-white/5 p-4 flex items-center justify-center">
                                <span className="text-xs text-gray-600">Promotion Mgmt</span>
                            </div>
                            <div className="aspect-[9/16] bg-zinc-900 rounded-xl border border-white/5 p-4 flex items-center justify-center">
                                <span className="text-xs text-gray-600">Customer Interaction</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-center text-sm text-gray-500">
                            <p>Merchant Onboarding</p>
                            <p>Merchant Menu Management</p>
                            <p>Merchant Promotion Management</p>
                            <p>Merchant & Customer Interaction</p>
                        </div>
                    </div>

                    {/* The Solution */}
                    <div className="mb-24">
                        <div className="flex flex-col md:flex-row gap-12">
                            <h2 className="text-[#D55A21] text-2xl font-bold w-full md:w-1/4">The Solution</h2>
                            <div className="w-full md:w-3/4 text-gray-400 text-lg leading-relaxed">
                                <p>
                                    We established a dual-app strategy to handle distinct user needs. A dedicated Merchant App for business control and a User App for seamless discovery and booking.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Buyer POV */}
                    <div className="border border-[#D55A21] rounded-3xl p-8 md:p-12 mb-12 bg-[#D55A21]/5">
                        <h3 className="text-xl font-bold text-white mb-2">Buyer POV</h3>
                        <p className="text-gray-400 mb-12">
                            Streamlined the end-user flow. Users can seamless browse "Featured" spots nearby, check availability, and book instantly.
                        </p>

                        <div className="bg-[#1C1C1E] rounded-2xl p-8 border border-white/5">
                            <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-widest">System Design</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {/* Placeholders for High Fi Screens */}
                                <div className="aspect-[9/19] bg-zinc-800 rounded-2xl border border-white/10 shadow-xl overflow-hidden">
                                    {/* <img src="..." className="w-full h-full object-cover" /> */}
                                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-600">Booking Homepage</div>
                                </div>
                                <div className="aspect-[9/19] bg-zinc-800 rounded-2xl border border-white/10 shadow-xl overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-600">Order Process: Menu</div>
                                </div>
                                <div className="aspect-[9/19] bg-zinc-800 rounded-2xl border border-white/10 shadow-xl overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-600">Order Process: Menu Options</div>
                                </div>
                                <div className="aspect-[9/19] bg-zinc-800 rounded-2xl border border-white/10 shadow-xl overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-600">Service Selection</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-center text-xs text-gray-400">
                                <p>Booking Homepage</p>
                                <p>Order Process Menu</p>
                                <p>Order Process Menu Options</p>
                                <p>Order Process Service Selection</p>
                            </div>
                        </div>
                    </div>

                    {/* Merchant POV */}
                    <div className="border border-white/10 rounded-3xl p-8 md:p-12 bg-black">
                        <h3 className="text-xl font-bold text-white mb-2">Merchant POV</h3>
                        <p className="text-gray-400 mb-12">
                            Designed a comprehensive Dashboard allowing merchants to customize their Restaurant Menu, Promotions, and track Delivery Statuses without clutter.
                        </p>

                        <div className="bg-[#1C1C1E] rounded-2xl p-8 border border-white/5">
                            <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-widest">System Design</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {/* Placeholders for High Fi Screens */}
                                <div className="aspect-[9/19] bg-zinc-800 rounded-2xl border border-white/10 shadow-xl overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-600">Merchant Dashboard</div>
                                </div>
                                <div className="aspect-[9/19] bg-zinc-800 rounded-2xl border border-white/10 shadow-xl overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-600">Mobile System + New Order</div>
                                </div>
                                <div className="aspect-[9/19] bg-zinc-800 rounded-2xl border border-white/10 shadow-xl overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-600">Mobile System + New Order</div>
                                </div>
                                <div className="aspect-[9/19] bg-zinc-800 rounded-2xl border border-white/10 shadow-xl overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-600">Pickup Order + Growing Order</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-center text-xs text-gray-400">
                                <p>Merchant Dashboard</p>
                                <p>Mobile System + New Order</p>
                                <p>Mobile System + New Order</p>
                                <p>Pickup Order + Growing Order</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}
