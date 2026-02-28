import { notFound } from "next/navigation";
import { Metadata } from "next";
import { courses, getCourseBySlug } from "@/data/courses";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CheckoutForm from "@/components/CheckoutForm";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return courses
        .filter((c) => !c.comingSoon)
        .map((course) => ({
            slug: course.slug,
        }));
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const course = getCourseBySlug(slug);

    if (!course) {
        return { title: "Checkout — Snap Code Lab" };
    }

    return {
        title: `Checkout — ${course.title} — Snap Code Lab`,
        description: `Complete your enrollment for ${course.title}. Secure payment powered by Stripe.`,
    };
}

export default async function CheckoutPage({ params }: PageProps) {
    const { slug } = await params;
    const course = getCourseBySlug(slug);

    if (!course || course.comingSoon) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#0F172A]">
            <Navbar />
            <CheckoutForm course={course} />
            <Footer />
        </main>
    );
}
