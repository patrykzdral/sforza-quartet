import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black py-6 px-6 border-t border-neutral-800">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Brand - Left */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-xl font-serif text-white tracking-widest">
                        SFORZA<span className="text-gold-500">.</span>
                    </h3>
                    <p className="text-neutral-500 text-xs">
                        Copyright © {new Date().getFullYear()} Sforza Quartet. Wszelkie prawa zastrzeżone.                    </p>
                </div>

                {/* Contact & Social Icons - Right */}
                <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-4">
                    {/* Contact Links */}
                    <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
                        <a href="mailto:sforzaquartet@gmail.com"
                            className="flex items-center gap-2 text-neutral-400 hover:text-gold-500 transition-colors text-sm">
                            <Mail size={18} />
                            <span>sforzaquartet@gmail.com</span>
                        </a>
                        <a href="tel:+48796338875"
                            className="flex items-center gap-2 text-neutral-400 hover:text-gold-500 transition-colors text-sm">
                            <Phone size={18} />
                            <span>+48 796 338 875</span>
                        </a>
                    </div>
                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        <a href="https://www.facebook.com/profile.php?id=61582079500417" target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-neutral-600 flex items-center justify-center text-neutral-400 hover:text-gold-500 hover:border-gold-500 transition-colors"
                            aria-label="Facebook">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="https://www.instagram.com/sforza_quartet/" target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-neutral-600 flex items-center justify-center text-neutral-400 hover:text-gold-500 hover:border-gold-500 transition-colors"
                            aria-label="Instagram">
                            <FaInstagram size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
