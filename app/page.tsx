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
          <div className="relative aspect-[723/1024] w-full overflow-hidden rounded-sm bg-neutral-900">
            <Image
              src="/images/quartet.svg"
              alt="Sforza Quartet Musicians"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Meet the Musicians */}
        <div className="mt-24">
          <h4 className="text-gold-500 uppercase tracking-widest text-2xl mb-12 text-center">Poznaj nas</h4>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">

            {/* Agata Doszczak */}
            <div className="group relative overflow-hidden rounded-sm bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 hover:border-gold-500/30 transition-all duration-500 h-full">
              <div className="flex flex-col sm:flex-row h-full">
                <div className="relative w-full sm:w-48 aspect-square flex-shrink-0 self-center overflow-hidden bg-neutral-900/50 flex items-center justify-center">
                  <Image
                    src="/images/Agata_Doszczak.svg"
                    alt="Agata Doszczak"
                    fill
                    className="object-contain object-[left_center] p-2 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
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
            <div className="group relative overflow-hidden rounded-sm bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 hover:border-gold-500/30 transition-all duration-500 h-full">
              <div className="flex flex-col sm:flex-row h-full">
                <div className="relative w-full sm:w-48 aspect-square flex-shrink-0 self-center overflow-hidden bg-neutral-900/50 flex items-center justify-center">
                  <Image
                    src="/images/Pola_Czyzewska_Grylak.svg"
                    alt="Pola Czyżewska-Grylak"
                    fill
                    className="object-contain object-[left_center] p-2 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
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
            <div className="group relative overflow-hidden rounded-sm bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 hover:border-gold-500/30 transition-all duration-500 h-full">
              <div className="flex flex-col sm:flex-row h-full">
                <div className="relative w-full sm:w-48 aspect-square flex-shrink-0 self-center overflow-hidden bg-neutral-900/50 flex items-center justify-center">
                  <Image
                    src="/images/Agata_Graczyk.svg"
                    alt="Agata Graczyk"
                    fill
                    className="object-contain object-[left_center] p-2 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
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
            <div className="group relative overflow-hidden rounded-sm bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 hover:border-gold-500/30 transition-all duration-500 h-full">
              <div className="flex flex-col sm:flex-row h-full">
                <div className="relative w-full sm:w-48 aspect-square flex-shrink-0 self-center overflow-hidden bg-neutral-900/50 flex items-center justify-center">
                  <Image
                    src="/images/Ewelina_Lachowska.svg"
                    alt="Ewelina Lachowska"
                    fill
                    className="object-contain object-[left_center] p-2 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
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
          <h3 className="text-gold-500 uppercase tracking-widest text-3xl mb-6">Oferta</h3>
          <p className="text-gray-400 font-light text-lg mb-4">
            Oferujemy profesjonalną oprawę muzyczną, która nada Twojemu wydarzeniu wyjątkowy charakter i&nbsp;atmosferę.
          </p>
          <p className="text-neutral-500 text-sm italic">
            Kliknij w kafelek, aby dowiedzieć się więcej →
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Śluby kościelne */}
          <a href="/church-weddings"
            className="p-8 border border-neutral-800 hover:border-gold-500/50 transition-colors group bg-black/40 flex flex-col">
            <h4 className="text-2xl font-serif mb-4 group-hover:text-gold-500 transition-colors">Śluby
              kościelne →</h4>
            <p className="text-gray-400 font-light leading-relaxed flex-grow">
              Oprawa muzyczna ceremonii kościelnych. Tworzymy magiczny nastrój w najważniejszym dniu
              Waszego życia.
            </p>
          </a>

          {/* Ceremonie ślubne poza kościołem */}
          <a href="/civil-weddings"
            className="p-8 border border-neutral-800 hover:border-gold-500/50 transition-colors group bg-black/40 flex flex-col">
            <h4 className="text-2xl font-serif mb-2 group-hover:text-gold-500 transition-colors">Ceremonie
              ślubne poza kościołem →</h4>
            <p className="text-gold-500/70 text-sm mb-3">(śluby cywilne, plenerowe i humanistyczne)</p>
            <p className="text-gray-400 font-light leading-relaxed flex-grow">
              Elegancka oprawa muzyczna ceremonii w&nbsp;USC, plenerze i&nbsp;uroczystości humanistycznych.
            </p>
          </a>

          {/* Imprezy okolicznościowe, bankiety, koncerty */}
          <a href="/banquets-and-concerts"
            className="p-8 border border-neutral-800 hover:border-gold-500/50 transition-colors group bg-black/40 flex flex-col">
            <h4 className="text-2xl font-serif mb-4 group-hover:text-gold-500 transition-colors">Imprezy
              okolicznościowe, bankiety, koncerty →</h4>
            <p className="text-gray-400 font-light leading-relaxed flex-grow">
              Oprawa muzyczna dla firm, korporacji i&nbsp;instytucji. Eleganckie tło dla wydarzeń
              firmowych, jubileuszy i&nbsp;konferencji.
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
              Od Bacha i&nbsp;Mozarta, przez muzykę filmową, aż po współczesne przeboje pop i&nbsp;rock
              w&nbsp;smyczkowych aranżacjach.
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
              Jeśli planujesz wydarzenie i&nbsp;szukasz wyjątkowej oprawy muzycznej, napisz do nas.
              Chętnie odpowiemy na wszystkie pytania.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a href="tel:+48796338875"
                className="flex items-center gap-3 text-neutral-300 hover:text-gold-500 transition-colors">
                <Phone size={20} /> +48 796 338 875
              </a>
              <a href="mailto:sforzaquartet@gmail.com"
                className="flex items-center gap-3 text-neutral-300 hover:text-gold-500 transition-colors">
                <Mail size={20} /> sforzaquartet@gmail.com
              </a>
              <div className="flex gap-4 pt-2">
                <a href="https://www.instagram.com/sforza_quartet/" target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-gold-500 transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61582079500417" target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-gold-500 transition-colors">
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
