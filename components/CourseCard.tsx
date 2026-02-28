"use client";

import { motion } from "framer-motion";
import { Clock, BookOpen, BarChart3, Star, Lock, ShieldCheck } from "lucide-react";
import Link from "next/link";
import type { Course } from "@/data/courses";

interface CourseCardProps {
    course: Course;
    index: number;
}

export default function CourseCard({ course, index }: CourseCardProps) {
    const badgeColorMap: Record<string, string> = {
        orange: "bg-[#F97316]/10 text-[#F97316] border-[#F97316]/20",
        cyan: "bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/20",
        slate: "bg-white/5 text-[#94A3B8] border-white/10",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20 hover:border-white/[0.12] ${course.comingSoon ? "opacity-75" : ""
                }`}
        >
            {/* Top gradient bar */}
            <div
                className={`h-1 w-full bg-gradient-to-r ${course.badgeColor === "orange"
                    ? "from-[#F97316] to-[#FBBF24]"
                    : course.badgeColor === "cyan"
                        ? "from-[#06B6D4] to-[#3B82F6]"
                        : "from-[#64748B] to-[#94A3B8]"
                    }`}
            />

            <div className="flex flex-col flex-1 p-6">
                {/* Badge */}
                <span
                    className={`self-start inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${badgeColorMap[course.badgeColor]
                        }`}
                >
                    {course.badge}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-xl font-bold text-[#F8FAFC] font-heading">
                    {course.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed flex-1">
                    {course.description}
                </p>

                {/* Stats */}
                {!course.comingSoon && course.duration && (
                    <div className="mt-5 flex items-center gap-4 text-xs text-[#94A3B8]">
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {course.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5" />
                            {course.lessons} lessons
                        </span>
                        <span className="flex items-center gap-1.5">
                            <BarChart3 className="w-3.5 h-3.5" />
                            {course.level}
                        </span>
                    </div>
                )}

                {/* Rating */}
                {!course.comingSoon && course.stars && (
                    <div className="mt-3 flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-3.5 h-3.5 ${i < Math.floor(course.stars!)
                                        ? "text-[#F97316] fill-[#F97316]"
                                        : "text-[#334155]"
                                        }`}
                                />
                            ))}
                        </div>
                        <span className="text-xs text-[#F8FAFC] font-medium">
                            {course.stars}
                        </span>
                        <span className="text-xs text-[#94A3B8]">
                            ({course.reviews?.toLocaleString()} reviews)
                        </span>
                    </div>
                )}

                {/* Price & CTA */}
                <div className="mt-6 pt-5 border-t border-white/[0.06]">
                    {!course.comingSoon ? (
                        <>
                            <div className="flex items-baseline gap-2 mb-4">
                                {course.priceDiscounted ? (
                                    <>
                                        <span className="text-2xl font-bold text-[#F8FAFC] font-heading">
                                            ${course.priceDiscounted}
                                        </span>
                                        <span className="text-sm text-[#94A3B8] line-through">
                                            ${course.priceOriginal}
                                        </span>
                                        <span className="text-xs font-medium text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full">
                                            {Math.round(
                                                ((course.priceOriginal! - course.priceDiscounted) /
                                                    course.priceOriginal!) *
                                                100
                                            )}
                                            % OFF
                                        </span>
                                    </>
                                ) : (
                                    <span className="text-2xl font-bold text-[#F8FAFC] font-heading">
                                        ${course.priceOriginal}
                                    </span>
                                )}
                            </div>

                            <Link
                                href={`/checkout/${course.slug}`}
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25"
                            >
                                {course.cta}
                            </Link>

                            <div className="mt-3 flex items-center justify-center gap-4 text-xs text-[#94A3B8]">
                                <span className="flex items-center gap-1">
                                    <Lock className="w-3 h-3" />
                                    Secure checkout
                                </span>
                                <span className="flex items-center gap-1">
                                    <ShieldCheck className="w-3 h-3" />
                                    14-day guarantee
                                </span>
                            </div>
                        </>
                    ) : (
                        <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/10 text-[#F8FAFC] hover:bg-white/5 font-semibold rounded-xl text-sm transition-all duration-200">
                            {course.cta}
                        </button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
