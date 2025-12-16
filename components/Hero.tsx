"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

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

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Video/Image Placeholder */}
            <div className="absolute inset-0 opacity-40">
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
                        Kwartet smyczkowy
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-8 tracking-tight">
                        Sforza Quartet
                    </h1>
                    <p className="max-w-xl mx-auto text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                        Tworzymy wspomnienia zatrzymane w dźwiękach.
                        <br />
                        Elegancja, pasja i perfekcja w każdej nucie.
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

                {/* Audio Control Button */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    onClick={toggleMute}
                    className="absolute bottom-8 right-8 p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:bg-black/50 transition-all duration-300 z-50 group"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                    {isMuted ? (
                        <VolumeX className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    ) : (
                        <Volume2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    )}
                </motion.button>
            </div>
        </section>
    );
}
