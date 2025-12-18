"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add form submission logic here
        console.log("Form submitted");
    };

    return (
        <section id="contact" data-scroll-section className="py-32 sm:py-48 relative overflow-hidden px-4">
            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                <h1 className="font-dotspot text-[20vw] lg:text-[15vw] text-gray-500/100 whitespace-nowrap opacity-10">CONTACT ME</h1>
            </div>
            {/* Form */}
            <div className="relative z-10 max-w-xl mx-auto">
                <form onSubmit={handleSubmit} className="glassy p-8 md:p-12 rounded-3xl">
                    <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                            <Input type="text" id="name" name="name" className="mt-1 bg-gray-800/50 border-gray-700 text-white" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                            <Input type="email" id="email" name="email" className="mt-1 bg-gray-800/50 border-gray-700 text-white" />
                        </div>
                        <div>
                            <label htmlFor="description" className="text-sm font-medium text-gray-300">Description</label>
                            <Textarea id="description" name="description" rows={4} className="mt-1 bg-gray-800/50 border-gray-700 text-white" />
                        </div>
                        <div className="text-center">
                            <Button type="submit" className="bg-white text-black font-bold py-6 px-8 rounded-full hover:bg-gray-200">
                                Submit
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
