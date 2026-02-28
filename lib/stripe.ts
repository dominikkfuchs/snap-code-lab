import Stripe from "stripe";

// This module is currently unused — the checkout and webhook routes
// use dynamic imports instead to avoid build-time crashes when
// STRIPE_SECRET_KEY is not set. Kept for future use when keys are configured.

export function getStripeClient() {
    if (!process.env.STRIPE_SECRET_KEY) {
        throw new Error(
            "STRIPE_SECRET_KEY is not set. Add it to .env.local to enable payments."
        );
    }
    return new Stripe(process.env.STRIPE_SECRET_KEY, { typescript: true });
}
