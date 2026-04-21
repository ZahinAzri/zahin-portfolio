"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/app/actions/sendEmail";

export function Contact() {
    const [isPending, setIsPending] = useState(false);
    const [status, setStatus] = useState<{ success?: boolean; error?: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsPending(true);
        setStatus(null);

        const formData = new FormData(e.currentTarget);
        const result = await sendEmail(formData);

        if (result.success) {
            setStatus({ success: true });
            (e.target as HTMLFormElement).reset();
        } else {
            setStatus({ error: result.error });
        }
        setIsPending(false);
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
                    <div className="space-y-12">
                        <div className="relative group">
                            <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-white transition-colors">Name</label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Tun Abdul Razak"
                                className="mt-2 bg-transparent border-0 border-b border-white/20 rounded-none px-0 h-10 text-sm focus-visible:ring-0 focus-visible:border-white transition-all duration-500 placeholder:text-gray-700 placeholder:text-sm uppercase"
                            />
                        </div>
                        <div className="relative group">
                            <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-white transition-colors">Email</label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="HELLO@EXAMPLE.COM"
                                className="mt-2 bg-transparent border-0 border-b border-white/20 rounded-none px-0 h-10 text-sm focus-visible:ring-0 focus-visible:border-white transition-all duration-500 placeholder:text-gray-700 placeholder:text-sm uppercase"
                            />
                        </div>
                        <div className="relative group">
                            <label htmlFor="description" className="text-sm font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-white transition-colors">Description</label>
                            <Textarea
                                id="description"
                                name="description"
                                required
                                rows={1}
                                placeholder="TELL ME ABOUT YOUR PROJECT"
                                className="mt-2 bg-transparent border-0 border-b border-white/20 rounded-none px-0 min-h-[40px] text-sm focus-visible:ring-0 focus-visible:border-white transition-all duration-500 placeholder:text-gray-700 placeholder:text-sm uppercase resize-none overflow-hidden"
                            />
                        </div>
                        
                        {status?.success && (
                            <p className="text-green-500 text-center text-sm font-bold uppercase tracking-widest animate-pulse">Message Sent Successfully!</p>
                        )}
                        {status?.error && (
                            <p className="text-red-500 text-center text-sm font-bold uppercase tracking-widest">{status.error}</p>
                        )}

                        <div className="pt-4 text-center">
                            <Button 
                                type="submit" 
                                disabled={isPending}
                                className="bg-white text-black font-bold py-4 px-10 text-sm rounded-full hover:bg-primary hover:text-white hover:shadow-[0_0_30px_rgba(213,90,33,0.4)] transition-all duration-500 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isPending ? "Sending..." : "Send Message"}
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
