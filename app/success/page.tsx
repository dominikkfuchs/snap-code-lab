"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, BookOpen, MessageCircle } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function SuccessContent() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get("session_id");

    useEffect(() => {
        // Fire confetti on mount
        const duration = 3000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ["#F97316", "#06B6D4", "#FBBF24", "#10B981"],
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ["#F97316", "#06B6D4", "#FBBF24", "#10B981"],
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };

        frame();
    }, []);

    return (
        <main className="min-h-screen bg-[#0F172A]">
            <Navbar />

            <section className="pt-32 pb-24 flex items-center justify-center min-h-[80vh]">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#10B981]/10 mb-6">
                            <CheckCircle2 className="w-10 h-10 text-[#10B981]" />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8FAFC] font-heading"
                    >
                        🎉 You&apos;re in! Welcome to Snap Code Lab.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-4 text-lg text-[#94A3B8]"
                    >
                        Your purchase was successful. Get ready to start building.
                    </motion.p>

                    {sessionId && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-2 text-xs text-[#64748B]"
                        >
                            Order reference: {sessionId.slice(0, 20)}...
                        </motion.p>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
                    >
                        {[
                            {
                                icon: <Mail className="w-5 h-5" />,
                                title: "Check Your Email",
                                desc: "We've sent you a confirmation and access details.",
                            },
                            {
                                icon: <BookOpen className="w-5 h-5" />,
                                title: "Access Your Course",
                                desc: "Jump right in and start learning immediately.",
                            },
                            {
                                icon: <MessageCircle className="w-5 h-5" />,
                                title: "Join the Community",
                                desc: "Connect with fellow students on Discord.",
                            },
                        ].map((step, i) => (
                            <div
                                key={i}
                                className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center"
                            >
                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#06B6D4]/10 text-[#06B6D4] mb-3">
                                    {step.icon}
                                </div>
                                <h3 className="text-sm font-semibold text-[#F8FAFC] mb-1">
                                    {step.title}
                                </h3>
                                <p className="text-xs text-[#94A3B8]">{step.desc}</p>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="mt-10"
                    >
                        <Link
                            href="/courses"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-xl text-base transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/25"
                        >
                            Go to My Course →
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default function SuccessPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen bg-[#0F172A] flex items-center justify-center">
                    <div className="text-[#94A3B8]">Loading...</div>
                </div>
            }
        >
            <SuccessContent />
        </Suspense>
    );
}
