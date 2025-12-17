import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Tools } from '@/components/sections/Tools';
import { Portfolio } from '@/components/sections/Portfolio';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="flex flex-col min-h-screen">
                <Hero />
                <About />
                <Portfolio />
                <Contact />
            </main>
        </>
    );
}
