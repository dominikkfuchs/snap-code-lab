import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
    const body = await request.text();
    const sig = request.headers.get("stripe-signature");

    if (!sig) {
        return NextResponse.json(
            { error: "Missing stripe signature" },
            { status: 400 }
        );
    }

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET || ""
        );
    } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        console.error(`Webhook signature verification failed: ${message}`);
        return NextResponse.json(
            { error: `Webhook Error: ${message}` },
            { status: 400 }
        );
    }

    switch (event.type) {
        case "checkout.session.completed": {
            const session = event.data.object as Stripe.Checkout.Session;
            const courseSlug = session.metadata?.course_slug;
            const courseName = session.metadata?.course_name;
            const customerEmail = session.customer_details?.email;

            console.log("✅ Purchase completed!");
            console.log(`   Course: ${courseName} (${courseSlug})`);
            console.log(`   Email: ${customerEmail}`);
            console.log(`   Amount: ${session.amount_total}`);
            console.log(`   Session ID: ${session.id}`);

            // TODO: Add database integration here
            // - Save purchase to database
            // - Grant course access
            // - Send confirmation email

            break;
        }
        default:
            console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
}
