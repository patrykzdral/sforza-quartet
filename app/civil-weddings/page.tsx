"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Music, Leaf, Banknote } from "lucide-react";

export default function CivilWeddings() {
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

                        <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-4">
                            Ceremonie ślubne <span className="text-burgundy">poza kościołem</span>
                        </h1>
                        <p className="text-lg md:text-xl text-burgundy/60 font-light mb-6">
                            (śluby cywilne, plenerowe i humanistyczne)
                        </p>

                        <p className="text-xl text-charcoal/60 font-light leading-relaxed max-w-3xl">
                            Oferujemy oprawę muzyczną <strong className="text-charcoal">ceremonii ślubnych odbywających się poza kościołem</strong> –
                            zarówno ślubów cywilnych w sali USC, jak i uroczystości plenerowych oraz ceremonii
                            humanistycznych. Subtelne brzmienie kwartetu smyczkowego tworzy elegancki, uroczysty
                            klimat, który na długo pozostaje w pamięci Państwa oraz gości.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Performance Info */}
            <section className="relative py-10 px-6 md:px-12 bg-ivory overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-burgundy/10 to-transparent" />
                <div className="absolute inset-0 noise-overlay pointer-events-none" />

                <div className="container mx-auto max-w-5xl relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        className="grid md:grid-cols-2 gap-12"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-full icon-container">
                                    <Music className="text-burgundy" size={24} />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif text-charcoal">Podczas ceremonii</h2>
                            </div>
                            <p className="text-charcoal/60 font-light leading-relaxed mb-6">
                                Podczas samej ceremonii wykonujemy zazwyczaj <strong className="text-charcoal">około 3 utworów</strong> –
                                na rozpoczęcie uroczystości, w jej trakcie (np. podczas podpisywania dokumentów
                                lub symbolicznego momentu ceremonii) oraz na zakończenie.
                            </p>
                            <p className="text-charcoal/60 font-light leading-relaxed">
                                Istnieje również możliwość dodatkowej oprawy muzycznej <strong className="text-charcoal">tuż przed rozpoczęciem ceremonii</strong>,
                                a także <strong className="text-charcoal">podczas składania życzeń</strong>, co pozwala stworzyć spójną i harmonijną całość.
                            </p>
                        </div>

                        <div className="card-modern rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Leaf className="text-burgundy" size={24} />
                                <h3 className="text-xl font-serif text-charcoal">Indywidualny repertuar</h3>
                            </div>
                            <p className="text-charcoal/60 font-light leading-relaxed">
                                Repertuar ustalamy <strong className="text-charcoal">indywidualnie</strong>, zawsze uwzględniając
                                charakter uroczystości oraz Państwa oczekiwania. Aktualna lista utworów dostępna
                                jest na naszej stronie internetowej w zakładce <Link href="/repertoire" className="text-burgundy hover:text-burgundy-light transition-colors">repertuar</Link> i
                                jest na bieżąco aktualizowana.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Practical Info */}
            <section className="relative py-10 px-6 md:px-12 bg-cream overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-burgundy/15 to-transparent" />

                <div className="container mx-auto max-w-5xl relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <div className="card-modern rounded-2xl p-8">
                            <p className="text-charcoal/60 font-light leading-relaxed mb-6">
                                Gramy akustycznie, dzięki czemu <strong className="text-charcoal">nie wymagamy nagłośnienia</strong>.
                                Jedynym warunkiem jest zapewnienie odpowiednich warunków dla naszych instrumentów —
                                w przypadku opadów konieczne jest solidne zadaszenie.
                            </p>
                            <p className="text-charcoal/60 font-light leading-relaxed mb-6">
                                Zawsze prosimy o wcześniejsze poinformowanie <strong className="text-charcoal">osoby prowadzącej ceremonię</strong> o
                                naszej obecności.
                            </p>
                            <p className="text-charcoal/60 font-light leading-relaxed">
                                W razie pytań pozostajemy <strong className="text-charcoal">do Państwa dyspozycji</strong> (zakładka <Link href="/#contact" className="text-burgundy hover:text-burgundy-light transition-colors">kontakt</Link>).
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Section */}
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
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 rounded-full icon-container">
                                <Banknote className="text-burgundy" size={24} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-serif text-charcoal">Cennik</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="card-modern rounded-2xl p-8 glow-burgundy-hover transition-all duration-500">
                                <h3 className="text-xl font-serif text-charcoal mb-4">Ceremonia ślubna</h3>
                                <p className="text-3xl md:text-4xl font-serif gradient-text-static">
                                    2500 zł*
                                </p>
                                <p className="text-sm text-charcoal/40 mt-6">
                                    *Dojazd do 60 km od Wrocławia jest wliczony w cenę, a poza tym zakresem naliczana jest opłata.
                                </p>
                            </div>

                            <div className="card-modern rounded-2xl p-8">
                                <h3 className="text-xl font-serif text-charcoal mb-4">Usługi dodatkowe</h3>
                                <ul className="space-y-3">
                                    <li className="flex justify-between items-center">
                                        <span className="text-burgundy font-medium">życzenia</span>
                                        <span className="text-charcoal/50">wycena indywidualna*</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="text-burgundy font-medium">obiad</span>
                                        <span className="text-charcoal/50">wycena indywidualna*</span>
                                    </li>
                                </ul>
                                <p className="text-sm text-charcoal/40 mt-6">
                                    *Stawka zależna od długości grania
                                </p>
                            </div>
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
                        <p className="text-xl text-white/70 font-light max-w-3xl mx-auto mb-8">
                            Z przyjemnością uwzględnimy również inne propozycje repertuarowe,
                            dopasowując muzykę do Państwa oczekiwań oraz charakteru ceremonii.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://pteii1sujfy8yxfh.public.blob.vercel-storage.com/SQ_Oferta_s%CC%81lubna.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/20 text-white hover:border-rose-gold/50 hover:text-rose-gold font-medium uppercase tracking-widest rounded-full transition-all duration-300"
                            >
                                Pobierz ofertę ślubną (PDF)
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
