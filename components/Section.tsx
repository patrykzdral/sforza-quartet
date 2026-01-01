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
            className={`relative py-16 md:py-20 px-6 md:px-12 overflow-hidden ${dark ? "bg-black text-white" : "bg-neutral-900/50 text-white"
                } ${className}`}
        >
            {/* Subtle gradient background */}
            <div className="absolute inset-0 pointer-events-none">
                {dark && (
                    <>
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
                    </>
                )}
                {!dark && (
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-neutral-900/50 to-black/80" />
                )}
            </div>

            {/* Noise texture overlay */}
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
