"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Music, Church, Banknote } from "lucide-react";

const ceremonyParts = [
    "Wejście do kościoła",
    "Ofiarowanie",
    "Komunia Święta",
    "Podpisywanie dokumentów (w przypadku ślubu konkordatowego)",
    "Wyjście z kościoła",
];

const pieces = [
    { composer: "R. Wagner", title: "Marsz weselny" },
    { composer: "F. Mendelssohn-Bartholdy", title: "Marsz weselny" },
    { composer: "F. Schubert", title: "Ave Maria" },
    { composer: "G. Caccini", title: "Ave Maria" },
    { composer: "J. S. Bach / Ch. Gounod", title: "Ave Maria" },
    { composer: "W. Gomes", title: "Ave Maria" },
    { composer: "J. S. Bach", title: "Aria na strunie G (z Suity orkiestrowej D-dur)" },
    { composer: "J. S. Bach", title: "Jesu, Joy of Man's Desiring" },
    { composer: "L. Cohen", title: "Hallelujah" },
    { composer: "C. Franck", title: "Panis Angelicus" },
    { composer: "W. A. Mozart", title: "Ave Verum Corpus" },
    { composer: "E. Morricone", title: "Obój Gabriela (temat z filmu Misja)" },
    { composer: "J. Pachelbel", title: "Kanon D-dur" },
    { composer: "R. Schumann", title: "Marzenie" },
    { composer: "G. Tartini", title: "Cantabile" },
    { composer: "A. Vivaldi", title: 'Largo z „Zimy" (Cztery pory roku)' },
];

export default function ChurchWeddings() {
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

                        <h1 className="text-4xl md:text-6xl font-serif mb-6">
                            Śluby <span className="text-gold-500">Kościelne</span>
                        </h1>

                        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
                            Ślub to wyjątkowy moment, pełen wzruszeń i symboliki. Delikatne, eleganckie
                            brzmienie Sforza Quartet nada ceremonii niepowtarzalny charakter i w naturalny
                            sposób podkreśli podniosłość chwili. Muzyka wykonywana na żywo tworzy atmosferę,
                            którą Wasi goście zapamiętają na długo.
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
                                    <Church className="text-gold-500" size={24} />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif">Oprawa Mszy Świętej</h2>
                            </div>
                            <p className="text-gray-400 font-light leading-relaxed mb-6">
                                Podczas Mszy Świętej możemy wykonać do 5 utworów. Repertuar dobieramy
                                z poszanowaniem charakteru miejsca oraz zasad liturgii. Dzięki naszemu
                                doświadczeniu chętnie doradzimy i pomożemy w wyborze muzyki odpowiedniej
                                do poszczególnych momentów ceremonii.
                            </p>
                            <p className="text-gray-400 font-light leading-relaxed">
                                Najczęściej oprawa muzyczna obejmuje następujące części Mszy Świętej:
                            </p>
                        </div>

                        <div className="card-modern rounded-xl p-8">
                            <ul className="space-y-4">
                                {ceremonyParts.map((part, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="text-gold-500 mt-1">•</span>
                                        <span className="text-white font-light">{part}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Note about custom repertoire */}
            <section className="relative py-12 px-6 md:px-12 bg-black overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

                <div className="container mx-auto max-w-5xl relative">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-gray-400 font-light text-center max-w-3xl mx-auto"
                    >
                        Jesteśmy otwarte na indywidualne propozycje repertuarowe, jednak w przypadku
                        odstępstw od standardowego przebiegu liturgii zazwyczaj konieczna jest wcześniejsza
                        zgoda księdza prowadzącego ceremonię. Zawsze prosimy również o poinformowanie
                        organisty o naszym udziale w uroczystości.
                    </motion.p>
                </div>
            </section>

            {/* Pieces List */}
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
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-full glass border border-gold-500/30">
                                <Music className="text-gold-500" size={24} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-serif">Najczęściej wybierane utwory</h2>
                        </div>
                        <p className="text-gray-400 font-light mb-10">
                            Istnieje także możliwość oprawy muzycznej podczas składania życzeń.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {pieces.map((piece, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.03 }}
                                    className="card-modern p-5 rounded-xl group"
                                >
                                    <span className="text-gold-500 text-sm font-medium block mb-1">
                                        {piece.composer}
                                    </span>
                                    <span className="text-white font-light group-hover:text-gold-400 transition-colors">
                                        {piece.title}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="relative py-12 px-6 md:px-12 bg-black overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

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

            {/* Final Note */}
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
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-black font-medium uppercase tracking-widest hover:shadow-[0_0_40px_rgba(139,115,85,0.5)] hover:scale-[1.02] transition-all duration-300 rounded-full"
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
