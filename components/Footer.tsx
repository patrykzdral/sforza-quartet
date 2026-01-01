import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-charcoal py-12 px-6">
            {/* Top gradient border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/40 to-transparent" />

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

                {/* Brand - Left */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-2xl font-serif text-white tracking-widest flex items-center gap-1">
                        SFORZA<span className="text-rose-gold text-3xl">.</span>
                    </h3>
                    <p className="text-white/40 text-xs mt-2">
                        Copyright © {new Date().getFullYear()} Sforza Quartet. Wszelkie prawa zastrzeżone.
                    </p>
                </div>

                {/* Contact & Social Icons - Right */}
                <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-6">
                    {/* Contact Links */}
                    <div className="flex flex-col items-center gap-3 md:flex-row md:gap-6">
                        <a href="mailto:sforzaquartet@gmail.com"
                            className="group flex items-center gap-2 text-white/50 hover:text-rose-gold transition-all duration-300 text-sm">
                            <span className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-rose-gold/30 group-hover:bg-rose-gold/10 transition-all">
                                <Mail size={14} />
                            </span>
                            <span className="group-hover:translate-x-1 transition-transform">sforzaquartet@gmail.com</span>
                        </a>
                        <a href="tel:+48796338875"
                            className="group flex items-center gap-2 text-white/50 hover:text-rose-gold transition-all duration-300 text-sm">
                            <span className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-rose-gold/30 group-hover:bg-rose-gold/10 transition-all">
                                <Phone size={14} />
                            </span>
                            <span className="group-hover:translate-x-1 transition-transform">+48 796 338 875</span>
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        <a href="https://www.facebook.com/profile.php?id=61582079500417" target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-rose-gold hover:border-rose-gold/30 hover:bg-rose-gold/10 hover:shadow-[0_0_20px_rgba(183,110,121,0.2)] transition-all duration-300"
                            aria-label="Facebook">
                            <FaFacebookF size={16} />
                        </a>
                        <a href="https://www.instagram.com/sforza_quartet/" target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-rose-gold hover:border-rose-gold/30 hover:bg-rose-gold/10 hover:shadow-[0_0_20px_rgba(183,110,121,0.2)] transition-all duration-300"
                            aria-label="Instagram">
                            <FaInstagram size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
