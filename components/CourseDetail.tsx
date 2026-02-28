"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Clock,
    BookOpen,
    BarChart3,
    Star,
    Lock,
    ShieldCheck,
    ChevronDown,
    Award,
    Users,
    CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import type { Course } from "@/data/courses";
import { courses } from "@/data/courses";

interface CourseDetailProps {
    course: Course;
}

export default function CourseDetail({ course }: CourseDetailProps) {
    const [openModule, setOpenModule] = useState<number | null>(0);

    const relatedCourses = courses.filter(
        (c) => c.slug !== course.slug && !c.comingSoon
    );

    return (
        <div className="min-h-screen bg-[#0F172A]">
            {/* Hero */}
            <section className="relative pt-24 pb-16 overflow-hidden">
                <div className="absolute inset-0 hero-gradient opacity-50" />
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#F97316]/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#06B6D4]/10 rounded-full blur-[120px]" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                        {/* Left - Course info */}
                        <div className="lg:col-span-3">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span
                                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${course.badgeColor === "orange"
                                        ? "bg-[#F97316]/10 text-[#F97316] border-[#F97316]/20"
                                        : course.badgeColor === "cyan"
                                            ? "bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/20"
                                            : "bg-white/5 text-[#94A3B8] border-white/10"
                                        }`}
                                >
                                    {course.badge}
                                </span>

                                <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8FAFC] font-heading leading-tight">
                                    {course.title}
                                </h1>

                                <p className="mt-4 text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
                                    {course.longDescription}
                                </p>

                                {/* Stats */}
                                {!course.comingSoon && (
                                    <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-[#94A3B8]">
                                        {course.duration && (
                                            <span className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-[#06B6D4]" />
                                                {course.duration}
                                            </span>
                                        )}
                                        {course.lessons && (
                                            <span className="flex items-center gap-2">
                                                <BookOpen className="w-4 h-4 text-[#06B6D4]" />
                                                {course.lessons} lessons
                                            </span>
                                        )}
                                        {course.level && (
                                            <span className="flex items-center gap-2">
                                                <BarChart3 className="w-4 h-4 text-[#06B6D4]" />
                                                {course.level}
                                            </span>
                                        )}
                                        {course.reviews && (
                                            <span className="flex items-center gap-2">
                                                <Users className="w-4 h-4 text-[#06B6D4]" />
                                                {course.reviews.toLocaleString()} students
                                            </span>
                                        )}
                                    </div>
                                )}

                                {/* Rating */}
                                {course.stars && (
                                    <div className="mt-4 flex items-center gap-2">
                                        <div className="flex items-center gap-0.5">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < Math.floor(course.stars!)
                                                        ? "text-[#F97316] fill-[#F97316]"
                                                        : "text-[#334155]"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm font-medium text-[#F8FAFC]">
                                            {course.stars}
                                        </span>
                                        <span className="text-sm text-[#94A3B8]">
                                            ({course.reviews?.toLocaleString()} reviews)
                                        </span>
                                    </div>
                                )}

                                {/* Instructor */}
                                <div className="mt-8 flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                                    <img
                                        src={course.instructor.avatar}
                                        alt={course.instructor.name}
                                        width={56}
                                        height={56}
                                        className="w-14 h-14 rounded-full object-cover border-2 border-white/10"
                                    />
                                    <div>
                                        <p className="text-sm font-semibold text-[#F8FAFC]">
                                            {course.instructor.name}
                                        </p>
                                        <p className="text-xs text-[#94A3B8] mt-0.5">
                                            {course.instructor.bio}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right - Enroll Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="lg:col-span-2"
                        >
                            <div className="sticky top-24 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
                                {!course.comingSoon ? (
                                    <>
                                        {/* Price */}
                                        <div className="flex items-baseline gap-3 mb-6">
                                            {course.priceDiscounted ? (
                                                <>
                                                    <span className="text-4xl font-bold text-[#F8FAFC] font-heading">
                                                        ${course.priceDiscounted}
                                                    </span>
                                                    <span className="text-lg text-[#94A3B8] line-through">
                                                        ${course.priceOriginal}
                                                    </span>
                                                    <span className="text-sm font-medium text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full">
                                                        {Math.round(
                                                            ((course.priceOriginal! -
                                                                course.priceDiscounted) /
                                                                course.priceOriginal!) *
                                                            100
                                                        )}
                                                        % OFF
                                                    </span>
                                                </>
                                            ) : (
                                                <span className="text-4xl font-bold text-[#F8FAFC] font-heading">
                                                    ${course.priceOriginal}
                                                </span>
                                            )}
                                        </div>

                                        {/* Enroll button */}
                                        <Link
                                            href={`/checkout/${course.slug}`}
                                            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-xl text-base transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/25"
                                        >
                                            Enroll Now →
                                        </Link>

                                        {/* Trust badges */}
                                        <div className="mt-4 space-y-2">
                                            <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                                                <Lock className="w-3.5 h-3.5" />
                                                <span>🔒 Secure checkout powered by Stripe</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                                                <ShieldCheck className="w-3.5 h-3.5" />
                                                <span>
                                                    ✅ 14-day money-back guarantee. No questions asked.
                                                </span>
                                            </div>
                                            <Link
                                                href="/refund"
                                                className="inline-flex items-center gap-1 text-xs text-[#06B6D4] hover:underline mt-1"
                                            >
                                                View Refund Policy →
                                            </Link>
                                        </div>

                                        {/* What's included */}
                                        <div className="mt-6 pt-6 border-t border-white/[0.06]">
                                            <h4 className="text-sm font-semibold text-[#F8FAFC] mb-3">
                                                What&apos;s included:
                                            </h4>
                                            <ul className="space-y-2">
                                                {[
                                                    `${course.duration} of content`,
                                                    `${course.lessons} bite-sized lessons`,
                                                    "Lifetime access",
                                                    "Verified certificate",
                                                    "Real-world projects",
                                                    "Community access",
                                                ].map((item) => (
                                                    <li
                                                        key={item}
                                                        className="flex items-center gap-2 text-sm text-[#94A3B8]"
                                                    >
                                                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-center py-4">
                                        <p className="text-lg font-semibold text-[#F8FAFC] mb-2">
                                            Coming Soon
                                        </p>
                                        <p className="text-sm text-[#94A3B8] mb-4">
                                            Be the first to know when this course launches.
                                        </p>
                                        <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 border border-white/10 text-[#F8FAFC] hover:bg-white/5 font-semibold rounded-xl text-base transition-all duration-200">
                                            Join Waitlist
                                        </button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div >
            </section >

            {/* Curriculum */}
            < section className="py-16 sm:py-24" >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-2 font-heading">
                            Course Curriculum
                        </h2>
                        <p className="text-[#94A3B8] mb-8">
                            {course.curriculum.length} modules ·{" "}
                            {course.curriculum.reduce(
                                (acc, m) => acc + m.lessons.length,
                                0
                            )}{" "}
                            lessons
                        </p>
                    </motion.div>

                    <div className="space-y-3">
                        {course.curriculum.map((module, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
                            >
                                <button
                                    onClick={() =>
                                        setOpenModule(openModule === i ? null : i)
                                    }
                                    className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F97316]/10 text-[#F97316] text-xs font-bold">
                                            {i + 1}
                                        </span>
                                        <span className="text-sm font-medium text-[#F8FAFC]">
                                            {module.title}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs text-[#94A3B8]">
                                            {module.lessons.length} lessons
                                        </span>
                                        <ChevronDown
                                            className={`w-4 h-4 text-[#94A3B8] transition-transform duration-200 ${openModule === i ? "rotate-180" : ""
                                                }`}
                                        />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openModule === i && (
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: "auto" }}
                                            exit={{ height: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 pb-4 pl-16 space-y-2">
                                                {module.lessons.map((lesson, j) => (
                                                    <div
                                                        key={j}
                                                        className="flex items-center gap-3 py-2 text-sm text-[#94A3B8]"
                                                    >
                                                        <BookOpen className="w-3.5 h-3.5 shrink-0" />
                                                        {lesson}
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Instructor section */}
            < section className="py-16 sm:py-24 bg-white/[0.01]" >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-start gap-6 p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
                    >
                        <img
                            src={course.instructor.avatar}
                            alt={course.instructor.name}
                            width={96}
                            height={96}
                            className="w-24 h-24 rounded-2xl object-cover border-2 border-white/10"
                        />
                        <div>
                            <p className="text-xs text-[#06B6D4] font-medium uppercase tracking-wider mb-1">
                                Your Instructor
                            </p>
                            <h3 className="text-xl font-bold text-[#F8FAFC] font-heading">
                                {course.instructor.name}
                            </h3>
                            <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                                {course.instructor.bio}
                            </p>
                            <div className="mt-4 flex items-center gap-4 text-xs text-[#94A3B8]">
                                <span className="flex items-center gap-1">
                                    <Award className="w-3.5 h-3.5 text-[#F97316]" />
                                    8+ years teaching
                                </span>
                                <span className="flex items-center gap-1">
                                    <Users className="w-3.5 h-3.5 text-[#F97316]" />
                                    50,000+ students
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section >

            {/* Related courses */}
            {
                relatedCourses.length > 0 && (
                    <section className="py-16 sm:py-24">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-8 font-heading">
                                You Might Also Like
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {relatedCourses.slice(0, 2).map((c) => (
                                    <Link
                                        key={c.slug}
                                        href={`/courses/${c.slug}`}
                                        className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <span
                                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${c.badgeColor === "orange"
                                                ? "bg-[#F97316]/10 text-[#F97316] border-[#F97316]/20"
                                                : c.badgeColor === "cyan"
                                                    ? "bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/20"
                                                    : "bg-white/5 text-[#94A3B8] border-white/10"
                                                }`}
                                        >
                                            {c.badge}
                                        </span>
                                        <h3 className="mt-3 text-lg font-semibold text-[#F8FAFC] font-heading group-hover:text-[#F97316] transition-colors">
                                            {c.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-[#94A3B8]">
                                            {c.description}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )
            }
        </div >
    );
}
