import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CoursesSection from "@/components/CoursesSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A]">
      <Navbar />
      <Hero />
      <Features />
      <CoursesSection />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
