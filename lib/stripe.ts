import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
    console.warn(
        "⚠️  STRIPE_SECRET_KEY is not set. Stripe checkout will not work. Add it to .env.local"
    );
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
    typescript: true,
});
