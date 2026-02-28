import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { priceId, courseSlug, courseName, customerName, customerEmail } = await request.json();

        if (!priceId || !courseSlug || !courseName) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        if (!process.env.STRIPE_SECRET_KEY) {
            return NextResponse.json(
                {
                    error:
                        "Stripe is not configured. Add STRIPE_SECRET_KEY to .env.local to enable payments.",
                },
                { status: 503 }
            );
        }

        // Dynamic import to avoid crashing the route when Stripe key is missing
        const Stripe = (await import("stripe")).default;
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
            typescript: true,
        });

        const siteUrl =
            process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card"],
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            ...(customerEmail ? { customer_email: customerEmail } : {}),
            success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${siteUrl}/cancel?slug=${courseSlug}`,
            metadata: {
                course_slug: courseSlug,
                course_name: courseName,
                ...(customerName ? { customer_name: customerName } : {}),
            },
        });

        return NextResponse.json({ url: session.url });
    } catch (error) {
        console.error("Stripe checkout error:", error);
        const message =
            error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json(
            { error: `Failed to create checkout session: ${message}` },
            { status: 500 }
        );
    }
}
