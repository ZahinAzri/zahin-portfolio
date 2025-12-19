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
                            <button onClick={onClose} className="hover:text-white transition-colors cursor-pointer">Portfolio</button>
                            <span className="text-white/50">/</span>
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
                            src="/images/pcari booking.jpg"
                            alt="Pcari Booking"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-50"></div>
                    </div>

                    {/* Project Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-white/10 border-b mb-24">
                        <div>
                            <h3 className="text-gray-500 text-xm font-medium mb-2">My Role</h3>
                            <p className="text-white text-lg font-medium">Intern UI/UX Designer</p>
                        </div>
                        <div>
                            <h3 className="text-gray-500 text-xm font-medium mb-2">Timeline</h3>
                            <p className="text-white text-lg font-medium">12 Weeks</p>
                        </div>
                        <div>
                            <h3 className="text-gray-500 text-xm font-medium mb-2">Tools</h3>
                            <div className="flex items-center gap-2">
                                {/* Figma Icon placeholder */}
                                <svg className="w-5 h-5" viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_project_showcase_figma)">
                                        <path
                                            d="M5.33724 32.0007C8.28124 32.0007 10.6706 29.6113 10.6706 26.6673V21.334H5.33724C2.39324 21.334 0.00390625 23.7233 0.00390625 26.6673C0.00390625 29.6113 2.39324 32.0007 5.33724 32.0007Z"
                                            fill="#0ACF83" />
                                        <path
                                            d="M0.00390625 15.9993C0.00390625 13.0553 2.39324 10.666 5.33724 10.666H10.6706V21.3327H5.33724C2.39324 21.3327 0.00390625 18.9433 0.00390625 15.9993Z"
                                            fill="#A259FF" />
                                        <path
                                            d="M0.00390625 5.33333C0.00390625 2.38933 2.39324 0 5.33724 0H10.6706V10.6667H5.33724C2.39324 10.6667 0.00390625 8.27733 0.00390625 5.33333Z"
                                            fill="#F24E1E" />
                                        <path
                                            d="M10.6719 0H16.0052C18.9492 0 21.3385 2.38933 21.3385 5.33333C21.3385 8.27733 18.9492 10.6667 16.0052 10.6667H10.6719V0Z"
                                            fill="#FF7262" />
                                        <path
                                            d="M21.3385 15.9993C21.3385 18.9433 18.9492 21.3327 16.0052 21.3327C13.0612 21.3327 10.6719 18.9433 10.6719 15.9993C10.6719 13.0553 13.0612 10.666 16.0052 10.666C18.9492 10.666 21.3385 13.0553 21.3385 15.9993Z"
                                            fill="#1ABCFE" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_project_showcase_figma">
                                            <rect width="21.34" height="32" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="text-white text-lg font-medium">Figma</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-gray-500 text-xm font-medium mb-2">Team</h3>
                            <p className="text-white text-lg font-medium">3 Designers, 5 Devs</p>
                        </div>
                    </div>

                    {/* The Challenge */}
                    <div className="mb-32">
                        <div className="flex flex-col md:flex-row gap-12">
                            <h2 className="text-[#D55A21] text-4xl font-bold w-full md:w-1/4">The Challenge</h2>
                            <div className="w-full md:w-3/4 space-y-6 text-gray-400 text-lg leading-relaxed">
                                <p className="text-white">
                                    The existing ecosystem was fragmented. Merchants struggled to manage their reservations and booking flow efficiently, often relying on manual tracking. On the user side, users had a high error rate when locating pending reviews after visiting the mall.
                                </p>
                                <p className="text-white">
                                    <b>The Goal:</b> Design a unified mobile app architecture that seamlessly connects the Merchant Dashboard (Tablet/Web) ecosystem with the User Journey (booking, dining & finding).
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Wireframes Section */}
                    <div className="mb-16">
                        <h3 className="text-center text-sm text-white uppercase tracking-widest mb-12">Wireframes & High Fidelity Prototypes</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {/* Placeholders for wireframes */}
                            <div className="aspect-[1] bg-[#212529] rounded-xl overflow-hidden">
                                <img
                                    src="/images/Merchant Onboarding.jpg"
                                    alt="Merchant Onboarding"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="aspect-[1] bg-[#212529] rounded-xl overflow-hidden">
                                <img
                                    src="/images/Merchant Menu Management.jpg"
                                    alt="Merchant Menu Management"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="aspect-[1] bg-[#212529] rounded-xl overflow-hidden">
                                <img
                                    src="/images/Merchant Promotion Management.jpg"
                                    alt="Merchant Promotion Management"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="aspect-[1] bg-[#212529] rounded-xl overflow-hidden">
                                <img
                                    src="/images/Merchant & Customer Interaction.jpg"
                                    alt="Merchant Customer Interaction"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-center text-m text-white">
                            <p>Merchant Onboarding</p>
                            <p>Merchant Menu Management</p>
                            <p>Merchant Promotion Management</p>
                            <p>Merchant & Customer Interaction</p>
                        </div>
                    </div>

                    <div className="border-t border-white/10 w-full mb-16"></div>

                    {/* The Solution */}
                    <div className="mb-24">
                        <div className="flex flex-col md:flex-row gap-12">
                            <h2 className="text-[#D55A21] text-4xl font-bold w-full md:w-1/4">The Solution</h2>
                            <div className="w-full md:w-3/4 text-white text-lg leading-relaxed">
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
                            <p className="text-center text-sm text-white mb-8 uppercase tracking-widest">System Design</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {/* Placeholders for High Fi Screens */}
                                <div className="aspect-[9/19] overflow-hidden">
                                    {/* <img src="..." className="w-full h-full object-cover" /> */}<img
                                        src="/images/Booking Homepage.png"
                                        alt="Booking Homepage"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="aspect-[9/19] overflow-hidden">
                                    {/* <img src="..." className="w-full h-full object-cover" /> */}<img
                                        src="/images/Order Process - Menus.png"
                                        alt="Order Process Menu"
                                        className="w-full h-full object-contain"
                                    />
                                </div><
                                    div className="aspect-[9/19] overflow-hidden">
                                    {/* <img src="..." className="w-full h-full object-cover" /> */}<img
                                        src="/images/Order Process - Menu Options.png"
                                        alt="Booking Homepage"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="aspect-[9/19] overflow-hidden">
                                    {/* <img src="..." className="w-full h-full object-cover" /> */}<img
                                        src="/images/Order Process - Service Selection.png"
                                        alt="Booking Homepage"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-center text-xm text-gray-400">
                                <p>Booking Homepage</p>
                                <p>Order Process Menu</p>
                                <p>Order Process Menu Options</p>
                                <p>Order Process Service Selection</p>
                            </div>
                        </div>
                    </div>

                    {/* Merchant POV */}
                    <div className="border border-[#D55A21] rounded-3xl p-8 md:p-12 mb-12 bg-[#D55A21]/5">
                        <h3 className="text-xl font-bold text-white mb-2">Merchant POV</h3>
                        <p className="text-gray-400 mb-12">
                            Designed a comprehensive Dashboard allowing merchants to customize their Restaurant Menu, Promotions, and track Delivery Statuses without clutter.
                        </p>

                        <div className="bg-[#1C1C1E] rounded-2xl p-8 border border-white/5">
                            <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-widest">System Design</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {/* Placeholders for High Fi Screens */}
                                <div className="aspect-[9/19] overflow-hidden">
                                    {/* <img src="..." className="w-full h-full object-cover" /> */}<img
                                        src="/images/Merchant Dashboard.png"
                                        alt="Booking Homepage"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="aspect-[9/19] overflow-hidden">
                                    {/* <img src="..." className="w-full h-full object-cover" /> */}<img
                                        src="/images/Dine In Order.png"
                                        alt="Order Process Menu"
                                        className="w-full h-full object-contain"
                                    />
                                </div><
                                    div className="aspect-[9/19] overflow-hidden">
                                    {/* <img src="..." className="w-full h-full object-cover" /> */}<img
                                        src="/images/Pickup Order.png"
                                        alt="Booking Homepage"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="aspect-[9/19] overflow-hidden">
                                    {/* <img src="..." className="w-full h-full object-cover" /> */}<img
                                        src="/images/Pickup Ongoing.png"
                                        alt="Booking Homepage"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-center text-xm text-gray-400">
                                <p>Merchant Dashboard</p>
                                <p>Dine In New Order</p>
                                <p>Pickup New Order</p>
                                <p>Pickup Ongoing Order</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div >
    );
}
