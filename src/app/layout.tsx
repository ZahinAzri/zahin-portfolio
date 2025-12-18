import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/ui/SmoothScroll";

const dotSpot = localFont({
    src: "../../public/fonts/DotSpot-Regular.woff2",
    variable: "--font-dotspot",
});

export const metadata: Metadata = {
    title: "Zahin Azri - UI/UX Designer",
    description: "Portfolio of Zahin Azri",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <head>
                <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
                {/* Note: The user had this link, but 'Noxlock' might not be on Google Fonts. Keeping it to match legacy. */}
                <link href="https://fonts.googleapis.com/css2?family=Noxlock&family=Rubik+Dots&display=swap" rel="stylesheet" />
            </head>
            <body className={cn("bg-[#080808] text-white font-sans antialiased selection:bg-[#D55A21] selection:text-white", dotSpot.variable)}>
                <SmoothScroll />
                {children}
            </body>
        </html>
    );
}
