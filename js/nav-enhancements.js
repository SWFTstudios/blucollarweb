(function () {
  var linkMap = {
    home: "index.html#home",
    services: "index.html#services",
    features: "/features.html",
    work: "index.html#work",
    about: "about.html",
    pricing: "pricing.html",
    contact: "contact.html"
  };

  function ensureFeaturesLink() {
    var navLists = document.querySelectorAll(".header-navigation");
    navLists.forEach(function (list) {
      var existing = Array.prototype.find.call(list.querySelectorAll(".nav-link"), function (link) {
        return link.textContent.trim().toLowerCase() === "features";
      });
      if (existing) return;

      var servicesItem = Array.prototype.find.call(list.querySelectorAll(".nav-item-wrapper"), function (item) {
        var link = item.querySelector(".nav-link");
        return link && link.textContent.trim().toLowerCase() === "services";
      });
      if (!servicesItem || !servicesItem.parentNode) return;

      var li = document.createElement("li");
      li.className = "nav-item-wrapper";

      var anchor = document.createElement("a");
      anchor.className = "nav-link";
      anchor.href = "features.html";
      anchor.textContent = "Features";

      li.appendChild(anchor);
      servicesItem.parentNode.insertBefore(li, servicesItem.nextSibling);
    });
  }

  ensureFeaturesLink();

  var navLinks = document.querySelectorAll(
    ".header .nav-link, .uui-navbar03_component .nav-link, .header .button-primary.small-v2.w-nav-link, .header .button-primary.small-v2.mobile-button.w-button, .uui-navbar03_component .button-primary.small-v2.mobile-button.w-button"
  );

  navLinks.forEach(function (link) {
    var key = link.textContent.trim().toLowerCase();
    if (linkMap[key]) {
      link.setAttribute("href", linkMap[key]);
    }
  });

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      if (document.querySelector('script[src="' + src + '"]')) {
        resolve();
        return;
      }
      var script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  function initScrollBehavior() {
    if (
      !window.gsap ||
      !window.ScrollTrigger ||
      !window.Lenis ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    window.gsap.registerPlugin(window.ScrollTrigger);

    var lenis = new window.Lenis({
      duration: 1.0,
      smoothWheel: true,
      smoothTouch: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenis.on("scroll", window.ScrollTrigger.update);
    window.gsap.ticker.lagSmoothing(0);

    var navTargets = document.querySelectorAll(".uui-navbar03_component, .header");
    navTargets.forEach(function (nav) {
      window.gsap.set(nav, { yPercent: 0 });
      window.ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: function (self) {
          if (self.direction === 1 && self.scroll() > 120) {
            window.gsap.to(nav, {
              yPercent: -120,
              duration: 0.35,
              ease: "power2.out",
              overwrite: "auto"
            });
          } else if (self.direction === -1) {
            window.gsap.to(nav, {
              yPercent: 0,
              duration: 0.35,
              ease: "power2.out",
              overwrite: "auto"
            });
          }
        }
      });
    });
  }

  Promise.all([
    loadScript("https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"),
    loadScript("https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"),
    loadScript("https://unpkg.com/@studio-freight/lenis@1.0.42/bundled/lenis.min.js")
  ]).then(initScrollBehavior);
})();
