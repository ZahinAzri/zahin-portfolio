"use client";

import React from 'react';

export function Orb() {
    return (
        <div className="hidden md:flex relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] z-0 flex-col items-center justify-center group cursor-pointer">
            <div className="relative w-full h-full animate-float">
                {/* Main Orb */}
                <div className="w-full h-full bg-gradient-to-br from-[#FF5500] to-[#E11D48] animate-morph transition-all duration-500 ease-in-out group-hover:drop-shadow-[0_0_30px_rgba(255,85,0,0.6)]"></div>

                {/* Secondary glass circle */}
                <div className="absolute top-0 right-[15%] w-[100px] h-[100px] bg-white/5 border border-white/20 rounded-full backdrop-blur-sm animate-pulse-core"></div>
            </div>

            {/* Float Shadow */}
            <div className="absolute -bottom-10 w-[200px] h-[40px] bg-black/20 blur-[30px] rounded-[100%] animate-float-shadow"></div>
        </div>
    );
}
