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

                        <h1 className="text-4xl md:text-6xl font-serif mb-4">
                            Ceremonie ślubne <span className="italic text-neutral-400">poza kościołem</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gold-500 font-light mb-6">
                            (śluby cywilne, plenerowe i humanistyczne)
                        </p>

                        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
                            Oferujemy oprawę muzyczną <strong className="text-white">ceremonii ślubnych odbywających się poza kościołem</strong> –
                            zarówno ślubów cywilnych w sali USC, jak i uroczystości plenerowych oraz ceremonii
                            humanistycznych. Subtelne brzmienie kwartetu smyczkowego tworzy elegancki, uroczysty
                            klimat, który na długo pozostaje w pamięci Państwa oraz gości.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Performance Info */}
            <section className="py-16 px-6 md:px-12 bg-neutral-900">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid md:grid-cols-2 gap-12"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Music className="text-gold-500" size={28} />
                                <h2 className="text-2xl md:text-3xl font-serif">Podczas ceremonii</h2>
                            </div>
                            <p className="text-gray-400 font-light leading-relaxed mb-6">
                                Podczas samej ceremonii wykonujemy zazwyczaj <strong className="text-white">około 3 utworów</strong> –
                                na rozpoczęcie uroczystości, w jej trakcie (np. podczas podpisywania dokumentów
                                lub symbolicznego momentu ceremonii) oraz na zakończenie.
                            </p>
                            <p className="text-gray-400 font-light leading-relaxed">
                                Istnieje również możliwość dodatkowej oprawy muzycznej <strong className="text-white">tuż przed rozpoczęciem ceremonii</strong>,
                                a także <strong className="text-white">podczas składania życzeń</strong>, co pozwala stworzyć spójną i harmonijną całość.
                            </p>
                        </div>

                        <div className="bg-black/50 border border-neutral-800 rounded-lg p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Leaf className="text-gold-500" size={24} />
                                <h3 className="text-xl font-serif text-white">Indywidualny repertuar</h3>
                            </div>
                            <p className="text-gray-400 font-light leading-relaxed">
                                Repertuar ustalamy <strong className="text-white">indywidualnie</strong>, zawsze uwzględniając
                                charakter uroczystości oraz Państwa oczekiwania. Aktualna lista utworów dostępna
                                jest na naszej stronie internetowej w zakładce <Link href="/repertuar" className="text-gold-500 hover:text-gold-400 italic">repertuar</Link> i
                                jest na bieżąco aktualizowana.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Practical Info */}
            <section className="py-16 px-6 md:px-12 bg-black border-t border-neutral-800">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-8">
                            <p className="text-gray-400 font-light leading-relaxed mb-6">
                                Gramy akustycznie, dzięki czemu <strong className="text-white">nie wymagamy nagłośnienia</strong>.
                                Jedynym warunkiem jest zapewnienie odpowiednich warunków dla naszych instrumentów —
                                w przypadku opadów konieczne jest solidne zadaszenie.
                            </p>
                            <p className="text-gray-400 font-light leading-relaxed mb-6">
                                Zawsze prosimy o wcześniejsze poinformowanie <strong className="text-white">osoby prowadzącej ceremonię</strong> o
                                naszej obecności.
                            </p>
                            <p className="text-gray-400 font-light leading-relaxed">
                                W razie pytań pozostajemy <strong className="text-white">do Państwa dyspozycji</strong> (zakładka <Link href="/#contact" className="text-gold-500 hover:text-gold-400 italic">kontakt</Link>).
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-6 md:px-12 bg-neutral-900">
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

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-black/50 border border-neutral-800 rounded-lg p-8">
                                <h3 className="text-xl font-serif text-white mb-4">Ceremonia ślubna</h3>
                                <p className="text-3xl md:text-4xl font-serif text-gold-500">
                                    2500 zł*
                                </p>
                                <p className="text-sm text-gray-500 mt-6 italic">
                                    *Dojazd do 60 km od Wrocławia jest wliczony w cenę, a poza tym zakresem naliczana jest opłata.
                                </p>
                            </div>

                            <div className="bg-black/50 border border-neutral-800 rounded-lg p-8">
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
                                <p className="text-sm text-gray-500 mt-6 italic">
                                    *Stawka zależna od długości grania
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-6 md:px-12 bg-neutral-900">
                <div className="container mx-auto max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto mb-8">
                            Z przyjemnością uwzględnimy również inne propozycje repertuarowe,
                            dopasowując muzykę do Państwa oczekiwań oraz charakteru ceremonii.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://pteii1sujfy8yxfh.public.blob.vercel-storage.com/SQ_Oferta_s%CC%81lubna.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-gold-500 text-gold-500 font-medium uppercase tracking-widest hover:bg-gold-500 hover:text-black transition-colors rounded"
                            >
                                Pobierz ofertę ślubną (PDF)
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
