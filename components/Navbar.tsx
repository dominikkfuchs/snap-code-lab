"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { label: "Courses", href: "#courses" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Reviews", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-xl md:text-2xl">⚡</span>
                        <span className="text-lg md:text-xl font-bold text-[#F8FAFC] tracking-tight font-heading">
                            Snap Code Lab
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-200 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F97316] transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <a
                            href="#courses"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
                        >
                            Start Learning
                            <span className="text-base">→</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[#0F172A]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-4 py-3 text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5 rounded-lg transition-all text-sm"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="pt-2">
                                <a
                                    href="#courses"
                                    onClick={() => setMobileOpen(false)}
                                    className="block w-full text-center px-4 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-xl transition-all text-sm"
                                >
                                    Start Learning →
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
