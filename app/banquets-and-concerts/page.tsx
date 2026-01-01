"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Banknote, Sparkles } from "lucide-react";

export default function BanquetsAndConcerts() {
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
                            href="/#offer"
                            className="inline-flex items-center justify-center gap-3 px-6 py-3 btn-outline text-burgundy font-medium uppercase tracking-widest rounded-full mb-8"
                        >
                            <ArrowLeft size={18} /> Powrót
                        </Link>

                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-12 bg-gradient-to-r from-burgundy to-transparent" />
                            <span className="gradient-text-static uppercase tracking-[0.3em] text-sm font-medium">Oferta</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-6">
                            Imprezy okolicznościowe, <span className="text-burgundy">bankiety, koncerty</span>
                        </h1>

                        <p className="text-xl text-charcoal/60 font-light leading-relaxed max-w-3xl">
                            Oprawa muzyczna dla firm, korporacji, instytucji oraz agencji artystycznych.
                            Eleganckie tło dla wszelkiego rodzaju wydarzeń.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Description Section */}
            <section className="relative py-10 px-6 md:px-12 bg-ivory overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-burgundy/10 to-transparent" />
                <div className="absolute inset-0 noise-overlay pointer-events-none" />

                <div className="container mx-auto max-w-5xl relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <div className="card-modern rounded-2xl p-8 space-y-6">
                            <p className="text-charcoal/60 font-light leading-relaxed">
                                Oferujemy oprawę muzyczną dla <strong className="text-charcoal">firm, korporacji, instytucji oraz agencji artystycznych</strong>.
                                Tworzymy subtelne i eleganckie tło dla wszelkiego rodzaju wydarzeń – od spotkań biznesowych,
                                jubileuszy i konferencji, po przyjęcia okolicznościowe, również w plenerze.
                            </p>
                            <p className="text-charcoal/60 font-light leading-relaxed">
                                Dostosowujemy charakter muzyki do atmosfery wydarzenia, tak aby w pełni współgrała z jego przebiegiem.
                                W zależności od Państwa oczekiwań możemy zapewnić delikatne tło muzyczne lub zagrać dedykowany koncert dla gości.
                            </p>
                            <p className="text-charcoal/60 font-light leading-relaxed">
                                Repertuar ustalamy <strong className="text-charcoal">indywidualnie</strong>, zawsze biorąc pod uwagę charakter wydarzenia
                                oraz Państwa oczekiwania. Dzięki temu muzyka idealnie współgra z atmosferą i dodaje wyjątkowego klimatu każdemu spotkaniu.
                            </p>
                            <p className="text-charcoal/60 font-light leading-relaxed">
                                Jesteśmy również <strong className="text-charcoal">otwarte</strong> na Państwa propozycje repertuarowe i z przyjemnością
                                dostosowujemy program do specyfiki wydarzenia, tak aby w pełni spełniał Państwa oczekiwania.
                            </p>
                            <p className="text-charcoal/60 font-light leading-relaxed">
                                W razie pytań pozostajemy <strong className="text-charcoal">do Państwa dyspozycji</strong> (zakładka <Link href="/#contact" className="text-burgundy hover:text-burgundy-light transition-colors">kontakt</Link>).
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="relative py-12 px-6 md:px-12 bg-cream overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-burgundy/15 to-transparent" />

                <div className="container mx-auto max-w-5xl relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 rounded-full icon-container">
                                <Banknote className="text-burgundy" size={24} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-serif text-charcoal">Cennik</h2>
                        </div>

                        <div className="card-modern rounded-2xl p-8 glow-burgundy-hover transition-all duration-500">
                            <div className="flex items-center gap-3 mb-4">
                                <Sparkles className="text-burgundy" size={20} />
                                <h3 className="text-xl font-serif text-charcoal">Godzinna oprawa muzyczna</h3>
                            </div>
                            <p className="text-3xl md:text-4xl font-serif gradient-text-static mb-6">
                                3000–4500 zł
                            </p>
                            <p className="text-charcoal/60 font-light leading-relaxed">
                                Stawka zależy od charakteru wydarzenia, repertuaru oraz lokalizacji.
                                Każdy koncert traktujemy indywidualnie, aby zapewnić wyjątkową oprawę
                                muzyczną dopasowaną do potrzeb klienta.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
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
                                href="https://pteii1sujfy8yxfh.public.blob.vercel-storage.com/SQ_Oferta_eventowa.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/20 text-white hover:border-rose-gold/50 hover:text-rose-gold font-medium uppercase tracking-widest rounded-full transition-all duration-300"
                            >
                                Pobierz ofertę eventową (PDF)
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
