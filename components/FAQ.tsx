"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: "Do I need any prior experience?",
        answer:
            "No, all courses start from absolute zero. We designed every lesson for complete beginners — if you can use a web browser, you can learn to code with us.",
    },
    {
        question: "How long do I have access?",
        answer:
            "Forever. You get lifetime access with a one-time payment. No subscriptions, no recurring fees. Plus, all future updates to the course are included for free.",
    },
    {
        question: "Is there a refund policy?",
        answer:
            "Yes! We offer a full 14-day money-back guarantee, no questions asked. If the course isn't for you, just email support@snapcodelab.com and we'll refund you immediately.",
    },
    {
        question: "Will I get a certificate?",
        answer:
            "Yes, a verified certificate of completion is issued once you finish the course. You can share it directly on LinkedIn and add it to your resume.",
    },
    {
        question: "How is this different from YouTube tutorials?",
        answer:
            "YouTube is great for random snippets, but it lacks structure. Snap Code Lab gives you a clear learning path, real projects to build, a certificate to earn, and community support — everything you need to go from zero to job-ready.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="relative py-24 sm:py-32">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8FAFC] font-heading">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-lg text-[#94A3B8]">
                        Got questions? We&apos;ve got answers.
                    </p>
                </motion.div>

                <div className="space-y-3">
                    {faqItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-200 text-left group"
                            >
                                <span className="text-sm sm:text-base font-medium text-[#F8FAFC] pr-4">
                                    {item.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-[#94A3B8] shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-5 py-4 text-sm text-[#94A3B8] leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
