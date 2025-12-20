"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const leftLinks = [
        { name: "O nas", href: "/#about" },
        { name: "Oferta", href: "/#offer" },
    ];

    const rightLinks = [
        { name: "Multimedia", href: "/multimedia" },
        { name: "Repertuar", href: "/repertoire" },
        { name: "Kontakt", href: "/#contact" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 pointer-events-none ${isScrolled ? "bg-black/90 backdrop-blur-md py-4" : "bg-transparent py-8"
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center">
                    {/* Mobile: 3-column layout for proper centering */}
                    {/* Left column - Menu button on mobile, links on desktop */}
                    <div className="flex-1 flex justify-start">
                        <button
                            className="md:hidden text-white z-50 pointer-events-auto"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                        <div className="hidden md:flex items-center space-x-12 pointer-events-auto">
                            {leftLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm uppercase tracking-[0.2em] text-white/80 hover:text-gold-500 transition-colors duration-300"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Center column - Logo (always centered) */}
                    <Link href="/" className="z-50 group flex flex-col items-center justify-center flex-shrink-0 pointer-events-auto">
                        <div className="relative font-serif text-5xl md:text-6xl text-gold-500 flex items-center justify-center h-16 w-16">
                            <span className="absolute transform translate-x-[-8px] group-hover:translate-x-[-12px] transition-transform duration-500">S</span>
                            <span className="absolute transform translate-x-[8px] group-hover:translate-x-[12px] transition-transform duration-500 z-10 text-white/90 mix-blend-overlay">Q</span>
                        </div>
                        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-white/60 mt-1 hidden md:block group-hover:text-gold-500 transition-colors">Sforza Quartet</span>
                    </Link>

                    {/* Right column - Links on desktop, empty space on mobile for balance */}
                    <div className="flex-1 flex justify-end">
                        <div className="hidden md:flex items-center space-x-12 pointer-events-auto">
                            {rightLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm uppercase tracking-[0.2em] text-white/80 hover:text-gold-500 transition-colors duration-300"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8"
                    >
                        {[...leftLinks, ...rightLinks].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-serif text-white hover:text-gold-500 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

