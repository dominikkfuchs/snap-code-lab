"use client";

import { motion } from "framer-motion";
import { Search, Hammer, Rocket } from "lucide-react";
import { type ReactNode } from "react";

interface Step {
    number: number;
    icon: ReactNode;
    title: string;
    description: string;
}

const steps: Step[] = [
    {
        number: 1,
        icon: <Search className="w-6 h-6" />,
        title: "Pick Your Course",
        description: "Browse and choose the skill you want to master.",
    },
    {
        number: 2,
        icon: <Hammer className="w-6 h-6" />,
        title: "Build Real Projects",
        description: "Follow along and deploy something real.",
    },
    {
        number: 3,
        icon: <Rocket className="w-6 h-6" />,
        title: "Land the Job or Launch Your Idea",
        description: "Use your certificate and portfolio to level up.",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8FAFC] font-heading">
                        How It Works
                    </h2>
                    <p className="mt-4 text-lg text-[#94A3B8] max-w-2xl mx-auto">
                        Three simple steps to transform your career.
                    </p>
                </motion.div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Connection line (desktop only) */}
                    <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-[#F97316]/50 via-[#06B6D4]/50 to-[#10B981]/50" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="relative text-center"
                        >
                            {/* Step number */}
                            <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F97316] to-[#06B6D4] text-white font-bold text-lg mb-6 shadow-lg shadow-orange-500/20">
                                {step.number}
                                <div className="absolute inset-0 rounded-2xl bg-[#0F172A] scale-[0.85] flex items-center justify-center">
                                    <span className="bg-gradient-to-br from-[#F97316] to-[#06B6D4] bg-clip-text text-transparent font-bold text-lg">
                                        {step.number}
                                    </span>
                                </div>
                            </div>

                            {/* Icon */}
                            <div className="flex justify-center mb-4 text-[#06B6D4]">
                                {step.icon}
                            </div>

                            <h3 className="text-xl font-semibold text-[#F8FAFC] mb-3 font-heading">
                                {step.title}
                            </h3>
                            <p className="text-sm text-[#94A3B8] max-w-xs mx-auto leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
