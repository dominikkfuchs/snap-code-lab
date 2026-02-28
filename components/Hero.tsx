"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated gradient mesh background */}
            <div className="absolute inset-0 hero-gradient" />

            {/* Grain overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />

            {/* Floating orbs */}
            <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-[#F97316]/20 rounded-full blur-[120px] animate-float" />
            <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-[#06B6D4]/15 rounded-full blur-[150px] animate-float-delayed" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F97316]/5 rounded-full blur-[200px]" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#F97316]/10 border border-[#F97316]/20 rounded-full text-sm text-[#F97316] font-medium backdrop-blur-sm">
                        🔥 2,400+ students already building
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F8FAFC] leading-[1.1] tracking-tight font-heading"
                >
                    Learn to Code.{" "}
                    <span className="bg-gradient-to-r from-[#F97316] to-[#06B6D4] bg-clip-text text-transparent">
                        Build Real Projects.
                    </span>{" "}
                    Get Hired.
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-6 text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed"
                >
                    No fluff. No filler. Just hands-on courses that take you from blank
                    screen to deployed app — fast.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#courses"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-xl text-base transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-0.5"
                    >
                        Browse Courses
                        <span>→</span>
                    </a>
                    <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-[#F8FAFC] hover:bg-white/5 font-semibold rounded-xl text-base transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm">
                        <span className="text-lg">▶</span>
                        Watch Free Preview
                    </button>
                </motion.div>

                {/* Social proof */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 flex items-center justify-center gap-4"
                >
                    {/* Avatar stack */}
                    <div className="flex -space-x-3">
                        {[5, 12, 47, 33, 26].map((id, i) => (
                            <div
                                key={id}
                                className="relative"
                                style={{ zIndex: 5 - i }}
                            >
                                <img
                                    src={`https://i.pravatar.cc/40?img=${id}`}
                                    alt="Student avatar"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full border-2 border-[#0F172A] object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="text-left">
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star} className="text-[#F97316] text-sm">
                                    ★
                                </span>
                            ))}
                        </div>
                        <p className="text-sm text-[#94A3B8]">
                            <span className="text-[#F8FAFC] font-semibold">2,400+</span>{" "}
                            happy students
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
        </section>
    );
}
