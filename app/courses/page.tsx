import { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/data/courses";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";

export const metadata: Metadata = {
    title: "All Courses — Snap Code Lab",
    description:
        "Browse all coding courses at Snap Code Lab. HTML & CSS, Python, JavaScript and more. Start learning today.",
};

export default function CoursesPage() {
    return (
        <main className="min-h-screen bg-[#0F172A]">
            <Navbar />

            <section className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl font-bold text-[#F8FAFC] font-heading">
                            All Courses
                        </h1>
                        <p className="mt-4 text-lg text-[#94A3B8] max-w-2xl mx-auto">
                            Pick the skill you want to master. Every course takes you from zero
                            to deployed.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course, i) => (
                            <CourseCard key={course.slug} course={course} index={i} />
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link
                            href="/"
                            className="text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                        >
                            ← Back to home
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
