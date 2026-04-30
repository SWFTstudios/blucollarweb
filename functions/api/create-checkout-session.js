export async function onRequestPost(context) {
  try {
    var env = context.env || {};
    var stripeSecretKey = env.STRIPE_SECRET_KEY;
    var siteUrl = env.SITE_URL || new URL(context.request.url).origin;

    if (!stripeSecretKey) {
      return json({ error: "Missing STRIPE_SECRET_KEY" }, 500);
    }

    var body = await context.request.json();
    var plan = (body && body.plan ? String(body.plan) : "").toLowerCase();

    var priceMap = {
      essentials: env.STRIPE_PRICE_ESSENTIALS || "",
      professional: env.STRIPE_PRICE_PROFESSIONAL || "",
      platinum: env.STRIPE_PRICE_PLATINUM || ""
    };

    var priceId = priceMap[plan];
    if (!priceId) {
      return json({ error: "Invalid plan or missing price ID mapping" }, 400);
    }

    var params = new URLSearchParams();
    params.set("mode", "subscription");
    params.set("line_items[0][price]", priceId);
    params.set("line_items[0][quantity]", "1");
    params.set("success_url", siteUrl + "/checkout-success.html?session_id={CHECKOUT_SESSION_ID}");
    params.set("cancel_url", siteUrl + "/checkout-cancel.html?plan=" + encodeURIComponent(plan));
    params.set("metadata[plan]", plan);

    var stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + stripeSecretKey,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: params.toString()
    });

    if (!stripeResponse.ok) {
      var stripeError = await stripeResponse.text();
      return json({ error: "Stripe session creation failed", detail: stripeError }, 502);
    }

    var session = await stripeResponse.json();
    return json({ id: session.id, url: session.url }, 200);
  } catch (error) {
    return json({ error: "Server error", detail: String(error && error.message ? error.message : error) }, 500);
  }
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status: status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}
