"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isOfferDropdownOpen, setIsOfferDropdownOpen] = useState(false);
    const [isMobileOfferOpen, setIsMobileOfferOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOfferDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const offerSubLinks = [
        { name: "Śluby kościelne", href: "/church-weddings" },
        { name: "Ceremonie ślubne poza kościołem", href: "/civil-weddings" },
        { name: "Imprezy okolicznościowe, bankiety, koncerty", href: "/banquets-and-concerts" },
    ];

    const leftLinks = [
        { name: "O nas", href: "/#about" },
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
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aw
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
                            {/* Oferta Dropdown */}
                            <div
                                ref={dropdownRef}
                                className="relative"
                                onMouseEnter={() => setIsOfferDropdownOpen(true)}
                                onMouseLeave={() => setIsOfferDropdownOpen(false)}
                            >
                                <button
                                    onClick={() => setIsOfferDropdownOpen(!isOfferDropdownOpen)}
                                    className="flex items-center gap-1 text-sm uppercase tracking-[0.2em] text-white/80 hover:text-gold-500 transition-colors duration-300"
                                >
                                    Oferta
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-300 ${isOfferDropdownOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {isOfferDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 min-w-[280px] bg-black/95 backdrop-blur-md rounded-lg shadow-xl border border-gold-500/20 overflow-hidden"
                                        >
                                            {offerSubLinks.map((subLink) => (
                                                <Link
                                                    key={subLink.name}
                                                    href={subLink.href}
                                                    className="block px-4 py-3 text-sm text-white/80 hover:text-gold-500 hover:bg-white/5 transition-colors duration-300"
                                                >
                                                    {subLink.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
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
                        className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-6 overflow-y-auto py-20"
                    >
                        {leftLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-serif text-white hover:text-gold-500 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        {/* Mobile Oferta with sub-links */}
                        <div className="flex flex-col items-center">
                            <button
                                onClick={() => setIsMobileOfferOpen(!isMobileOfferOpen)}
                                className="flex items-center gap-2 text-2xl font-serif text-white hover:text-gold-500 transition-colors"
                            >
                                Oferta
                                <ChevronDown
                                    className={`w-5 h-5 transition-transform duration-300 ${isMobileOfferOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <AnimatePresence>
                                {isMobileOfferOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-col items-center mt-4 space-y-3 overflow-hidden"
                                    >
                                        {offerSubLinks.map((subLink) => (
                                            <Link
                                                key={subLink.name}
                                                href={subLink.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="text-lg text-white/70 hover:text-gold-500 transition-colors text-center px-4"
                                            >
                                                {subLink.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        {rightLinks.map((link) => (
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

