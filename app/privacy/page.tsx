import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Privacy Policy — Snap Code Lab",
    description:
        "Privacy Policy for Snap Code Lab. Learn how we collect, use, and protect your personal data. GDPR and CCPA compliant.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#0F172A]">
            <Navbar />

            <section className="pt-32 pb-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] font-heading mb-8">
                        Privacy Policy
                    </h1>

                    <div className="prose prose-invert prose-sm max-w-none space-y-6 text-[#94A3B8] leading-relaxed">
                        <p className="text-xs text-[#64748B]">
                            Last updated: January 1, 2025
                        </p>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            1. Information We Collect
                        </h2>
                        <p>
                            We collect information you provide directly, including your name,
                            email address, and payment information (processed securely by
                            Stripe — we never store card details). We also collect usage data
                            such as course progress and browser information.
                        </p>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            2. How We Use Your Information
                        </h2>
                        <p>We use your information to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Provide access to purchased courses</li>
                            <li>Process payments and refunds</li>
                            <li>Send course-related communications</li>
                            <li>Issue certificates of completion</li>
                            <li>Improve our platform and courses</li>
                            <li>Provide customer support</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            3. Data Storage and Security
                        </h2>
                        <p>
                            Your data is stored securely using industry-standard encryption.
                            Payment processing is handled entirely by Stripe, a PCI-DSS Level
                            1 certified provider. We never have access to your full card
                            number.
                        </p>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            4. Third-Party Services
                        </h2>
                        <p>
                            We use the following third-party services that may process your
                            data:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Stripe — payment processing</li>
                            <li>Vercel — hosting</li>
                            <li>Analytics — anonymous usage tracking</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            5. Your Rights (GDPR)
                        </h2>
                        <p>
                            If you are in the European Economic Area, you have the right to:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Access your personal data</li>
                            <li>Correct inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Object to data processing</li>
                            <li>Data portability</li>
                            <li>Withdraw consent at any time</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            6. California Privacy Rights (CCPA)
                        </h2>
                        <p>
                            California residents have the right to know what personal data we
                            collect, request deletion, and opt out of the sale of personal
                            information. We do not sell personal information to third parties.
                        </p>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            7. Cookies
                        </h2>
                        <p>
                            We use essential cookies required for the platform to function
                            (authentication, preferences). We use analytics cookies only with
                            your consent. You can manage cookie preferences in your browser
                            settings.
                        </p>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            8. Data Retention
                        </h2>
                        <p>
                            We retain your account data for as long as your account is active.
                            If you request deletion, we will remove your data within 30 days,
                            except where legal obligations require retention.
                        </p>

                        <h2 className="text-xl font-semibold text-[#F8FAFC] font-heading mt-8">
                            9. Contact
                        </h2>
                        <p>
                            For privacy-related inquiries or to exercise your rights, contact
                            our Data Protection team at{" "}
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
