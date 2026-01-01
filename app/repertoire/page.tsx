"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Music, Film, Sparkles, Heart } from "lucide-react";

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
    { composer: "E. Morricone", title: "Obój Gabriela (z filmu Misja)" },
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
    { composer: "Merry-Go-Round of Life", title: "z filmu Ruchomy Zamek Hauru" },
    { composer: "Pretty Woman", title: "z filmu Pretty Woman" },
    { composer: "Sting – Shape of My Heart", title: "z filmu Leon Zawodowiec" },
    { composer: "C. Gardel – Por una cabeza", title: "m.in. z filmów Zapach kobiety, True Lies" },
    { composer: "Give Me Everything", title: "instrumentalna aranżacja (serial Bridgerton)" },
];

interface PieceCardProps {
    piece: { composer: string; title: string };
    index: number;
}

function PieceCard({ piece, index }: PieceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            className="card-modern p-5 rounded-xl group flex gap-4"
        >
            <span className="text-burgundy text-lg font-medium min-w-[2rem]">
                {index + 1}.
            </span>
            <div>
                <span className="text-burgundy text-sm font-medium block mb-1">
                    {piece.composer}
                </span>
                <span className="text-charcoal font-light group-hover:text-burgundy transition-colors">
                    {piece.title}
                </span>
            </div>
        </motion.div>
    );
}

export default function Repertoire() {
    return (
        <main className="bg-cream min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 pointer-events-none mesh-gradient-1 opacity-50" />

                <div className="container mx-auto max-w-5xl relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <Link
                            href="/#repertoire"
                            className="inline-flex items-center justify-center gap-3 px-6 py-3 btn-outline text-burgundy font-medium uppercase tracking-widest rounded-full mb-8"
                        >
                            <ArrowLeft size={18} /> Powrót
                        </Link>

                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-12 bg-gradient-to-r from-burgundy to-transparent" />
                            <span className="gradient-text-static uppercase tracking-[0.3em] text-sm font-medium">Muzyka</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-6">
                            <span className="text-burgundy">Reper</span>tuar
                        </h1>

                        <p className="text-xl text-charcoal/60 font-light leading-relaxed max-w-3xl">
                            Poniżej znajdą Państwo przykładowe utwory, które znajdują się w naszym repertuarze.
                        </p>
                    </motion.div>
                </div>
            </section>


            {/* Muzyka rozrywkowa Section */}
            <section className="relative py-12 px-6 md:px-12 bg-ivory overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-burgundy/10 to-transparent" />
                <div className="absolute inset-0 noise-overlay pointer-events-none" />

                <div className="container mx-auto max-w-5xl relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <div className="flex items-center gap-3 mb-10">
                            <div className="p-2 rounded-full icon-container">
                                <Sparkles className="text-burgundy" size={24} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-serif text-charcoal">Muzyka rozrywkowa</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {entertainmentPieces.map((piece, index) => (
                                <PieceCard key={index} piece={piece} index={index} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Muzyka filmowa Section */}
            <section className="relative py-12 px-6 md:px-12 bg-cream overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-burgundy/15 to-transparent" />

                <div className="container mx-auto max-w-5xl relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <div className="flex items-center gap-3 mb-10">
                            <div className="p-2 rounded-full icon-container">
                                <Film className="text-burgundy" size={24} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-serif text-charcoal">Muzyka filmowa</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {filmPieces.map((piece, index) => (
                                <PieceCard key={index} piece={piece} index={index} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* Muzyka klasyczna Section */}
            <section className="relative py-12 px-6 md:px-12 bg-ivory overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-burgundy/10 to-transparent" />
                <div className="absolute inset-0 noise-overlay pointer-events-none" />

                <div className="container mx-auto max-w-5xl relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <div className="flex items-center gap-3 mb-10">
                            <div className="p-2 rounded-full icon-container">
                                <Music className="text-burgundy" size={24} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-serif text-charcoal">Muzyka klasyczna</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {classicalPieces.map((piece, index) => (
                                <PieceCard key={index} piece={piece} index={index} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* Repertuar ślubny Section */}
            <section className="relative py-12 px-6 md:px-12 bg-cream overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-burgundy/15 to-transparent" />

                <div className="container mx-auto max-w-5xl relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <div className="flex items-center gap-3 mb-10">
                            <div className="p-2 rounded-full icon-container">
                                <Heart className="text-burgundy" size={24} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-serif text-charcoal">Repertuar ślubny</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {weddingPieces.map((piece, index) => (
                                <PieceCard key={index} piece={piece} index={index} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* Final Note */}
            <section className="relative py-10 px-6 md:px-12 bg-charcoal overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/30 to-transparent" />

                <div className="container mx-auto max-w-5xl text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://pteii1sujfy8yxfh.public.blob.vercel-storage.com/repertuar.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/20 text-white hover:border-rose-gold/50 hover:text-rose-gold font-medium uppercase tracking-widest rounded-full transition-all duration-300"
                            >
                                Pobierz repertuar (PDF)
                            </a>
                            <Link
                                href="/#contact"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 btn-premium font-medium uppercase tracking-widest rounded-full"
                            >
                                Skontaktuj się z nami
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
