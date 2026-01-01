"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";

const videos = [
    {
        title: "Wildest Dream",
        description: "Taylor Swift",
        youtubeId: "qz27O0rRc7Q",
    },
    {
        title: "Viva la Vida",
        description: "Coldplay",
        youtubeId: "oRVbeh2xAfQ",
    },
    {
        title: "Por una cabeza",
        description: "Carlos Gardel",
        youtubeId: "lfLmGJBm5FI",
    },
    {
        title: "Ave Verum",
        description: "Wolfgang Amadeus Mozart",
        youtubeId: "_8mgSHMJL48",
    }
];

export default function Multimedia() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />
                </div>

                <div className="container mx-auto max-w-5xl relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-3 px-6 py-3 btn-premium text-gold-500 font-medium uppercase tracking-widest rounded-full mb-8"
                        >
                            <ArrowLeft size={18} /> Powrót
                        </Link>

                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-12 bg-gradient-to-r from-gold-500 to-transparent" />
                            <span className="gradient-text uppercase tracking-[0.3em] text-sm font-medium">Galeria</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-serif mb-6">
                            <span className="text-gold-500">Multi</span>media
                        </h1>

                        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
                            Zobacz i&nbsp;posłuchaj naszych występów. Poniżej znajdziesz nagrania z&nbsp;prób, koncertów, ceremonii ślubnych i&nbsp;innych wydarzeń.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Videos Section */}
            <section className="relative py-12 px-6 md:px-12 bg-neutral-900/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none" />
                <div className="absolute inset-0 noise-overlay pointer-events-none" />

                <div className="container mx-auto max-w-5xl relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <div className="flex items-center gap-3 mb-10">
                            <div className="p-2 rounded-full glass border border-gold-500/30">
                                <Play className="text-gold-500" size={24} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-serif">Nagrania wideo</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {videos.map((video, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="card-modern rounded-xl overflow-hidden group"
                                >
                                    <div className="relative aspect-video">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                            title={video.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="absolute inset-0 w-full h-full"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-lg font-serif text-white mb-2 group-hover:text-gold-400 transition-colors">
                                            {video.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm font-light">
                                            {video.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-10 px-6 md:px-12 bg-black overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

                <div className="container mx-auto max-w-5xl text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto mb-8">
                            Chcesz zobaczyć więcej? Odwiedź nasze profile społecznościowe
                            lub&nbsp;skontaktuj się z&nbsp;nami.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-black font-medium uppercase tracking-widest hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 rounded-full"
                        >
                            Skontaktuj się z nami
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
