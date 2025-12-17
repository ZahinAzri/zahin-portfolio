import React from 'react';

export function Portfolio() {
    // Note: Image paths need to be updated to /images/... if we moved assets.
    // Assuming we moved `_legacy/assets` to `public/assets` or better `public/images`.
    // Actually, I moved the whole `assets` folder to `_legacy`. I should copy it back to `public`.

    return (
        <section id="portfolio" data-scroll-section className="py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold">My Portfolio</h2>
                <p className="mt-4 text-lg text-gray-400">My design journey so far</p>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Project Card 1 */}
                    <a href="#"
                        className="project-card block bg-[#121722] rounded-[15px] text-left transition-all duration-300 md:hover:scale-105 md:hover:shadow-[0_25px_60px_-15px_rgba(213,90,33,0.3)] p-4">
                        <div className="bg-zinc-900 rounded-[10px] overflow-hidden mb-6">
                            {/* Optimistically pointing to where I will put images */}
                            <img src="/assets/projects/pcari-booking.png" alt="Pcari Booking Mockup"
                                className="w-full h-auto" />
                        </div>
                        <h3 className="text-2xl font-medium px-2">Pcari Booking</h3>
                        <p className="mt-2 text-gray-400 font-light px-2">Manage Pcari bookings for a merchant, which
                            includes the main page and the merchant's dashboard.</p>
                        <span className="mt-4 inline-block text-[#D55A21] px-2">View Details &rarr;</span>
                    </a>
                    {/* Project Card 2 */}
                    <a href="#"
                        className="project-card block bg-[#121722] rounded-[15px] text-left transition-all duration-300 md:hover:scale-105 md:hover:shadow-[0_25px_60px_-15px_rgba(213,90,33,0.3)] p-4">
                        <div className="bg-zinc-900 rounded-[10px] overflow-hidden mb-6">
                            <img src="/assets/projects/kad-pekerja-madani.png" alt="Card Project Mockup"
                                className="w-full h-auto" />
                        </div>
                        <h3 className="text-2xl font-medium px-2">Kad Pekerja Madani</h3>
                        <p className="mt-2 text-gray-400 font-light px-2">Redesign the website for Kad Pekerja Madani,
                            along with a new design for the mobile application
                        </p>
                        <span className="mt-4 inline-block text-[#D55A21] px-2">View Details &rarr;</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
