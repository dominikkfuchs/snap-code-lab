"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
    name: string;
    location: string;
    course: string;
    avatar: string;
    quote: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Sarah K.",
        location: "New York",
        course: "HTML & CSS Mastery",
        avatar: "https://i.pravatar.cc/150?img=5",
        quote:
            "I built my freelance portfolio in week 2. Already landed my first client.",
    },
    {
        name: "Marcus T.",
        location: "London",
        course: "Python for Beginners",
        avatar: "https://i.pravatar.cc/150?img=12",
        quote:
            "Best $59 I have ever spent. The projects are actually fun.",
    },
    {
        name: "Priya M.",
        location: "Toronto",
        course: "HTML & CSS Mastery",
        avatar: "https://i.pravatar.cc/150?img=47",
        quote:
            "Tried 3 other platforms. Snap Code Lab is the only one that made it click.",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="relative py-24 sm:py-32">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#06B6D4]/[0.02] to-transparent pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8FAFC] font-heading">
                        What Students Say
                    </h2>
                    <p className="mt-4 text-lg text-[#94A3B8] max-w-2xl mx-auto">
                        Real results from real people. No fake reviews, ever.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Quote icon */}
                            <Quote className="w-8 h-8 text-[#F97316]/20 mb-4" />

                            {/* Stars */}
                            <div className="flex items-center gap-0.5 mb-4">
                                {Array.from({ length: 5 }).map((_, j) => (
                                    <Star
                                        key={j}
                                        className="w-4 h-4 text-[#F97316] fill-[#F97316]"
                                    />
                                ))}
                            </div>

                            {/* Quote text */}
                            <p className="text-[#F8FAFC] text-base leading-relaxed mb-6">
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    width={44}
                                    height={44}
                                    className="w-11 h-11 rounded-full object-cover border-2 border-white/10"
                                />
                                <div>
                                    <p className="text-sm font-semibold text-[#F8FAFC]">
                                        {t.name}
                                    </p>
                                    <p className="text-xs text-[#94A3B8]">
                                        {t.location} · {t.course}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
