"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Music, Leaf, Banknote } from "lucide-react";

export default function CivilWeddings() {
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
                            href="/#offer"
                            className="inline-flex items-center justify-center gap-3 px-6 py-3 btn-premium text-gold-500 font-medium uppercase tracking-widest rounded-full mb-8"
                        >
                            <ArrowLeft size={18} /> Powrót
                        </Link>

                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-12 bg-gradient-to-r from-gold-500 to-transparent" />
                            <span className="gradient-text uppercase tracking-[0.3em] text-sm font-medium">Oferta</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-serif mb-4">
                            Ceremonie ślubne <span className="text-gold-500">poza kościołem</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gold-500/70 font-light mb-6">
                            (śluby cywilne, plenerowe i humanistyczne)
                        </p>

                        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
                            Oferujemy oprawę muzyczną <strong className="text-white">ceremonii ślubnych odbywających się poza kościołem</strong> –
                            zarówno ślubów cywilnych w sali USC, jak i uroczystości plenerowych oraz ceremonii
                            humanistycznych. Subtelne brzmienie kwartetu smyczkowego tworzy elegancki, uroczysty
                            klimat, który na długo pozostaje w pamięci Państwa oraz gości.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Performance Info */}
            <section className="relative py-10 px-6 md:px-12 bg-neutral-900/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none" />
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
                                <div className="p-2 rounded-full glass border border-gold-500/30">
                                    <Music className="text-gold-500" size={24} />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif">Podczas ceremonii</h2>
                            </div>
                            <p className="text-gray-400 font-light leading-relaxed mb-6">
                                Podczas samej ceremonii wykonujemy zazwyczaj <strong className="text-white">około 3 utworów</strong> –
                                na rozpoczęcie uroczystości, w jej trakcie (np. podczas podpisywania dokumentów
                                lub symbolicznego momentu ceremonii) oraz na zakończenie.
                            </p>
                            <p className="text-gray-400 font-light leading-relaxed">
                                Istnieje również możliwość dodatkowej oprawy muzycznej <strong className="text-white">tuż przed rozpoczęciem ceremonii</strong>,
                                a także <strong className="text-white">podczas składania życzeń</strong>, co pozwala stworzyć spójną i harmonijną całość.
                            </p>
                        </div>

                        <div className="card-modern rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Leaf className="text-gold-500" size={24} />
                                <h3 className="text-xl font-serif text-white">Indywidualny repertuar</h3>
                            </div>
                            <p className="text-gray-400 font-light leading-relaxed">
                                Repertuar ustalamy <strong className="text-white">indywidualnie</strong>, zawsze uwzględniając
                                charakter uroczystości oraz Państwa oczekiwania. Aktualna lista utworów dostępna
                                jest na naszej stronie internetowej w zakładce <Link href="/repertoire" className="text-gold-500 hover:text-gold-400 transition-colors">repertuar</Link> i
                                jest na bieżąco aktualizowana.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Practical Info */}
            <section className="relative py-10 px-6 md:px-12 bg-black overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

                <div className="container mx-auto max-w-5xl relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <div className="card-modern rounded-xl p-8">
                            <p className="text-gray-400 font-light leading-relaxed mb-6">
                                Gramy akustycznie, dzięki czemu <strong className="text-white">nie wymagamy nagłośnienia</strong>.
                                Jedynym warunkiem jest zapewnienie odpowiednich warunków dla naszych instrumentów —
                                w przypadku opadów konieczne jest solidne zadaszenie.
                            </p>
                            <p className="text-gray-400 font-light leading-relaxed mb-6">
                                Zawsze prosimy o wcześniejsze poinformowanie <strong className="text-white">osoby prowadzącej ceremonię</strong> o
                                naszej obecności.
                            </p>
                            <p className="text-gray-400 font-light leading-relaxed">
                                W razie pytań pozostajemy <strong className="text-white">do Państwa dyspozycji</strong> (zakładka <Link href="/#contact" className="text-gold-500 hover:text-gold-400 transition-colors">kontakt</Link>).
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Section */}
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
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 rounded-full glass border border-gold-500/30">
                                <Banknote className="text-gold-500" size={24} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-serif">Cennik</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="card-modern rounded-xl p-8 glow-gold-hover transition-all duration-500">
                                <h3 className="text-xl font-serif text-white mb-4">Ceremonia ślubna</h3>
                                <p className="text-3xl md:text-4xl font-serif gradient-text">
                                    2500 zł*
                                </p>
                                <p className="text-sm text-gray-500 mt-6">
                                    *Dojazd do 60 km od Wrocławia jest wliczony w cenę, a poza tym zakresem naliczana jest opłata.
                                </p>
                            </div>

                            <div className="card-modern rounded-xl p-8">
                                <h3 className="text-xl font-serif text-white mb-4">Usługi dodatkowe</h3>
                                <ul className="space-y-3">
                                    <li className="flex justify-between items-center">
                                        <span className="text-gold-500 font-medium">życzenia</span>
                                        <span className="text-gray-400">wycena indywidualna*</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="text-gold-500 font-medium">obiad</span>
                                        <span className="text-gray-400">wycena indywidualna*</span>
                                    </li>
                                </ul>
                                <p className="text-sm text-gray-500 mt-6">
                                    *Stawka zależna od długości grania
                                </p>
                            </div>
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
                            Z przyjemnością uwzględnimy również inne propozycje repertuarowe,
                            dopasowując muzykę do Państwa oczekiwań oraz charakteru ceremonii.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://pteii1sujfy8yxfh.public.blob.vercel-storage.com/SQ_Oferta_s%CC%81lubna.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 btn-premium text-gold-500 font-medium uppercase tracking-widest rounded-full"
                            >
                                Pobierz ofertę ślubną (PDF)
                            </a>
                            <Link
                                href="/#contact"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-black font-medium uppercase tracking-widest hover:shadow-[0_0_30px_rgba(139,115,85,0.3)] transition-all duration-300 rounded-full"
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
