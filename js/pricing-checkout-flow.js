(function () {
  var PLAN_DATA = {
    essentials: { name: "Essentials", monthly: 99, yearly: 990 },
    professional: { name: "Professional", monthly: 299, yearly: 2900 },
    platinum: { name: "Platinum", monthly: 499, yearly: 4900 }
  };

  function money(value) {
    return "$" + Number(value).toLocaleString("en-US");
  }

  function getPlanFromText(text) {
    var t = (text || "").toLowerCase();
    if (t.indexOf("professional") !== -1) return "professional";
    if (t.indexOf("platinum") !== -1) return "platinum";
    return "essentials";
  }

  function bindPricingSelection() {
    var planItems = document.querySelectorAll(".pricing-wrapper .pricing-plan-item");
    if (!planItems.length) return;

    planItems.forEach(function (item) {
      var title = item.querySelector(".title.h3-size.card-plan-item");
      var button = item.querySelector(".button-primary.small");
      if (!title || !button) return;

      var planKey = getPlanFromText(title.textContent);
      var plan = PLAN_DATA[planKey];
      var yearlyText = item.querySelector(".card-plan-initial-price");
      var monthlyText = item.querySelector(".card-plan-item-price");

      button.setAttribute("role", "link");
      button.setAttribute("tabindex", "0");
      button.setAttribute("aria-label", "Choose " + plan.name + " plan");

      function routeToCheckout() {
        var payload = {
          key: planKey,
          name: plan.name,
          monthly: plan.monthly,
          yearly: plan.yearly,
          sourceMonthly: monthlyText ? monthlyText.textContent.trim() : "",
          sourceYearly: yearlyText ? yearlyText.textContent.trim() : ""
        };
        try {
          localStorage.setItem("selectedPlan", JSON.stringify(payload));
        } catch (err) {}
        startStripeCheckout(planKey);
      }

      button.addEventListener("click", routeToCheckout);
      button.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          routeToCheckout();
        }
      });
    });
  }

  function startStripeCheckout(planKey) {
    var buttonStateTargets = document.querySelectorAll(".pricing-wrapper .button-primary.small");
    buttonStateTargets.forEach(function (el) {
      if (el) {
        el.style.pointerEvents = "none";
        el.textContent = "Redirecting...";
      }
    });

    fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan: planKey })
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Checkout session request failed");
        }
        return response.json();
      })
      .then(function (data) {
        if (data && data.url) {
          window.location.href = data.url;
          return;
        }
        throw new Error("Missing checkout URL");
      })
      .catch(function () {
        window.location.href = "checkout.html?plan=" + encodeURIComponent(planKey);
      });
  }

  function getSelectedPlan() {
    var key = null;
    var params = new URLSearchParams(window.location.search);
    if (params.has("plan")) key = params.get("plan").toLowerCase();
    if (!PLAN_DATA[key]) {
      try {
        var stored = JSON.parse(localStorage.getItem("selectedPlan") || "{}");
        if (stored.key && PLAN_DATA[stored.key]) key = stored.key;
      } catch (err) {}
    }
    return PLAN_DATA[key] ? { key: key, data: PLAN_DATA[key] } : null;
  }

  function renderCheckoutSummary() {
    var selection = getSelectedPlan();
    if (!selection) return;

    var subtotalEl = document.querySelector(".order-summary-subtotal");
    var totalEl = document.querySelector(".order-summary-total");
    if (subtotalEl) subtotalEl.textContent = money(selection.data.monthly) + " / month";
    if (totalEl) totalEl.textContent = money(selection.data.monthly) + " / month";

    var orderSummary = document.querySelector(".w-commerce-commercecheckoutordersummarywrapper .checkout-block-content");
    if (orderSummary && !orderSummary.querySelector(".checkout-plan-summary")) {
      var summary = document.createElement("div");
      summary.className = "checkout-plan-summary";
      summary.innerHTML =
        "<strong>Selected plan:</strong> " +
        selection.data.name +
        "<br><strong>Monthly:</strong> " +
        money(selection.data.monthly) +
        " &nbsp; <strong>Yearly:</strong> " +
        money(selection.data.yearly);
      orderSummary.appendChild(summary);
    }

    var checkoutTitle = document.querySelector(".title.utility-page");
    if (checkoutTitle && checkoutTitle.textContent.toLowerCase().indexOf("checkout") !== -1) {
      checkoutTitle.textContent = "Checkout - " + selection.data.name + " Plan";
    }
  }

  bindPricingSelection();
  renderCheckoutSummary();
})();
