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
                            Śluby <span className="text-burgundy">Kościelne</span>
                        </h1>

                        <p className="text-xl text-charcoal/60 font-light leading-relaxed max-w-3xl">
                            Ślub to wyjątkowy moment, pełen wzruszeń i symboliki. Delikatne, eleganckie
                            brzmienie Sforza Quartet nada ceremonii niepowtarzalny charakter i w naturalny
                            sposób podkreśli podniosłość chwili. Muzyka wykonywana na żywo tworzy atmosferę,
                            którą Wasi goście zapamiętają na długo.
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
                                    <Church className="text-burgundy" size={24} />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif text-charcoal">Oprawa Mszy Świętej</h2>
                            </div>
                            <p className="text-charcoal/60 font-light leading-relaxed mb-6">
                                Podczas Mszy Świętej możemy wykonać do 5 utworów. Repertuar dobieramy
                                z poszanowaniem charakteru miejsca oraz zasad liturgii. Dzięki naszemu
                                doświadczeniu chętnie doradzimy i pomożemy w wyborze muzyki odpowiedniej
                                do poszczególnych momentów ceremonii.
                            </p>
                            <p className="text-charcoal/60 font-light leading-relaxed">
                                Najczęściej oprawa muzyczna obejmuje następujące części Mszy Świętej:
                            </p>
                        </div>

                        <div className="card-modern rounded-2xl p-8">
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
                                        <span className="text-burgundy mt-1">•</span>
                                        <span className="text-charcoal font-light">{part}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Note about custom repertoire */}
            <section className="relative py-12 px-6 md:px-12 bg-cream overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-burgundy/15 to-transparent" />

                <div className="container mx-auto max-w-5xl relative">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-charcoal/60 font-light text-center max-w-3xl mx-auto"
                    >
                        Jesteśmy otwarte na indywidualne propozycje repertuarowe, jednak w przypadku
                        odstępstw od standardowego przebiegu liturgii zazwyczaj konieczna jest wcześniejsza
                        zgoda księdza prowadzącego ceremonię. Zawsze prosimy również o poinformowanie
                        organisty o naszym udziale w uroczystości.
                    </motion.p>
                </div>
            </section>

            {/* Pieces List */}
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
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-full icon-container">
                                <Music className="text-burgundy" size={24} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-serif text-charcoal">Najczęściej wybierane utwory</h2>
                        </div>
                        <p className="text-charcoal/60 font-light mb-10">
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
                                    <span className="text-burgundy text-sm font-medium block mb-1">
                                        {piece.composer}
                                    </span>
                                    <span className="text-charcoal font-light group-hover:text-burgundy transition-colors">
                                        {piece.title}
                                    </span>
                                </motion.div>
                            ))}
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
