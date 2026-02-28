import Link from "next/link";
import { Lock, Mail } from "lucide-react";

const courseLinks = [
    { label: "HTML & CSS", href: "/courses/html-css" },
    { label: "Python", href: "/courses/python" },
    { label: "JavaScript", href: "/courses/javascript" },
];

const companyLinks = [
    { label: "About", href: "#" },
    { label: "Contact", href: "mailto:support@snapcodelab.com" },
    { label: "Careers", href: "#" },
];

const legalLinks = [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Refund Policy", href: "/refund" },
];

const socialLinks = [
    { label: "Twitter/X", href: "https://twitter.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-white/[0.06] bg-[#0B1120]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <span className="text-2xl">⚡</span>
                            <span className="text-xl font-bold text-[#F8FAFC] font-heading">
                                Snap Code Lab
                            </span>
                        </Link>
                        <p className="text-sm text-[#94A3B8] max-w-xs leading-relaxed mb-6">
                            Learn it. Build it. Ship it. Bite-sized coding courses that take
                            you from zero to deployed.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                            <Lock className="w-3.5 h-3.5" />
                            <span>Payments secured by Stripe</span>
                        </div>
                    </div>

                    {/* Courses */}
                    <div>
                        <h4 className="text-sm font-semibold text-[#F8FAFC] mb-4 font-heading">
                            Courses
                        </h4>
                        <ul className="space-y-3">
                            {courseLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-semibold text-[#F8FAFC] mb-4 font-heading">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-semibold text-[#F8FAFC] mb-4 font-heading">
                            Legal
                        </h4>
                        <ul className="space-y-3">
                            {legalLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[#94A3B8]">
                        © 2025 Snap Code Lab. All rights reserved.
                    </p>

                    <div className="flex items-center gap-1 text-xs text-[#94A3B8]">
                        <Mail className="w-3.5 h-3.5" />
                        <a
                            href="mailto:support@snapcodelab.com"
                            className="hover:text-[#F8FAFC] transition-colors"
                        >
                            support@snapcodelab.com
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
