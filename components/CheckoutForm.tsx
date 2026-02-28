"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Lock,
    ShieldCheck,
    CreditCard,
    ArrowLeft,
    Wallet,
    Smartphone,
    CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import type { Course } from "@/data/courses";

interface CheckoutFormProps {
    course: Course;
}

const paymentMethods = [
    {
        id: "card",
        label: "Credit Card",
        description: "Visa, Mastercard, Amex",
        icon: <CreditCard className="w-5 h-5" />,
    },
    {
        id: "applepay",
        label: "Apple Pay",
        description: "Fast & secure",
        icon: <Smartphone className="w-5 h-5" />,
    },
    {
        id: "googlepay",
        label: "Google Pay",
        description: "One-tap checkout",
        icon: <Wallet className="w-5 h-5" />,
    },
];

export default function CheckoutForm({ course }: CheckoutFormProps) {
    const [isProcessing, setIsProcessing] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedPayment, setSelectedPayment] = useState("card");

    const price = course.priceDiscounted ?? course.priceOriginal ?? 0;
    const originalPrice = course.priceOriginal ?? 0;
    const hasDiscount = !!course.priceDiscounted;
    const savings = hasDiscount ? originalPrice - price : 0;
    const discountPercent = hasDiscount
        ? Math.round((savings / originalPrice) * 100)
        : 0;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!fullName.trim() || !email.trim()) {
            alert("Please fill in all fields.");
            return;
        }

        setIsProcessing(true);
        try {
            const res = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    priceId: course.stripePriceId,
                    courseSlug: course.slug,
                    courseName: course.title,
                    customerName: fullName.trim(),
                    customerEmail: email.trim(),
                }),
            });

            if (!res.ok) {
                const errorData = await res
                    .json()
                    .catch(() => ({ error: "Server error" }));
                alert(
                    errorData.error || "Something went wrong. Please try again."
                );
                return;
            }

            const data = await res.json();
            if (data.url) {
                window.location.href = data.url;
            } else if (data.error) {
                alert(data.error);
            }
        } catch (error) {
            console.error("Checkout error:", error);
            alert("Could not connect to the server. Please try again.");
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <section className="pt-28 pb-24 min-h-[80vh]">
            <div className="max-w-xl mx-auto px-4 sm:px-6">
                {/* Back link */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Link
                        href={`/courses/${course.slug}`}
                        className="inline-flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to course
                    </Link>
                </motion.div>

                {/* Checkout card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-2xl bg-white/[0.04] border border-white/[0.08] overflow-hidden"
                    >
                        {/* ── Course & Amount header ── */}
                        <div className="px-6 py-5 bg-gradient-to-r from-[#0F172A] to-[#1E293B] border-b border-white/[0.06]">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium text-[#06B6D4] uppercase tracking-wider mb-1">
                                        Selected Course
                                    </p>
                                    <h2 className="text-lg font-bold text-[#F8FAFC] font-heading">
                                        {course.title}
                                    </h2>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-medium text-[#06B6D4] uppercase tracking-wider mb-1">
                                        Amount
                                    </p>
                                    <p className="text-2xl font-bold text-[#F8FAFC] font-heading">
                                        ${price}
                                        <span className="text-xs font-normal text-[#94A3B8] ml-1">
                                            USD
                                        </span>
                                    </p>
                                </div>
                            </div>
                            {hasDiscount && (
                                <div className="mt-3 flex items-center gap-3">
                                    <span className="text-xs text-[#94A3B8] line-through">
                                        ${originalPrice}
                                    </span>
                                    <span className="text-xs font-medium text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full">
                                        You save ${savings} ({discountPercent}% OFF)
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* ── Form fields ── */}
                        <div className="px-6 py-6 space-y-5">
                            {/* Full Name */}
                            <div>
                                <label
                                    htmlFor="fullName"
                                    className="block text-sm font-medium text-[#CBD5E1] mb-2"
                                >
                                    Full Name
                                </label>
                                <input
                                    id="fullName"
                                    type="text"
                                    placeholder="John Doe"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#F8FAFC] placeholder-[#475569] text-sm focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/50 focus:border-[#06B6D4]/50 transition-all"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-[#CBD5E1] mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#F8FAFC] placeholder-[#475569] text-sm focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/50 focus:border-[#06B6D4]/50 transition-all"
                                />
                            </div>

                            {/* ── Payment method selection ── */}
                            <div>
                                <p className="text-xs font-semibold text-[#06B6D4] uppercase tracking-wider mb-3">
                                    Select Payment Method
                                </p>
                                <div className="space-y-2.5">
                                    {paymentMethods.map((method) => {
                                        const isSelected = selectedPayment === method.id;
                                        return (
                                            <button
                                                key={method.id}
                                                type="button"
                                                onClick={() => setSelectedPayment(method.id)}
                                                className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl border-2 transition-all duration-200 text-left ${isSelected
                                                        ? "border-[#06B6D4] bg-[#06B6D4]/5"
                                                        : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12]"
                                                    }`}
                                            >
                                                {/* Radio indicator */}
                                                <div
                                                    className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${isSelected
                                                            ? "border-[#06B6D4]"
                                                            : "border-[#475569]"
                                                        }`}
                                                >
                                                    {isSelected && (
                                                        <div className="w-2.5 h-2.5 rounded-full bg-[#06B6D4]" />
                                                    )}
                                                </div>

                                                {/* Label */}
                                                <div className="flex-1 min-w-0">
                                                    <p
                                                        className={`text-sm font-semibold ${isSelected
                                                                ? "text-[#F8FAFC]"
                                                                : "text-[#CBD5E1]"
                                                            }`}
                                                    >
                                                        {method.label}
                                                    </p>
                                                    <p className="text-xs text-[#64748B] mt-0.5">
                                                        {method.description}
                                                    </p>
                                                </div>

                                                {/* Icon */}
                                                <div
                                                    className={`shrink-0 ${isSelected
                                                            ? "text-[#06B6D4]"
                                                            : "text-[#475569]"
                                                        }`}
                                                >
                                                    {method.icon}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* ── Trust & Security ── */}
                        <div className="px-6 pb-3">
                            <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl bg-[#10B981]/5 border border-[#10B981]/10">
                                <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                                <p className="text-xs text-[#94A3B8] leading-relaxed">
                                    Your data is securely transmitted using 256-bit SSL
                                    encryption. 14-day money-back guarantee.
                                </p>
                            </div>
                        </div>

                        {/* ── Submit button ── */}
                        <div className="px-6 pb-6 pt-3">
                            <button
                                type="submit"
                                disabled={isProcessing}
                                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#F97316] hover:bg-[#EA580C] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl text-base transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/25 disabled:hover:shadow-none"
                            >
                                {isProcessing ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <Lock className="w-4 h-4" />
                                        Pay ${price} — Secure Checkout
                                    </>
                                )}
                            </button>
                        </div>

                        {/* ── Legal links ── */}
                        <div className="px-6 pb-5">
                            <p className="text-[11px] text-[#64748B] text-center leading-relaxed">
                                By completing this purchase you agree to our{" "}
                                <Link
                                    href="/terms"
                                    className="text-[#06B6D4] hover:underline"
                                    target="_blank"
                                >
                                    Terms of Service
                                </Link>
                                ,{" "}
                                <Link
                                    href="/privacy"
                                    className="text-[#06B6D4] hover:underline"
                                    target="_blank"
                                >
                                    Privacy Policy
                                </Link>
                                , and{" "}
                                <Link
                                    href="/refund"
                                    className="text-[#06B6D4] hover:underline"
                                    target="_blank"
                                >
                                    Refund Policy
                                </Link>
                                .
                            </p>
                        </div>
                    </form>

                    {/* Payment logos below the card */}
                    <div className="mt-5 flex items-center justify-center gap-3">
                        <span className="text-[10px] text-[#475569] uppercase tracking-wider">
                            Powered by
                        </span>
                        <span className="text-xs font-semibold text-[#94A3B8]">
                            Stripe
                        </span>
                        <span className="text-[#475569]">·</span>
                        <div className="flex items-center gap-1.5">
                            {["Visa", "MC", "Amex"].map((card) => (
                                <span
                                    key={card}
                                    className="px-1.5 py-0.5 text-[9px] font-medium border border-white/[0.06] rounded bg-white/[0.02] text-[#64748B]"
                                >
                                    {card}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
