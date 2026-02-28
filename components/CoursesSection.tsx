"use client";

import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import { courses } from "@/data/courses";

export default function CoursesSection() {
    return (
        <section id="courses" className="relative py-24 sm:py-32">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F97316]/[0.02] to-transparent pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8FAFC] font-heading">
                        Our Courses
                    </h2>
                    <p className="mt-4 text-lg text-[#94A3B8] max-w-2xl mx-auto">
                        Pick a course. Follow the path. Ship something real.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, i) => (
                        <CourseCard key={course.slug} course={course} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
