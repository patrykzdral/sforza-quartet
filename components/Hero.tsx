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
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* Animated gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gold-500/20 via-transparent to-transparent blur-3xl"
                    style={{ filter: 'blur(100px)' }}
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-gold-500/10 via-transparent to-transparent blur-3xl"
                    style={{ filter: 'blur(100px)' }}
                />
            </div>

            {/* Background Video/Image */}
            <div className="absolute inset-0 opacity-35">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-center"
                >
                    <source src="/videos/intro.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />
            </div>

            {/* Noise overlay for texture */}
            <div className="absolute inset-0 noise-overlay pointer-events-none" />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    className="space-y-6"
                >
                    <motion.h2
                        initial={{ opacity: 0, letterSpacing: '0.2em' }}
                        animate={{ opacity: 1, letterSpacing: '0.4em' }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                        className="text-gold-500 text-sm md:text-base uppercase font-light"
                    >
                        Kwartet smyczkowy
                    </motion.h2>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white tracking-tight overflow-visible pb-6 leading-[1.2]">
                        <motion.span
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="inline-block"
                        >
                            Sforza
                        </motion.span>
                        {" "}
                        <motion.span
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="inline-block gradient-text"
                        >
                            Quartet
                        </motion.span>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="relative"
                    >
                        <div className="section-divider w-32 mx-auto mb-6" />
                        <p className="max-w-xl mx-auto text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                            Tworzymy wspomnienia zatrzymane w dźwiękach.
                            <br />
                            <span className="text-gold-400/80">Elegancja, pasja i perfekcja</span> w każdej nucie.
                        </p>
                    </motion.div>

                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        href="#contact"
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-black font-medium uppercase tracking-widest hover:shadow-[0_0_40px_rgba(139,115,85,0.5)] hover:scale-[1.02] transition-all duration-300 rounded-full mt-8"
                    >
                        Skontaktuj się z nami
                    </motion.a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    onClick={scrollToAbout}
                    className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-gold-500 transition-colors duration-500 cursor-pointer group"
                >
                    <span className="text-xs uppercase tracking-[0.3em] font-light">Odkryj więcej</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-5 h-5 group-hover:text-gold-500" />
                    </motion.div>
                </motion.button>

                {/* Audio Control Button */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    onClick={toggleMute}
                    className="absolute bottom-8 right-8 p-3 rounded-full glass border border-white/10 text-white/70 hover:text-gold-500 hover:border-gold-500/50 transition-all duration-500 z-50 group"
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
