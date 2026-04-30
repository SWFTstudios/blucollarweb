# Stripe Checkout Setup

This project now uses a Cloudflare Pages Function:

- `functions/api/create-checkout-session.js`

It creates Stripe Checkout sessions from the selected plan on `pricing.html`.

## 1) Create Stripe Prices

Create 3 recurring monthly prices in Stripe:

- Essentials ($99/month)
- Professional ($299/month)
- Platinum ($499/month)

Copy each `price_...` ID.

## 2) Configure Cloudflare Pages Environment Variables

In your Cloudflare Pages project, set:

- `STRIPE_SECRET_KEY` = your Stripe secret key (`sk_live_...` in production)
- `STRIPE_PRICE_ESSENTIALS` = `price_...`
- `STRIPE_PRICE_PROFESSIONAL` = `price_...`
- `STRIPE_PRICE_PLATINUM` = `price_...`
- `SITE_URL` = `https://blucollarweb.pages.dev` (or your custom domain)

## 3) Deploy

Deploy the latest branch to Cloudflare Pages.  
The endpoint will be available at:

- `/api/create-checkout-session`

## 4) Test Flow

1. Go to `pricing.html`
2. Click `Get Started` on any plan
3. Confirm redirect to Stripe Checkout
4. Complete or cancel payment
5. Verify redirect to:
   - `/checkout-success.html` on success
   - `/checkout-cancel.html` on cancel

## Notes

- If the API fails for any reason, the site falls back to the existing local checkout page.
- Keep `STRIPE_SECRET_KEY` server-side only; never expose it in frontend files.
