"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const weddingPieces = [
    { composer: "R. Wagner", title: "Marsz weselny (na wejście)" },
    { composer: "F. Mendelssohn", title: "Marsz weselny (na wyjście)" },
    { composer: "J. S. Bach", title: "Aria na strunie G" },
    { composer: "J. S. Bach - Ch. Gounod", title: "Ave Maria" },
    { composer: "Fr. Schubert", title: "Ave Maria" },
    { composer: "G. Caccini", title: "Ave Maria" },
    { composer: "W. Gomes", title: "Ave Maria" },
    { composer: "C. Franck", title: "Panis Angelicus (komunia)" },
    { composer: "W.A. Mozart", title: "Ave Verum Corpus (komunia)" },
    { composer: "L. Cohen", title: "Hallelujah" },
    { composer: "G. F. Handel", title: "Largo" },
    { composer: "E. Morricone", title: "Obój Gabriela (z filmu Misja)" },
    { composer: "A. Vivaldi", title: "Cztery pory roku - Zima, 2 część koncertu - Largo" },
    { composer: "J. Pachelbel", title: "Canon" },
    { composer: "G. Tartini", title: "Cantabile" },
    { composer: "R. Schumann", title: "Marzenie" },
];

const classicalPieces = [
    { composer: "A. Vivaldi", title: "Cztery pory roku – Wiosna" },
    { composer: "L. Boccherini", title: "Menuet" },
    { composer: "L. Delibes", title: "Flower Duet" },
];

const entertainmentPieces = [
    { composer: "M. Bublé", title: "Sway" },
    { composer: "ABBA", title: "Dancing Queen" },
    { composer: "Sting", title: "Fields of Gold" },
    { composer: "Ed Sheeran", title: "Shape of You" },
    { composer: "Sting", title: "Englishman in New York" },
    { composer: "Edith Piaf", title: "La vie en rose" },
    { composer: "The Weeknd", title: "Save Your Tears" },
    { composer: "Taylor Swift", title: "Wildest Dreams" },
    { composer: "Madonna", title: "Material Girl" },
    { composer: "Coldplay", title: "Viva la Vida" },
    { composer: "Spice Girls", title: "Wannabe" },
    { composer: "Ed Sheeran", title: "Perfect" },
    { composer: "Sabrina Carpenter", title: "Espresso" },
];

const filmPieces = [
    { composer: "Merry-Go-Round of Life", title: "z filmu Ruchomy Zamek Hauru" },
    { composer: "Pretty Woman", title: "z filmu Pretty Woman" },
    { composer: "Sting – Shape of My Heart", title: "z filmu Leon Zawodowiec" },
    { composer: "C. Gardel – Por una cabeza", title: "m.in. z filmów Zapach kobiety, True Lies" },
    { composer: "Give Me Everything", title: "instrumentalna aranżacja (serial Bridgerton)" },
];

export default function Repertoire() {
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
                            href="/#repertoire"
                            className="relative z-10 inline-flex items-center justify-center gap-3 px-6 py-3 border border-gold-500 text-gold-500 font-medium uppercase tracking-widest hover:bg-gold-500 hover:text-black transition-colors rounded mb-8"
                        >
                            <ArrowLeft size={18} /> Powrót
                        </Link>

                        <h1 className="text-4xl md:text-6xl font-serif mb-6">
                            Repertuar
                        </h1>

                        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
                            Poniżej znajdą Państwo przykładowe utwory, które znajdują się w naszym repertuarze.
                        </p>
                    </motion.div>
                </div>
            </section>


            {/* Muzyka rozrywkowa Section */}
            <section className="py-20 px-6 md:px-12 bg-neutral-900">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-serif mb-10">Muzyka rozrywkowa</h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            {entertainmentPieces.map((piece, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="bg-black/50 border border-neutral-800 hover:border-gold-500/30 transition-colors p-5 rounded-lg group flex gap-4"
                                >
                                    <span className="text-gold-500 text-lg font-medium min-w-[2rem]">
                                        {index + 1}.
                                    </span>
                                    <div>
                                        <span className="text-gold-500 text-sm font-medium block mb-1">
                                            {piece.composer}
                                        </span>
                                        <span className="text-white font-light group-hover:text-gold-400 transition-colors">
                                            {piece.title}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Muzyka filmowa Section */}
            <section className="py-20 px-6 md:px-12 bg-black">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-serif mb-10">Muzyka filmowa</h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            {filmPieces.map((piece, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="bg-black/50 border border-neutral-800 hover:border-gold-500/30 transition-colors p-5 rounded-lg group flex gap-4"
                                >
                                    <span className="text-gold-500 text-lg font-medium min-w-[2rem]">
                                        {index + 1}.
                                    </span>
                                    <div>
                                        <span className="text-gold-500 text-sm font-medium block mb-1">
                                            {piece.composer}
                                        </span>
                                        <span className="text-white font-light group-hover:text-gold-400 transition-colors">
                                            {piece.title}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* Muzyka klasyczna Section */}
            <section className="py-20 px-6 md:px-12 bg-neutral-900">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-serif mb-10">Muzyka klasyczna</h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            {classicalPieces.map((piece, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="bg-black/50 border border-neutral-800 hover:border-gold-500/30 transition-colors p-5 rounded-lg group flex gap-4"
                                >
                                    <span className="text-gold-500 text-lg font-medium min-w-[2rem]">
                                        {index + 1}.
                                    </span>
                                    <div>
                                        <span className="text-gold-500 text-sm font-medium block mb-1">
                                            {piece.composer}
                                        </span>
                                        <span className="text-white font-light group-hover:text-gold-400 transition-colors">
                                            {piece.title}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* Repertuar ślubny Section */}
            <section className="py-20 px-6 md:px-12 bg-black">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-serif mb-10">Repertuar ślubny</h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            {weddingPieces.map((piece, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="bg-black/50 border border-neutral-800 hover:border-gold-500/30 transition-colors p-5 rounded-lg group flex gap-4"
                                >
                                    <span className="text-gold-500 text-lg font-medium min-w-[2rem]">
                                        {index + 1}.
                                    </span>
                                    <div>
                                        <span className="text-gold-500 text-sm font-medium block mb-1">
                                            {piece.composer}
                                        </span>
                                        <span className="text-white font-light group-hover:text-gold-400 transition-colors">
                                            {piece.title}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* Final Note */}
            <section className="py-16 px-6 md:px-12 bg-black border-t border-neutral-800">
                <div className="container mx-auto max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://pteii1sujfy8yxfh.public.blob.vercel-storage.com/repertuar.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-gold-500 text-gold-500 font-medium uppercase tracking-widest hover:bg-gold-500 hover:text-black transition-colors rounded"
                            >
                                Pobierz repertuar (PDF)
                            </a>
                            <Link
                                href="/#contact"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold-500 text-black font-medium uppercase tracking-widest hover:bg-gold-400 transition-colors rounded"
                            >
                                Skontaktuj się z nami
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
