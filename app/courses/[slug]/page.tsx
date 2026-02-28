import { notFound } from "next/navigation";
import { Metadata } from "next";
import { courses, getCourseBySlug } from "@/data/courses";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseDetail from "@/components/CourseDetail";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return courses.map((course) => ({
        slug: course.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const course = getCourseBySlug(slug);

    if (!course) {
        return { title: "Course Not Found — Snap Code Lab" };
    }

    return {
        title: `${course.title} — Snap Code Lab`,
        description: course.description,
        openGraph: {
            title: `${course.title} — Snap Code Lab`,
            description: course.description,
        },
    };
}

export default async function CourseDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const course = getCourseBySlug(slug);

    if (!course) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#0F172A]">
            <Navbar />
            <CourseDetail course={course} />
            <Footer />
        </main>
    );
}
