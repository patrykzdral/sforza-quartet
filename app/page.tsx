import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MoveRight, Mail, Phone, Sparkles } from "lucide-react";
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
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-12 bg-gradient-to-r from-gold-500 to-transparent" />
              <h3 className="gradient-text uppercase tracking-[0.3em] text-sm font-medium">O nas</h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
              Muzyka, która <span className="text-gold-500">porusza</span>
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Jesteśmy zawodowymi muzykami, absolwentkami Akademii Muzycznej, dla których granie nie jest
              tylko zawodem, ale przede wszystkim życiem i&nbsp;pasją. Od lat występujemy na scenach,
              w&nbsp;salach koncertowych i&nbsp;podczas uroczystości, tworząc muzykę, która porusza
              i&nbsp;nadaje wydarzeniom wyjątkowy charakter.
            </p>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Nazwa Sforza nie jest przypadkowa. Nawiązuje do królowej Polski, Bony Sforzy – kobiety
              silnej, odważnej i&nbsp;wrażliwej na sztukę. To właśnie ona przywiozła do Polski nowe idee
              i&nbsp;kulturę, nadając im wyjątkowego znaczenia. My także czerpiemy z&nbsp;tej symboliki –
              jesteśmy kobietami, które poprzez muzykę chcą wprowadzać piękno, siłę i&nbsp;emocje
              w&nbsp;chwile, które są dla Was najważniejsze.
            </p>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Sforza Quartet powstał z&nbsp;pragnienia, by dzielić się pięknem muzyki także poza estradą –
              w&nbsp;chwilach najbardziej osobistych i&nbsp;uroczystych. Dlatego gramy na ślubach,
              weselach, bankietach i&nbsp;spotkaniach, gdzie muzyka ma moc wzruszać, podkreślać nastrój
              i&nbsp;sprawiać, że te momenty zostają w&nbsp;pamięci na zawsze.
            </p>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Nasz repertuar obejmuje zarówno klasyczne dzieła mistrzów, jak i&nbsp;muzykę filmową oraz
              aranżacje współczesnych utworów. Zawsze dobieramy go tak, by najlepiej oddawał charakter
              wydarzenia.
            </p>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              W&nbsp;Sforza Quartet stawiamy na profesjonalizm, elegancję i&nbsp;autentyczne emocje.
              Wierzymy, że muzyka, którą gramy, nie tylko tworzy wyjątkową atmosferę, ale też zostaje
              w&nbsp;sercach tych, którzy jej słuchają.
            </p>
          </div>
          <div className="relative aspect-[723/1024] w-full overflow-hidden rounded-lg bg-neutral-900 glow-gold-hover transition-all duration-700">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
            <Image
              src="/images/quartet.svg"
              alt="Sforza Quartet Musicians"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Meet the Musicians */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500/50" />
              <Sparkles className="w-5 h-5 text-gold-500" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500/50" />
            </div>
            <h4 className="gradient-text uppercase tracking-[0.3em] text-sm font-medium">Poznaj nas</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-6 items-start">

            {/* Agata Doszczak */}
            <div className="group relative overflow-hidden rounded-3xl card-modern h-full">
              <div className="flex flex-col sm:flex-row sm:items-start h-full">
                <div className="flex flex-col flex-shrink-0 w-full sm:w-48 sm:mt-14">
                  <div className="relative w-full h-64 sm:h-48 sm:w-48 overflow-hidden bg-neutral-900/50 flex items-center justify-center rounded-3xl">
                    <Image
                      src="/images/Agata_Doszczak.svg"
                      alt="Agata Doszczak"
                      fill
                      className="object-contain object-center p-2 group-hover:scale-105 transition-transform duration-700 rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <a href="https://www.instagram.com/agatadoszczak.violin/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 text-gray-500 hover:text-gold-500 transition-colors text-sm py-3 bg-neutral-900/30">
                    <FaInstagram size={14} /> @agatadoszczak.violin
                  </a>
                </div>
                <div className="p-6 flex flex-col justify-start">
                  <h5 className="text-xl font-serif text-white mb-1 group-hover:text-gold-400 transition-colors">Agata Doszczak</h5>
                  <span className="text-gold-500/80 text-sm uppercase tracking-wider mb-3">Skrzypaczka</span>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    Absolwentka Akademii Muzycznej im. Ignacego Jana Paderewskiego w&nbsp;Poznaniu. Laureatka licznych ogólnopolskich i&nbsp;międzynarodowych konkursów skrzypcowych m.in. Golden Classical Music Awards w&nbsp;Nowym Jorku. Aktywnie koncertuje zarówno jako solistka, jak i&nbsp;kameralistka na scenach polskich i&nbsp;za granicą. Obecnie pełni funkcję pierwszych skrzypiec w&nbsp;Cooperate Orchestra – poznańskiej orkiestrze specjalizującej się w&nbsp;muzyce filmowej. Swoją pasję do muzyki z&nbsp;powodzeniem łączy z&nbsp;działalnością pedagogiczną.
                  </p>
                </div>
              </div>
            </div>

            {/* Pola Czyżewska-Grylak */}
            <div className="group relative overflow-hidden rounded-3xl card-modern h-full">
              <div className="flex flex-col sm:flex-row sm:items-start h-full">
                <div className="flex flex-col flex-shrink-0 w-full sm:w-48 sm:mt-14">
                  <div className="relative w-full h-64 sm:h-48 sm:w-48 overflow-hidden bg-neutral-900/50 flex items-center justify-center rounded-3xl">
                    <Image
                      src="/images/Pola_Czyzewska_Grylak.svg"
                      alt="Pola Czyżewska-Grylak"
                      fill
                      className="object-contain object-center p-2 group-hover:scale-105 transition-transform duration-700 rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <a href="https://www.instagram.com/eva.polart/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 text-gray-500 hover:text-gold-500 transition-colors text-sm py-3 bg-neutral-900/30">
                    <FaInstagram size={14} /> @eva.polart
                  </a>
                </div>
                <div className="p-6 flex flex-col justify-start">
                  <h5 className="text-xl font-serif text-white mb-1 group-hover:text-gold-400 transition-colors">Pola Czyżewska-Grylak</h5>
                  <span className="text-gold-500/80 text-sm uppercase tracking-wider mb-3">Skrzypaczka</span>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    Ukończyła Akademię Muzyczną we Wrocławiu, po czym udała się na asystenturę profesorską do Oviedo w&nbsp;Hiszpanii. Tam kontynuowała rozpoczętą w&nbsp;Polsce ścieżkę pedagogiczną, założyła międzynarodowy duet skrzypcowo-wiolonczelowy, z&nbsp;którym w&nbsp;2025 roku zdobyła nagrodę Grand Prix, a&nbsp;także koncertowała z&nbsp;kwartetami oraz orkiestrami kameralnymi i&nbsp;symfonicznymi. Po powrocie do Polski postanowiła kontynuować swoje zamiłowanie do gry zespołowej oraz działalność pedagogiczną.
                  </p>
                </div>
              </div>
            </div>

            {/* Agata Graczyk */}
            <div className="group relative overflow-hidden rounded-3xl card-modern h-full">
              <div className="flex flex-col sm:flex-row sm:items-start h-full">
                <div className="flex flex-col flex-shrink-0 w-full sm:w-48 sm:mt-14">
                  <div className="relative w-full h-64 sm:h-48 sm:w-48 overflow-hidden bg-neutral-900/50 flex items-center justify-center rounded-3xl">
                    <Image
                      src="/images/Agata_Graczyk.svg"
                      alt="Agata Graczyk"
                      fill
                      className="object-contain object-center p-2 group-hover:scale-105 transition-transform duration-700 rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <a href="https://www.instagram.com/agatagraczyk_conductor/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 text-gray-500 hover:text-gold-500 transition-colors text-sm py-3 bg-neutral-900/30">
                    <FaInstagram size={14} /> @agatagraczyk_conductor
                  </a>
                </div>
                <div className="p-6 flex flex-col justify-start">
                  <h5 className="text-xl font-serif text-white mb-1 group-hover:text-gold-400 transition-colors">Agata Graczyk</h5>
                  <span className="text-gold-500/80 text-sm uppercase tracking-wider mb-3">Altowiolistka</span>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    Altowiolistka, która z&nbsp;czasem zamieniła miejsce w&nbsp;środku orkiestry na podium dyrygenckie. Jako instrumentalistka koncertowała z&nbsp;orkiestrami symfonicznymi i&nbsp;kameralnymi. Dziś coraz częściej można ją spotkać z&nbsp;batutą w&nbsp;ręku – dyryguje orkiestrami filharmonii i&nbsp;oper w&nbsp;całej Polsce. Łączy wrażliwość altowiolistki z&nbsp;energią dyrygentki, wierząc, że dobra muzyka zaczyna się od uważnego słuchania – i&nbsp;siebie nawzajem.
                  </p>
                </div>
              </div>
            </div>



            {/* Ewelina Lachowska */}
            <div className="group relative overflow-hidden rounded-3xl card-modern h-full">
              <div className="flex flex-col sm:flex-row sm:items-start h-full">
                <div className="flex flex-col flex-shrink-0 w-full sm:w-48 sm:mt-14">
                  <div className="relative w-full h-64 sm:h-48 sm:w-48 overflow-hidden bg-neutral-900/50 flex items-center justify-center rounded-3xl">
                    <Image
                      src="/images/Ewelina_Lachowska.svg"
                      alt="Ewelina Lachowska"
                      fill
                      className="object-contain object-center p-2 group-hover:scale-105 transition-transform duration-700 rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <a href="https://www.instagram.com/ewel.lachowska/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 text-gray-500 hover:text-gold-500 transition-colors text-sm py-3 bg-neutral-900/30">
                    <FaInstagram size={14} /> @ewel.lachowska
                  </a>
                </div>
                <div className="p-6 flex flex-col justify-start">
                  <h5 className="text-xl font-serif text-white mb-1 group-hover:text-gold-400 transition-colors">Ewelina Lachowska</h5>
                  <span className="text-gold-500/80 text-sm uppercase tracking-wider mb-3">Wiolonczelistka</span>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    Absolwentka Akademii Muzycznej im. Karola Lipińskiego we Wrocławiu. Wielokrotna uczestniczka International Lutosławski Youth Orchestra. Uczestniczyła w&nbsp;licznych kursach mistrzowskich, m.in. MORAWA Cello Masterclass, Międzynarodowej Akademii Wiolonczelowej, Warsztatach Wiolonczelowych w&nbsp;Augustowie, Międzynarodowym Kursie Mistrzowskim i&nbsp;innych. Miłośniczka muzyki kameralnej i&nbsp;orkiestrowej.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Oferta */}
      <Section id="offer">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500/50" />
            <span className="gradient-text uppercase tracking-[0.3em] text-sm font-medium">Oferta</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Wyjątkowa oprawa <span className="text-gold-500">muzyczna</span>
          </h2>
          <p className="text-gray-400 font-light text-lg mb-4">
            Oferujemy profesjonalną oprawę muzyczną, która nada Twojemu wydarzeniu wyjątkowy charakter i&nbsp;atmosferę.
          </p>
          <p className="text-neutral-600 text-sm">
            Kliknij w kafelek, aby dowiedzieć się więcej
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Śluby kościelne */}
          <a href="/church-weddings"
            className="group relative p-8 rounded-xl card-modern flex flex-col overflow-hidden">
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <h4 className="text-2xl font-serif mb-4 group-hover:text-gold-500 transition-colors flex items-center gap-2">
                Śluby kościelne
                <MoveRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </h4>
              <p className="text-gray-400 font-light leading-relaxed flex-grow">
                Oprawa muzyczna ceremonii kościelnych. Tworzymy magiczny nastrój w najważniejszym dniu
                Waszego życia.
              </p>
            </div>
          </a>

          {/* Ceremonie ślubne poza kościołem */}
          <a href="/civil-weddings"
            className="group relative p-8 rounded-xl card-modern flex flex-col overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <h4 className="text-2xl font-serif mb-2 group-hover:text-gold-500 transition-colors flex items-center gap-2">
                Ceremonie ślubne poza kościołem
                <MoveRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </h4>
              <p className="text-gold-500/60 text-sm mb-3">(śluby cywilne, plenerowe i humanistyczne)</p>
              <p className="text-gray-400 font-light leading-relaxed flex-grow">
                Elegancka oprawa muzyczna ceremonii w&nbsp;USC, plenerze i&nbsp;uroczystości humanistycznych.
              </p>
            </div>
          </a>

          {/* Imprezy okolicznościowe, bankiety, koncerty */}
          <a href="/banquets-and-concerts"
            className="group relative p-8 rounded-xl card-modern flex flex-col overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <h4 className="text-2xl font-serif mb-4 group-hover:text-gold-500 transition-colors flex items-center gap-2">
                Imprezy okolicznościowe
                <MoveRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </h4>
              <p className="text-gray-400 font-light leading-relaxed flex-grow">
                Oprawa muzyczna dla firm, korporacji i&nbsp;instytucji. Eleganckie tło dla wydarzeń
                firmowych, jubileuszy i&nbsp;konferencji.
              </p>
            </div>
          </a>
        </div>
      </Section>

      {/* Repertuar Call to Action */}
      <Section id="repertoire" dark className="border-t-0">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-transparent to-gold-500/5 pointer-events-none" />

          <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 p-8 md:p-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-gold-500 to-transparent" />
                <span className="gradient-text uppercase tracking-[0.3em] text-sm font-medium">Repertuar</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Nasz <span className="text-gold-500">Repertuar</span></h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                Od Bacha i&nbsp;Mozarta, przez muzykę filmową, aż po współczesne przeboje pop i&nbsp;rock
                w&nbsp;smyczkowych aranżacjach.
                Wierzymy, że muzyka nie ma granic.
              </p>
            </div>
            <a
              href="/repertoire"
              className="group flex items-center gap-4 px-8 py-4 btn-premium rounded-full text-gold-400 text-base tracking-widest uppercase hover:text-white transition-colors"
            >
              Zobacz pełną listę <MoveRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </Section>

      {/* Kontakt */}
      <Section id="contact">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-gold-500 to-transparent" />
              <span className="gradient-text uppercase tracking-[0.3em] text-sm font-medium">Kontakt</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 text-balance">
              Zagrajmy <span className="text-gold-500">razem.</span>
            </h2>
            <p className="text-gray-400 text-lg font-light mb-10 max-w-md leading-relaxed">
              Jeśli planujesz wydarzenie i&nbsp;szukasz wyjątkowej oprawy muzycznej, napisz lub zadzwoń do nas.
              Chętnie odpowiemy na wszystkie pytania.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a href="tel:+48796338875"
                className="group flex items-center gap-4 text-neutral-300 hover:text-gold-500 transition-all duration-300">
                <span className="p-3 rounded-full glass border border-neutral-700 group-hover:border-gold-500/50 transition-colors">
                  <Phone size={20} />
                </span>
                <span className="group-hover:translate-x-1 transition-transform">+48 796 338 875</span>
              </a>
              <a href="mailto:sforzaquartet@gmail.com"
                className="group flex items-center gap-4 text-neutral-300 hover:text-gold-500 transition-all duration-300">
                <span className="p-3 rounded-full glass border border-neutral-700 group-hover:border-gold-500/50 transition-colors">
                  <Mail size={20} />
                </span>
                <span className="group-hover:translate-x-1 transition-transform">sforzaquartet@gmail.com</span>
              </a>
              <div className="flex gap-3 pt-4">
                <a href="https://www.instagram.com/sforza_quartet/" target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass border border-neutral-700 text-neutral-400 hover:text-gold-500 hover:border-gold-500/50 hover:shadow-[0_0_20px_rgba(139,115,85,0.15)] transition-all duration-300">
                  <FaInstagram size={22} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61582079500417" target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass border border-neutral-700 text-neutral-400 hover:text-gold-500 hover:border-gold-500/50 hover:shadow-[0_0_20px_rgba(139,115,85,0.15)] transition-all duration-300">
                  <FaFacebookF size={22} />
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
