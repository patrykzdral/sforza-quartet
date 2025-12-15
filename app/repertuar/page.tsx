"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Music, Church } from "lucide-react";

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

export default function RepertuarPage() {
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
                            className="inline-flex items-center gap-2 text-gold-500 hover:text-white transition-colors mb-8 text-sm uppercase tracking-widest"
                        >
                            <ArrowLeft size={18} /> Powrót
                        </Link>

                        <h1 className="text-4xl md:text-6xl font-serif mb-6">
                            Muzyka <span className="italic text-neutral-400">Ślubna</span>
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
                                <Church className="text-gold-500" size={28} />
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

                        <div className="bg-black/50 border border-neutral-800 rounded-lg p-8">
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
            <section className="py-12 px-6 md:px-12 bg-black border-t border-neutral-800">
                <div className="container mx-auto max-w-5xl">
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
            <section className="py-20 px-6 md:px-12 bg-neutral-900">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Music className="text-gold-500" size={28} />
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
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="bg-black/50 border border-neutral-800 hover:border-gold-500/30 transition-colors p-5 rounded-lg group"
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

            {/* Final Note */}
            <section className="py-16 px-6 md:px-12 bg-black border-t border-neutral-800">
                <div className="container mx-auto max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto mb-8">
                            Z przyjemnością uwzględnimy również inne propozycje repertuarowe,
                            dopasowując muzykę do Państwa oczekiwań oraz charakteru ceremonii.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-black font-medium uppercase tracking-widest hover:bg-gold-400 transition-colors rounded"
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
