"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, ChevronDown } from "lucide-react";

export default function Hero() {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    // Force video play on mount for Safari mobile
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.play().catch(() => {
                // Autoplay was prevented, video will remain paused
            });
        }
    }, []);

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative h-screen w-full overflow-hidden bg-charcoal">
            {/* Organic blob backgrounds */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute -top-32 -right-32 w-[600px] h-[600px] blob blob-1 float"
                    style={{ animationDelay: '0s' }}
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute -bottom-32 -left-32 w-[500px] h-[500px] blob blob-2 float"
                    style={{ animationDelay: '2s' }}
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-burgundy/20 via-transparent to-rose-gold/10 blur-3xl"
                />
            </div>

            {/* Background Video/Image with dark brown overlay */}
            <div className="absolute inset-0">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-center opacity-50"
                >
                    <source src="/videos/intro.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-cream/40 to-charcoal/80" />
            </div>

            {/* Subtle texture overlay */}
            <div className="absolute inset-0 noise-overlay pointer-events-none" />

            {/* Mesh gradient overlay */}
            <div className="absolute inset-0 mesh-gradient-1 pointer-events-none" />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    className="space-y-8"
                >
                    {/* Decorative element */}
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex items-center justify-center gap-4"
                    >
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-gold" />
                        <span className="text-burgundy text-sm uppercase tracking-[0.4em] font-medium">Kwartet smyczkowy</span>
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-gold" />
                    </motion.div>

                    {/* Main title */}
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-text-light tracking-tight overflow-visible leading-[1.1]">
                        <motion.span
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="inline-block font-light"
                        >
                            Sforza
                        </motion.span>
                        {" "}
                        <motion.span
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="inline-block gradient-text font-medium"
                        >
                            Quartet
                        </motion.span>
                    </h1>

                    {/* Tagline */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="relative"
                    >
                        <div className="section-divider w-24 mx-auto mb-8" />
                        <p className="max-w-xl mx-auto text-text-light/80 text-lg md:text-xl font-light leading-relaxed">
                            Tworzymy wspomnienia zatrzymane w dźwiękach.
                            <br />
                            <span className="text-rose-gold font-medium">Elegancja, pasja i perfekcja</span> w każdej nucie.
                        </p>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                    >
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-3 px-8 py-4 btn-premium rounded-full text-sm tracking-widest uppercase font-medium"
                        >
                            Skontaktuj się z nami
                        </a>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    onClick={scrollToAbout}
                    className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-text-light/50 hover:text-rose-gold transition-colors duration-500 cursor-pointer group"
                >
                    <span className="text-xs uppercase tracking-[0.3em] font-light">Odkryj więcej</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-5 h-5" />
                    </motion.div>
                </motion.button>

                {/* Audio Control Button */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    onClick={toggleMute}
                    className="absolute bottom-8 right-8 p-3 rounded-full glass border border-rose-gold/20 text-text-light/60 hover:text-rose-gold hover:border-rose-gold/40 transition-all duration-500 z-50 group"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                    {isMuted ? (
                        <VolumeX className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    ) : (
                        <Volume2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    )}
                </motion.button>
            </div>
        </section>
    );
}
