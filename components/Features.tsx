"use client";

import { motion } from "framer-motion";
import { Zap, Wrench, Infinity, Trophy } from "lucide-react";
import { type ReactNode } from "react";

interface Feature {
    icon: ReactNode;
    title: string;
    description: string;
    gradient: string;
}

const features: Feature[] = [
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Snap-Sized Lessons",
        description: "Under 10 min per lesson. Learn in your lunch break.",
        gradient: "from-[#F97316] to-[#FBBF24]",
    },
    {
        icon: <Wrench className="w-6 h-6" />,
        title: "Real Projects Only",
        description: "Every course ends with a deployable portfolio project.",
        gradient: "from-[#06B6D4] to-[#3B82F6]",
    },
    {
        icon: <Infinity className="w-6 h-6" />,
        title: "Lifetime Access",
        description: "Pay once. Access forever. Updates always included.",
        gradient: "from-[#8B5CF6] to-[#EC4899]",
    },
    {
        icon: <Trophy className="w-6 h-6" />,
        title: "Verified Certificate",
        description: "Shareable on LinkedIn. Recognized by employers.",
        gradient: "from-[#10B981] to-[#06B6D4]",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function Features() {
    return (
        <section className="relative py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8FAFC] font-heading">
                        Why Snap Code Lab?
                    </h2>
                    <p className="mt-4 text-lg text-[#94A3B8] max-w-2xl mx-auto">
                        We cut the fluff so you can focus on what matters — building real
                        skills, fast.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.title}
                            variants={itemVariants}
                            className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
                        >
                            {/* Icon */}
                            <div
                                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-4`}
                            >
                                {feature.icon}
                            </div>

                            <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2 font-heading">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-[#94A3B8] leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Hover glow */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
