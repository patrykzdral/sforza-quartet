export default function Footer() {
    return (
        <footer className="bg-black py-16 px-6 border-t border-neutral-800">
            <div className="container mx-auto flex flex-col items-center text-center">

                {/* Brand */}
                <div>
                    <h3 className="text-2xl font-serif text-white tracking-widest mb-2">
                        SFORZA<span className="text-gold-500">.</span>
                    </h3>
                    <p className="text-neutral-500 text-sm">
                        Copyright © {new Date().getFullYear()} Sforza Quartet. Wszelkie prawa zastrzeżone.
                    </p>
                </div>
            </div>
        </footer>
    );
}
