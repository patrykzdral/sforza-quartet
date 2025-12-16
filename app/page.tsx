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
            <h3 className="text-gold-500 uppercase tracking-widest text-3xl mb-6">O nas</h3>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Jesteśmy zawodowymi muzykami, absolwentkami Akademii Muzycznej, dla których granie nie jest tylko zawodem, ale przede wszystkim życiem i&nbsp;pasją. Od lat występujemy na scenach, w&nbsp;salach koncertowych i&nbsp;podczas uroczystości, tworząc muzykę, która porusza i&nbsp;nadaje wydarzeniom wyjątkowy charakter.
            </p>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Nazwa Sforza nie jest przypadkowa. Nawiązuje do królowej Polski, Bony Sforzy – kobiety silnej, odważnej i&nbsp;wrażliwej na sztukę. To właśnie ona przywiozła do Polski nowe idee i&nbsp;kulturę, nadając im wyjątkowego znaczenia. My także czerpiemy z&nbsp;tej symboliki – jesteśmy kobietami, które poprzez muzykę chcą wprowadzać piękno, siłę i&nbsp;emocje w&nbsp;chwile, które są dla Was najważniejsze.
            </p>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Sforza Quartet powstał z&nbsp;pragnienia, by dzielić się pięknem muzyki także poza estradą – w&nbsp;chwilach najbardziej osobistych i&nbsp;uroczystych. Dlatego gramy na ślubach, weselach, bankietach i&nbsp;spotkaniach, gdzie muzyka ma moc wzruszać, podkreślać nastrój i&nbsp;sprawiać, że te momenty zostają w&nbsp;pamięci na zawsze.
            </p>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Nasz repertuar obejmuje zarówno klasyczne dzieła mistrzów, jak i&nbsp;muzykę filmową oraz aranżacje współczesnych utworów. Zawsze dobieramy go tak, by najlepiej oddawał charakter wydarzenia.
            </p>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              W&nbsp;Sforza Quartet stawiamy na profesjonalizm, elegancję i&nbsp;autentyczne emocje. Wierzymy, że muzyka, którą gramy, nie tylko tworzy wyjątkową atmosferę, ale też zostaje w&nbsp;sercach tych, którzy jej słuchają.
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
          <h3 className="text-gold-500 uppercase tracking-widest text-3xl mb-6">Oferta</h3>
          <p className="text-gray-400 font-light text-lg mb-4">
            Oferujemy profesjonalną oprawę muzyczną, która nada Twojemu wydarzeniu
            wyjątkowy prestiż i atmosferę.
          </p>
          <p className="text-neutral-500 text-sm italic">
            Kliknij w kafelek, aby dowiedzieć się więcej →
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Śluby kościelne */}
          <a href="/church-weddings" className="p-8 border border-neutral-800 hover:border-gold-500/50 transition-colors group bg-black/40 flex flex-col">
            <h4 className="text-2xl font-serif mb-4 group-hover:text-gold-500 transition-colors">Śluby kościelne →</h4>
            <p className="text-gray-400 font-light leading-relaxed flex-grow">
              Oprawa muzyczna ceremonii kościelnych. Tworzymy magiczny nastrój w najważniejszym dniu Waszego życia.
            </p>
          </a>

          {/* Ceremonie ślubne poza kościołem */}
          <a href="/civil-weddings" className="p-8 border border-neutral-800 hover:border-gold-500/50 transition-colors group bg-black/40 flex flex-col">
            <h4 className="text-2xl font-serif mb-2 group-hover:text-gold-500 transition-colors">Ceremonie ślubne poza kościołem →</h4>
            <p className="text-gold-500/70 text-sm mb-3">(śluby cywilne, plenerowe i humanistyczne)</p>
            <p className="text-gray-400 font-light leading-relaxed flex-grow">
              Elegancka oprawa muzyczna ceremonii w USC, plenerze i uroczystości humanistycznych.
            </p>
          </a>

          {/* Imprezy okolicznościowe, bankiety, koncerty */}
          <a href="/banquets-and-concerts" className="p-8 border border-neutral-800 hover:border-gold-500/50 transition-colors group bg-black/40 flex flex-col">
            <h4 className="text-2xl font-serif mb-4 group-hover:text-gold-500 transition-colors">Imprezy okolicznościowe, bankiety, koncerty →</h4>
            <p className="text-gray-400 font-light leading-relaxed flex-grow">
              Oprawa muzyczna dla firm, korporacji i instytucji. Eleganckie tło dla wydarzeń firmowych, jubileuszy i konferencji.
            </p>
          </a>
        </div>
      </Section>

      {/* Repertuar Call to Action */}
      <Section id="repertoire" dark className="border-t border-neutral-900">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Nasz Repertuar</h2>
            <p className="text-xl text-gray-400 font-light">
              Od Bacha i Mozarta, przez muzykę filmową, aż po współczesne przeboje pop i rock w smyczkowych aranżacjach.
              Wierzymy, że muzyka nie ma granic.
            </p>
          </div>
          <a
            href="/repertoire"
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
            <h3 className="text-gold-500 uppercase tracking-widest text-3xl mb-6">Kontakt</h3>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 text-balance">
              Zagrajmy razem.
            </h2>
            <p className="text-gray-400 text-lg font-light mb-8 max-w-md">
              Jeśli planujesz wydarzenie i szukasz wyjątkowej oprawy muzycznej, napisz do nas.
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
