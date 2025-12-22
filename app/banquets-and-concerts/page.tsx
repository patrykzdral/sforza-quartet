"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Banknote } from "lucide-react";

export default function BanquetsAndConcerts() {
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
                            href="/#offer"
                            className="relative z-10 inline-flex items-center justify-center gap-3 px-6 py-3 border border-gold-500 text-gold-500 font-medium uppercase tracking-widest hover:bg-gold-500 hover:text-black transition-colors rounded mb-8"
                        >
                            <ArrowLeft size={18} /> Powrót
                        </Link>

                        <h1 className="text-4xl md:text-6xl font-serif mb-6">
                            Imprezy okolicznościowe, <span className="italic text-neutral-400">bankiety, koncerty</span>
                        </h1>

                        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
                            Oprawa muzyczna dla firm, korporacji, instytucji oraz agencji artystycznych.
                            Eleganckie tło dla wszelkiego rodzaju wydarzeń.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Description Section */}
            <section className="py-16 px-6 md:px-12 bg-neutral-900">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="bg-black/50 border border-neutral-800 rounded-lg p-8">
                            <p className="text-gray-400 font-light leading-relaxed mb-6">
                                Oferujemy oprawę muzyczną dla <strong className="text-white">firm, korporacji, instytucji oraz agencji artystycznych</strong>.
                                Tworzymy subtelne i eleganckie tło dla wszelkiego rodzaju wydarzeń – od spotkań biznesowych,
                                jubileuszy i konferencji, po przyjęcia okolicznościowe, również w plenerze.
                            </p>
                            <p className="text-gray-400 font-light leading-relaxed mb-6">
                                Dostosowujemy charakter muzyki do atmosfery wydarzenia, tak aby w pełni współgrała z jego przebiegiem.
                                W zależności od Państwa oczekiwań możemy zapewnić delikatne tło muzyczne lub zagrać dedykowany koncert dla gości.
                            </p>
                            <p className="text-gray-400 font-light leading-relaxed mb-6">
                                Repertuar ustalamy <strong className="text-white">indywidualnie</strong>, zawsze biorąc pod uwagę charakter wydarzenia
                                oraz Państwa oczekiwania. Dzięki temu muzyka idealnie współgra z atmosferą i dodaje wyjątkowego klimatu każdemu spotkaniu.
                            </p>
                            <p className="text-gray-400 font-light leading-relaxed mb-6">
                                Jesteśmy również <strong className="text-white">otwarci</strong> na Państwa propozycje repertuarowe i z przyjemnością
                                dostosowujemy program do specyfiki wydarzenia, tak aby w pełni spełniał Państwa oczekiwania.
                            </p>
                            <p className="text-gray-400 font-light leading-relaxed">
                                W razie pytań pozostajemy <strong className="text-white">do Państwa dyspozycji</strong> (zakładka <Link href="/#contact" className="text-gold-500 hover:text-gold-400 italic">kontakt</Link>).
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-6 md:px-12 bg-black border-t border-neutral-800">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Banknote className="text-gold-500" size={28} />
                            <h2 className="text-2xl md:text-3xl font-serif">Cennik</h2>
                        </div>

                        <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-8">
                            <div className="mb-6">
                                <h3 className="text-xl font-serif text-white mb-4">Godzinna oprawa muzyczna</h3>
                                <p className="text-3xl md:text-4xl font-serif text-gold-500">
                                    3000–4500 zł
                                </p>
                            </div>
                            <p className="text-gray-400 font-light leading-relaxed">
                                Stawka zależy od charakteru wydarzenia, repertuaru oraz lokalizacji.
                                Każdy koncert traktujemy indywidualnie, aby zapewnić wyjątkową oprawę
                                muzyczną dopasowaną do potrzeb klienta.
                            </p>
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
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://pteii1sujfy8yxfh.public.blob.vercel-storage.com/SQ_Oferta_eventowa.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-gold-500 text-gold-500 font-medium uppercase tracking-widest hover:bg-gold-500 hover:text-black transition-colors rounded"
                            >
                                Pobierz ofertę eventową (PDF)
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
