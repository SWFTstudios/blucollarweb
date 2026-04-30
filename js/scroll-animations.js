(function () {
  "use strict";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  function whenReady(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
      return;
    }
    callback();
  }

  function waitForGsap(tries, callback) {
    if (window.gsap && window.ScrollTrigger) {
      callback();
      return;
    }
    if (tries <= 0) {
      return;
    }
    setTimeout(function () {
      waitForGsap(tries - 1, callback);
    }, 120);
  }

  function uniqueVisible(nodes) {
    var seen = new Set();
    return Array.prototype.filter.call(nodes, function (node) {
      if (!node || seen.has(node)) {
        return false;
      }
      if (node.offsetParent === null) {
        return false;
      }
      seen.add(node);
      return true;
    });
  }

  function animateHero(gsap) {
    var hero = document.querySelector(".section.home-hero, .section.home-features, .section.contact, .section.pricing");
    if (!hero) {
      return;
    }

    var items = uniqueVisible(
      hero.querySelectorAll(
        "h1, .paragraph-large, .hero-body-text, .paragraph.home-features, .button-primary, .button-secondary"
      )
    );

    if (!items.length) {
      return;
    }

    gsap.fromTo(
      items,
      { autoAlpha: 0, y: 28 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.15,
        ease: "power2.out",
        clearProps: "opacity,visibility,transform"
      }
    );
  }

  function animateHeading(gsap, ScrollTrigger, selector) {
    var nodes = uniqueVisible(document.querySelectorAll(selector));
    nodes.forEach(function (node) {
      gsap.fromTo(
        node,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "opacity,visibility,transform",
          scrollTrigger: {
            trigger: node,
            start: "top 88%",
            once: true
          }
        }
      );
    });
  }

  function animateCardGroups(gsap, ScrollTrigger) {
    var groups = document.querySelectorAll(
      ".home-features-grid, .pricing-grid, .pricing-wrapper, .faq-wrapper, .faq-list, .home-perks-wrapper"
    );

    groups.forEach(function (group) {
      var cards = uniqueVisible(
        group.querySelectorAll(".card.home-feature, .card.plan-item, .pricing-card, .faq-item")
      );
      if (!cards.length) {
        return;
      }

      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 28, scale: 0.985 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "opacity,visibility,transform",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 85%",
            once: true
          }
        }
      );
    });
  }

  function animatePerkRows(gsap, ScrollTrigger) {
    var rows = uniqueVisible(document.querySelectorAll(".home-perk-wrapper"));
    rows.forEach(function (row, index) {
      var xStart = index % 2 === 0 ? -20 : 20;
      gsap.fromTo(
        row,
        { autoAlpha: 0, x: xStart },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "opacity,visibility,transform",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            once: true
          }
        }
      );
    });
  }

  function animateFaqItems(gsap, ScrollTrigger) {
    var faqItems = uniqueVisible(document.querySelectorAll(".faq-item"));
    if (!faqItems.length) {
      return;
    }
    gsap.fromTo(
      faqItems,
      { autoAlpha: 0, y: 14 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",
        clearProps: "opacity,visibility,transform",
        scrollTrigger: {
          trigger: faqItems[0],
          start: "top 86%",
          once: true
        }
      }
    );
  }

  function animateStatCallouts(gsap, ScrollTrigger) {
    var nodes = uniqueVisible(document.querySelectorAll(".feature-stat-callout"));
    nodes.forEach(function (node) {
      gsap.fromTo(
        node,
        { autoAlpha: 0, scale: 0.82 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.45,
          ease: "back.out(1.5)",
          clearProps: "opacity,visibility,transform",
          scrollTrigger: {
            trigger: node,
            start: "top 90%",
            once: true
          }
        }
      );
    });
  }

  function animateCtaCards(gsap, ScrollTrigger) {
    var nodes = uniqueVisible(document.querySelectorAll(".card.cta"));
    nodes.forEach(function (node) {
      gsap.fromTo(
        node,
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          clearProps: "opacity,visibility,transform",
          scrollTrigger: {
            trigger: node,
            start: "top 88%",
            once: true
          }
        }
      );
    });
  }

  function init() {
    var gsap = window.gsap;
    var ScrollTrigger = window.ScrollTrigger;

    if (!gsap || !ScrollTrigger) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    animateHero(gsap);
    animateHeading(gsap, ScrollTrigger, ".title.home-features, .title.home-perks, .title.home-hero, .title.card-pricing");
    animateCardGroups(gsap, ScrollTrigger);
    animatePerkRows(gsap, ScrollTrigger);
    animateFaqItems(gsap, ScrollTrigger);
    animateStatCallouts(gsap, ScrollTrigger);
    animateCtaCards(gsap, ScrollTrigger);
  }

  whenReady(function () {
    waitForGsap(60, init);
  });
})();
