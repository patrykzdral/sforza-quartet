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
            <section className="relative pt-32 pb-20 px-6 md:px-12">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link
                            href="/"
                            className="relative z-10 inline-flex items-center justify-center gap-3 px-6 py-3 border border-gold-500 text-gold-500 font-medium uppercase tracking-widest hover:bg-gold-500 hover:text-black transition-colors rounded mb-8"
                        >
                            <ArrowLeft size={18} /> Powrót
                        </Link>

                        <h1 className="text-4xl md:text-6xl font-serif mb-6">
                            Multimedia
                        </h1>

                        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
                            Zobacz i&nbsp;posłuchaj naszych występów. Poniżej znajdziesz nagrania z&nbsp;prób, koncertów, ceremonii ślubnych i&nbsp;innych wydarzeń.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Videos Section */}
            <section className="py-20 px-6 md:px-12 bg-neutral-900">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-10">
                            <Play className="text-gold-500" size={28} />
                            <h2 className="text-2xl md:text-3xl font-serif">Nagrania wideo</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {videos.map((video, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="bg-black/50 border border-neutral-800 hover:border-gold-500/30 transition-all duration-300 rounded-lg overflow-hidden group"
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
            <section className="py-16 px-6 md:px-12 bg-black border-t border-neutral-800">
                <div className="container mx-auto max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto mb-8">
                            Chcesz zobaczyć więcej? Odwiedź nasze profile społecznościowe
                            lub&nbsp;skontaktuj się z&nbsp;nami.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold-500 text-black font-medium uppercase tracking-widest hover:bg-gold-400 transition-colors rounded"
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
