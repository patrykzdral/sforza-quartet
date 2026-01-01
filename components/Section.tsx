"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    dark?: boolean;
}

export default function Section({ children, id, className = "", dark = false }: SectionProps) {
    return (
        <section
            id={id}
            className={`relative py-20 md:py-28 px-6 md:px-12 overflow-hidden ${dark ? "bg-charcoal" : "bg-gradient-to-br from-cream via-ivory to-cream"
                } ${className}`}
        >
            {/* Subtle gradient background */}
            <div className="absolute inset-0 pointer-events-none">
                {dark ? (
                    <>
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/30 to-transparent" />
                        <div className="absolute inset-0 mesh-gradient-2 opacity-40" />
                    </>
                ) : (
                    <>
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/25 to-transparent" />
                        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/25 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-b from-burgundy/5 via-transparent to-burgundy/5" />
                    </>
                )}
            </div>

            {/* Subtle texture overlay */}
            <div className="absolute inset-0 noise-overlay pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
