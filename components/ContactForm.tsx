"use client";

import { useState, FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Nie udało się wysłać wiadomości");
            }

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus("error");
            setErrorMessage(
                error instanceof Error ? error.message : "Wystąpił nieoczekiwany błąd"
            );
        }
    };

    if (status === "success") {
        return (
            <div className="bg-neutral-900/50 p-8 md:p-12 border border-neutral-800 flex flex-col items-center justify-center min-h-[400px]">
                <div className="text-center space-y-4">
                    <div className="text-gold-500 text-5xl mb-4">✓</div>
                    <h3 className="text-2xl font-serif text-white">
                        Dziękujemy za wiadomość!
                    </h3>
                    <p className="text-gray-400">
                        Odpowiemy najszybciej jak to możliwe.
                    </p>
                    <button
                        onClick={() => setStatus("idle")}
                        className="mt-6 text-gold-500 hover:text-white text-sm uppercase tracking-widest transition-colors"
                    >
                        Wyślij kolejną wiadomość →
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-neutral-900/50 p-8 md:p-12 border border-neutral-800">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm text-neutral-500 mb-2 uppercase tracking-wider">
                        Imię i Nazwisko
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-black border-b border-neutral-700 p-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
                        disabled={status === "loading"}
                    />
                </div>
                <div>
                    <label className="block text-sm text-neutral-500 mb-2 uppercase tracking-wider">
                        Email
                    </label>
                    <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-black border-b border-neutral-700 p-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
                        disabled={status === "loading"}
                    />
                </div>
                <div>
                    <label className="block text-sm text-neutral-500 mb-2 uppercase tracking-wider">
                        Wiadomość
                    </label>
                    <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full bg-black border-b border-neutral-700 p-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
                        disabled={status === "loading"}
                    />
                </div>

                {status === "error" && (
                    <div className="text-red-400 text-sm">{errorMessage}</div>
                )}

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-white text-black py-4 font-serif text-lg hover:bg-gold-500 hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === "loading" ? "Wysyłanie..." : "Wyślij wiadomość"}
                </button>
            </form>
        </div>
    );
}
