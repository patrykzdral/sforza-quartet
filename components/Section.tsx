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
            className={`relative py-24 md:py-32 px-6 md:px-12 ${dark ? "bg-black text-white" : "bg-neutral-900 text-white"
                } ${className}`}
        >
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
