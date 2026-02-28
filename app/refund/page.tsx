import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Refund Policy — Snap Code Lab",
    description:
        "Snap Code Lab's refund policy. Full 14-day money-back guarantee on all courses. No questions asked.",
};

export default function RefundPage() {
    return (
        <main className="min-h-screen bg-[#0F172A]">
            <Navbar />

            <section className="pt-32 pb-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] font-heading mb-8">
                        Refund Policy
                    </h1>

                    <div className="prose prose-invert prose-sm max-w-none space-y-6 text-[#94A3B8] leading-relaxed">
                        <p className="text-xs text-[#64748B]">
                            Last updated: January 1, 2025
                        </p>

                        <div className="p-6 rounded-xl bg-[#10B981]/5 border border-[#10B981]/20 mb-8">
                            <h2 className="text-lg font-semibold text-[#10B981] font-heading mb-2">
                                ✅ 14-Day Money-Back Guarantee
                            </h2>
                            <p className="text-[#94A3B8]">
                                We want you to be completely satisfied with your purchase. If
                                you&apos;re not happy with a course for any reason, you can request
                                a full refund within 14 days of purchase — no questions asked.
                            </p>
                        </div>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            Eligibility
                        </h2>
                        <p>To be eligible for a full refund:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>
                                The refund must be requested within <strong className="text-[#F8FAFC]">14 days</strong> of the
                                original purchase date.
                            </li>
                            <li>
                                Less than <strong className="text-[#F8FAFC]">30%</strong> of the course content must have been
                                accessed or completed.
                            </li>
                        </ul>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            How to Request a Refund
                        </h2>
                        <p>
                            To request a refund, simply send an email to{" "}
                            <a
                                href="mailto:support@snapcodelab.com"
                                className="text-[#06B6D4] hover:underline"
                            >
                                support@snapcodelab.com
                            </a>{" "}
                            with:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Your order confirmation email or receipt</li>
                            <li>The email address used during purchase</li>
                            <li>The course name</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            Processing Time
                        </h2>
                        <p>
                            Refunds are processed within 3–5 business days after approval. The
                            refund will be returned to the original payment method used during
                            purchase.
                        </p>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            Exceptions
                        </h2>
                        <p>
                            Refunds are not available for courses where more than 30% of
                            content has been completed, or if the request is made after the
                            14-day window. Certificates that have already been issued will be
                            revoked upon refund.
                        </p>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            Contact Us
                        </h2>
                        <p>
                            Have questions about our refund policy? Reach out to{" "}
                            <a
                                href="mailto:support@snapcodelab.com"
                                className="text-[#06B6D4] hover:underline"
                            >
                                support@snapcodelab.com
                            </a>{" "}
                            and we&apos;ll be happy to help.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
