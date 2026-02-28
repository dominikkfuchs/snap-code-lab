import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Terms of Service — Snap Code Lab",
    description:
        "Terms of Service for Snap Code Lab. Read our terms for using our coding courses and digital products.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#0F172A]">
            <Navbar />

            <section className="pt-32 pb-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] font-heading mb-8">
                        Terms of Service
                    </h1>

                    <div className="prose prose-invert prose-sm max-w-none space-y-6 text-[#94A3B8] leading-relaxed">
                        <p className="text-xs text-[#64748B]">
                            Last updated: January 1, 2025
                        </p>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            1. Acceptance of Terms
                        </h2>
                        <p>
                            By accessing and using Snap Code Lab (&quot;the Platform&quot;), you agree
                            to be bound by these Terms of Service. If you do not agree to
                            these terms, please do not use the Platform.
                        </p>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            2. Description of Service
                        </h2>
                        <p>
                            Snap Code Lab provides online coding courses delivered as digital
                            content. All products are digital — no physical goods are shipped.
                            Courses include video lessons, written content, code exercises,
                            and downloadable resources.
                        </p>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            3. Account and Purchase
                        </h2>
                        <p>
                            When you purchase a course, you receive lifetime access to the
                            course materials as they exist at the time of purchase, plus any
                            future updates we make. Payment is processed securely through
                            Stripe. We do not store your payment information.
                        </p>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            4. Refund Policy
                        </h2>
                        <p>
                            We offer a full 14-day money-back guarantee on all courses,
                            provided less than 30% of the course content has been accessed.
                            See our{" "}
                            <a href="/refund" className="text-[#06B6D4] hover:underline">
                                Refund Policy
                            </a>{" "}
                            for full details.
                        </p>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            5. Intellectual Property
                        </h2>
                        <p>
                            All course content, including videos, text, code, graphics, and
                            branding, is owned by Snap Code Lab and protected by copyright
                            law. You may not redistribute, resell, or share course content
                            without written permission.
                        </p>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            6. User Conduct
                        </h2>
                        <p>
                            You agree to use the Platform for lawful purposes only. You may
                            not attempt to reverse-engineer, hack, or disrupt the Platform.
                            Sharing account credentials is prohibited.
                        </p>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            7. Certificates
                        </h2>
                        <p>
                            Certificates of completion are issued upon finishing all course
                            modules. Certificates are for educational purposes and do not
                            constitute professional licensing or accreditation.
                        </p>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            8. Limitation of Liability
                        </h2>
                        <p>
                            Snap Code Lab is provided &quot;as is.&quot; We are not liable for any
                            indirect, incidental, or consequential damages arising from
                            your use of the Platform. Our total liability is limited to the
                            amount you paid for the course.
                        </p>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            9. Changes to Terms
                        </h2>
                        <p>
                            We may update these terms from time to time. Continued use of the
                            Platform after changes constitutes acceptance of the new terms.
                        </p>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            10. Contact
                        </h2>
                        <p>
                            For questions about these terms, contact us at{" "}
                            <a
                                href="mailto:support@snapcodelab.com"
                                className="text-[#06B6D4] hover:underline"
                            >
                                support@snapcodelab.com
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
