import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MoveRight, Mail, Phone } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />

      {/* O nas */}
      <Section id="about" dark>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-gold-500 uppercase tracking-widest text-sm">O nas</h3>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Muzyka z Duszą i <br />
              <span className="italic text-neutral-400">Perfekcją Wykonania</span>.
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Sforza Quartet to zespół stworzony z pasji do muzyki kameralnej.
              Łączymy klasyczną elegancję z nowoczesnym podejściem do repertuaru,
              tworząc niezapomnianą oprawę muzyczną dla najważniejszych chwil w Twoim życiu.
            </p>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Nasze doświadczenie sceniczne i bogaty repertuar pozwalają nam dopasować się
              do charakteru każdego wydarzenia — od kameralnych ślubów po wystawne bankiety.
            </p>
          </div>
          <div className="relative aspect-[723/1024] w-full overflow-hidden rounded-sm bg-neutral-900">
            <Image
              src="/images/quartet.svg"
              alt="Sforza Quartet Musicians"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Oferta */}
      <Section id="offer">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-gold-500 uppercase tracking-widest text-sm mb-4">Oferta</h3>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Na Każdą Okazję</h2>
          <p className="text-gray-400 font-light text-lg">
            Oferujemy profesjonalną oprawę muzyczną, która nada Twojemu wydarzeniu
            wyjątkowy prestiż i atmosferę.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Śluby - with download link */}
          <div className="p-8 border border-neutral-800 hover:border-gold-500/50 transition-colors group bg-black/40 flex flex-col">
            <h4 className="text-2xl font-serif mb-4 group-hover:text-gold-500 transition-colors">Śluby</h4>
            <p className="text-gray-400 font-light leading-relaxed mb-6 flex-grow">
              Ceremonie kościelne, cywilne i plenerowe. Tworzymy magiczny nastrój w najważniejszym dniu Waszego życia.
            </p>
            <a
              href="https://pteii1sujfy8yxfh.public.blob.vercel-storage.com/SQ_Oferta_s%CC%81lubna.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-block text-gold-500 hover:text-white text-sm uppercase tracking-widest transition-colors mt-auto"
            >
              Pobierz ofertę ślubną (PDF) →
            </a>
          </div>

          {/* Bankiety */}
          <div className="p-8 border border-neutral-800 hover:border-gold-500/50 transition-colors group bg-black/40 flex flex-col">
            <h4 className="text-2xl font-serif mb-4 group-hover:text-gold-500 transition-colors">Bankiety</h4>
            <p className="text-gray-400 font-light leading-relaxed mb-6 flex-grow">
              Eleganckie tło muzyczne dla wydarzeń firmowych, wernisaży i kolacji biznesowych.
            </p>
            <a
              href="https://pteii1sujfy8yxfh.public.blob.vercel-storage.com/SQ_Oferta_eventowa.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-block text-gold-500 hover:text-white text-sm uppercase tracking-widest transition-colors mt-auto"
            >
              Pobierz ofertę eventową (PDF) →
            </a>
          </div>

          {/* Koncerty */}
          <div className="p-8 border border-neutral-800 hover:border-gold-500/50 transition-colors group bg-black/40 flex flex-col">
            <h4 className="text-2xl font-serif mb-4 group-hover:text-gold-500 transition-colors">Koncerty</h4>
            <p className="text-gray-400 font-light leading-relaxed mb-6 flex-grow">
              Pełnowymiarowe występy artystyczne, od klasyki po aranżacje muzyki rozrywkowej.
            </p>
            <a
              href="https://pteii1sujfy8yxfh.public.blob.vercel-storage.com/SQ_Oferta_eventowa.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-block text-gold-500 hover:text-white text-sm uppercase tracking-widest transition-colors mt-auto"
            >
              Pobierz ofertę eventową (PDF) →
            </a>
          </div>
        </div>
      </Section>

      {/* Repertuar Call to Action */}
      <Section id="repertoire" dark className="border-t border-neutral-900">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Nasz Repertuar</h2>
            <p className="text-xl text-gray-400 font-light">
              Od Bacha i Mozarta, przez muzykę filmową, aż po współczesne przeboje pop i rock w smyczkowych aranżacjach.
              Wierzymy, że muzyka nie ma granic.
            </p>
          </div>
          <a
            href="#contact"
            className="group flex items-center gap-4 text-gold-400 text-lg tracking-widest uppercase hover:text-white transition-colors"
          >
            Zobacz pełną listę <MoveRight className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </Section>

      {/* Kontakt */}
      <Section id="contact">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-gold-500 uppercase tracking-widest text-sm mb-4">Kontakt</h3>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 text-balance">
              Zagrajmy razem.
            </h2>
            <p className="text-gray-400 text-lg font-light mb-8 max-w-md">
              Jeśli planujesz wydarzenie i szukasz wyjątkowej oprawy muzycznej, napisz do nas.
              Chętnie odpowiemy na wszystkie pytania.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a href="tel:+48796338875" className="flex items-center gap-3 text-neutral-300 hover:text-gold-500 transition-colors">
                <Phone size={20} /> +48 796 338 875
              </a>
              <a href="mailto:sforzaquartet@gmail.com" className="flex items-center gap-3 text-neutral-300 hover:text-gold-500 transition-colors">
                <Mail size={20} /> sforzaquartet@gmail.com
              </a>
              <div className="flex gap-4 pt-2">
                <a href="https://www.instagram.com/sforza_quartet/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-gold-500 transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61582079500417" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-gold-500 transition-colors">
                  <FaFacebookF size={24} />
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>

      <Footer />
    </main>
  );
}
