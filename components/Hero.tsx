"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Video/Image Placeholder */}
            <div className="absolute inset-0 opacity-40">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-center"
                >
                    <source src="https://pteii1sujfy8yxfh.public.blob.vercel-storage.com/intro.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 className="text-gold-500 tracking-[0.3em] text-sm md:text-base mb-6 uppercase">
                        String Quartet
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-8 tracking-tight">
                        Sforza Quartet
                    </h1>
                    <p className="max-w-xl mx-auto text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                        Tworzymy wspomnienia zatrzymane w dźwiękach.
                        <br />
                        Elegancja, pasja i perfekcja w każdej nucie.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                >
                    <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold-500 to-transparent opacity-50 animate-pulse" />
                </motion.div>
            </div>
        </section>
    );
}
