"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function CancelContent() {
    const searchParams = useSearchParams();
    const slug = searchParams.get("slug");

    return (
        <main className="min-h-screen bg-[#0F172A]">
            <Navbar />

            <section className="pt-32 pb-24 flex items-center justify-center min-h-[80vh]">
                <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F97316]/10 mb-6">
                            <span className="text-4xl">👋</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] font-heading"
                    >
                        No worries — your spot is still waiting.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="mt-4 text-lg text-[#94A3B8]"
                    >
                        Take your time. When you&apos;re ready, we&apos;ll be here.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        {slug && (
                            <Link
                                href={`/courses/${slug}`}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-xl text-base transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/25"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to Course
                            </Link>
                        )}
                        <Link
                            href="/courses"
                            className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-[#F8FAFC] hover:bg-white/5 font-semibold rounded-xl text-base transition-all duration-200"
                        >
                            <BookOpen className="w-4 h-4" />
                            Browse Other Courses
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default function CancelPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen bg-[#0F172A] flex items-center justify-center">
                    <div className="text-[#94A3B8]">Loading...</div>
                </div>
            }
        >
            <CancelContent />
        </Suspense>
    );
}
