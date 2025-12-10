import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black py-16 px-6 border-t border-neutral-800">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">

                {/* Brand */}
                <div>
                    <h3 className="text-2xl font-serif text-white tracking-widest mb-2">
                        SFORZA<span className="text-gold-500">.</span>
                    </h3>
                    <p className="text-neutral-500 text-sm">
                        © {new Date().getFullYear()} Sforza Quartet. All rights reserved.
                    </p>
                </div>

                {/* Contact */}
                <div className="flex flex-col items-center md:items-end space-y-2">
                    <a href="mailto:kontakt@sforza.pl" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                        <Mail size={16} /> kontakt@sforza.pl
                    </a>
                    <a href="tel:+48123456789" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                        <Phone size={16} /> +48 123 456 789
                    </a>
                </div>

                {/* Socials */}
                <div className="flex gap-6">
                    <a href="#" className="text-neutral-500 hover:text-gold-500 transition-colors">
                        <Instagram size={24} />
                    </a>
                    <a href="#" className="text-neutral-500 hover:text-gold-500 transition-colors">
                        <Facebook size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
