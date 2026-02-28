# ⚡ Snap Code Lab

**Learn it. Build it. Ship it.**

Snap Code Lab is an online coding course platform built with Next.js 14, featuring Stripe integration for payments, Framer Motion animations, and a premium dark-mode design.

![Snap Code Lab](https://snapcodelab.com)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm
- A Stripe account (for payment processing)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd snap-code-lab

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your Stripe keys

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## 🔑 Stripe Configuration

### 1. Get Your API Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys)
2. Copy your **Publishable key** and **Secret key**
3. Add them to `.env.local`

### 2. Create Products & Prices

In the Stripe Dashboard:

1. Go to **Products** → **Add Product**
2. Create products for each course:
   - **HTML & CSS Mastery** — $49 (one-time)
   - **Python for Beginners** — $59 (one-time)
3. Copy each product's **Price ID** (starts with `price_`)
4. Update the `stripePriceId` fields in `data/courses.ts`

### 3. Set Up Webhooks

1. Go to **Developers** → **Webhooks**
2. Click **Add endpoint**
3. URL: `https://yourdomain.com/api/webhook`
4. Select event: `checkout.session.completed`
5. Copy the **Webhook signing secret** to `.env.local`

### 4. Local Webhook Testing

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Forward webhooks to local server
stripe listen --forward-to localhost:3000/api/webhook
```

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   ├── checkout/route.ts    # Stripe checkout session creation
│   │   └── webhook/route.ts     # Stripe webhook handler
│   ├── courses/
│   │   ├── page.tsx             # All courses listing
│   │   └── [slug]/page.tsx      # Individual course detail
│   ├── success/page.tsx         # Post-payment success page
│   ├── cancel/page.tsx          # Cancelled checkout page
│   ├── terms/page.tsx           # Terms of Service
│   ├── privacy/page.tsx         # Privacy Policy (GDPR/CCPA)
│   ├── refund/page.tsx          # Refund Policy
│   ├── layout.tsx               # Root layout with fonts & metadata
│   ├── globals.css              # Global styles & animations
│   └── page.tsx                 # Landing page
├── components/
│   ├── Navbar.tsx               # Sticky navigation
│   ├── Hero.tsx                 # Animated hero section
│   ├── Features.tsx             # Why Snap Code Lab section
│   ├── CourseCard.tsx            # Individual course card
│   ├── CoursesSection.tsx       # Courses grid section
│   ├── HowItWorks.tsx           # 3-step process section
│   ├── Testimonials.tsx         # Student reviews
│   ├── FAQ.tsx                  # Accordion FAQ
│   ├── CourseDetail.tsx         # Full course detail component
│   └── Footer.tsx               # Site footer
├── data/
│   └── courses.ts               # Course data with types
├── lib/
│   └── stripe.ts                # Stripe server client
├── .env.local.example           # Environment variables template
└── README.md
```

## 🎨 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** | App Router framework |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animations |
| **Stripe** | Payment processing |
| **Lucide React** | Icons |
| **canvas-confetti** | Success page celebration |

## 🔒 Stripe Compliance

This project follows Stripe's integration requirements:

- ✅ Uses **Stripe Hosted Checkout** (no custom card forms)
- ✅ All Stripe secret keys are **server-side only**
- ✅ **Refund policy** visible on every course page
- ✅ **Trust badges** displayed near purchase buttons
- ✅ **Business contact email** in footer and legal pages
- ✅ **No card data** stored anywhere in the codebase

## 📧 Support

For questions or issues: [support@snapcodelab.com](mailto:support@snapcodelab.com)

## 📄 License

© 2025 Snap Code Lab. All rights reserved.
