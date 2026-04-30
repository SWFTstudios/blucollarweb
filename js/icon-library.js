(function () {
  var SPRITE_ID = "bcws-icon-sprite";

  var ICONS = {
    phone: '<symbol id="bcws-phone" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.11 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.63a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.45-1.24a2 2 0 0 1 2.11-.45c.85.27 1.73.47 2.63.59A2 2 0 0 1 22 16.92z"/></symbol>',
    chat: '<symbol id="bcws-chat" viewBox="0 0 24 24"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></symbol>',
    star: '<symbol id="bcws-star" viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01z"/></symbol>',
    calendar: '<symbol id="bcws-calendar" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></symbol>',
    invoice: '<symbol id="bcws-invoice" viewBox="0 0 24 24"><path d="M4 3h16v18l-2-1-2 1-2-1-2 1-2-1-2 1-2-1-2 1z"/><path d="M8 7h8M8 11h8M8 15h5"/></symbol>',
    users: '<symbol id="bcws-users" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></symbol>',
    pipeline: '<symbol id="bcws-pipeline" viewBox="0 0 24 24"><rect x="3" y="4" width="6" height="6" rx="1"/><rect x="15" y="4" width="6" height="6" rx="1"/><rect x="3" y="14" width="6" height="6" rx="1"/><rect x="15" y="14" width="6" height="6" rx="1"/><path d="M9 7h6M12 10v4M9 17h6"/></symbol>',
    bot: '<symbol id="bcws-bot" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M12 4v4M9 13h.01M15 13h.01"/></symbol>',
    mail: '<symbol id="bcws-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></symbol>',
    social: '<symbol id="bcws-social" viewBox="0 0 24 24"><path d="M17 7h.01M7 7h.01M12 12h.01M17 17h.01M7 17h.01"/><path d="M17 7 7 17M7 7l10 10"/></symbol>',
    tag: '<symbol id="bcws-tag" viewBox="0 0 24 24"><path d="M20.59 13.41 11 3H4v7l9.59 9.59a2 2 0 0 0 2.82 0l4.18-4.18a2 2 0 0 0 0-2.82z"/><path d="M7 7h.01"/></symbol>',
    check: '<symbol id="bcws-check" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></symbol>',
    tool: '<symbol id="bcws-tool" viewBox="0 0 24 24"><path d="M14.7 6.3a4 4 0 0 0-5.66 5.66L3 18v3h3l6.04-6.04a4 4 0 0 0 5.66-5.66l-2.12 2.12-2.83-2.83z"/></symbol>',
    webmobile: '<symbol id="bcws-webmobile" viewBox="0 0 24 24"><rect x="2" y="4" width="14" height="10" rx="2"/><path d="M8 20h2"/><rect x="18" y="8" width="4" height="12" rx="1"/></symbol>'
  };

  function ensureSprite() {
    if (document.getElementById(SPRITE_ID)) return;
    var sprite = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    sprite.setAttribute("id", SPRITE_ID);
    sprite.setAttribute("aria-hidden", "true");
    sprite.setAttribute("focusable", "false");
    sprite.style.position = "absolute";
    sprite.style.width = "0";
    sprite.style.height = "0";
    sprite.style.overflow = "hidden";
    sprite.innerHTML = Object.keys(ICONS).map(function (key) { return ICONS[key]; }).join("");
    document.body.appendChild(sprite);
  }

  function iconBySrc(src) {
    var file = (src || "").toLowerCase();
    if (file.indexOf("check") !== -1) return "check";
    if (file.indexOf("chat") !== -1) return "chat";
    if (file.indexOf("review") !== -1) return "star";
    if (file.indexOf("ad") !== -1) return "social";
    if (file.indexOf("appointment") !== -1 || file.indexOf("schedul") !== -1) return "calendar";
    if (file.indexOf("invoice") !== -1 || file.indexOf("pay") !== -1) return "invoice";
    if (file.indexOf("crm") !== -1 || file.indexOf("team") !== -1 || file.indexOf("customer") !== -1) return "users";
    if (file.indexOf("funnel") !== -1 || file.indexOf("pipeline") !== -1) return "pipeline";
    if (file.indexOf("text_message") !== -1 || file.indexOf("ai") !== -1) return "bot";
    if (file.indexOf("email") !== -1 || file.indexOf("newsletter") !== -1) return "mail";
    if (file.indexOf("tag") !== -1) return "tag";
    if (file.indexOf("phone") !== -1 || file.indexOf("call") !== -1) return "phone";
    if (file.indexOf("web_design") !== -1 || file.indexOf("website") !== -1) return "tool";
    return "tool";
  }

  function replaceImage(img) {
    var icon = img.getAttribute("data-icon") || iconBySrc(img.getAttribute("src"));
    var wrap = document.createElement("span");
    wrap.className = "bcws-icon-square";
    if (img.classList.contains("card-plan-item-feature-icon")) {
      wrap.classList.add("bcws-icon-small");
    }
    wrap.setAttribute("aria-hidden", "true");
    wrap.innerHTML = '<svg viewBox="0 0 24 24"><use href="#bcws-' + icon + '"></use></svg>';
    img.replaceWith(wrap);
  }

  function run() {
    ensureSprite();
    var selectors = [
      "img.image.card-home-feature",
      "img.image.card-feature-icon",
      "img.image.card-plan-item-feature-icon",
      "img.image.home-perk"
    ];
    document.querySelectorAll(selectors.join(",")).forEach(replaceImage);
    applyTitleBasedIconOverrides();
  }

  function setIconOnSquare(square, icon) {
    if (!square || !icon) return;
    square.innerHTML = '<svg viewBox="0 0 24 24"><use href="#bcws-' + icon + '"></use></svg>';
  }

  function applyTitleBasedIconOverrides() {
    var cards = document.querySelectorAll(".card.home-feature");
    cards.forEach(function (card) {
      var titleEl = card.querySelector(".title.card-home-feature");
      var square = card.querySelector(".bcws-icon-square");
      if (!titleEl || !square) return;

      var title = titleEl.textContent.trim().toLowerCase();

      if (title.indexOf("custom websites") !== -1 || title.indexOf("landing pages") !== -1) {
        setIconOnSquare(square, "webmobile");
        return;
      }
      if (title.indexOf("missed call") !== -1 || title.indexOf("text-backs") !== -1) {
        setIconOnSquare(square, "phone");
        return;
      }
      if (title.indexOf("social media ad templates") !== -1) {
        setIconOnSquare(square, "social");
        return;
      }
      if (title.indexOf("marketing funnels") !== -1) {
        setIconOnSquare(square, "pipeline");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
