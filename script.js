// ═══════════════════════════════════════════════════════════
// KIRAN A. NAIK — Editorial Patisserie CV
// GSAP ScrollTrigger · Lenis Smooth Scroll · Scroll Reveals
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ─── Lenis Smooth Scroll ──────────────────────────────────
  var lenis;

  function initLenis() {
    if (typeof Lenis === 'undefined') return;

    lenis = new Lenis({
      duration: 1.2,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add(function (time) {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }

  // ─── GSAP Setup ───────────────────────────────────────────
  function initGSAP() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    if (prefersReducedMotion) return;

    heroTimeline();
    heroScrollEffect();
    aboutAnimations();
    experienceAnimations();
    journeyAnimation();
    expertiseAnimations();
    awardsAnimation();
    languageAnimations();
    footerAnimations();
  }

  // ═══════════════════════════════════════════════════════════
  // HERO LOAD TIMELINE
  // ═══════════════════════════════════════════════════════════
  function heroTimeline() {
    // Initial states
    gsap.set('.monogram-wrapper', { opacity: 0, scale: 0.85 });
    gsap.set('.hero-name', { opacity: 0, y: 40, filter: 'blur(10px)' });
    gsap.set('.hero-title', { opacity: 0, y: 25, filter: 'blur(8px)' });
    gsap.set('.hero-sub', { opacity: 0, y: 15 });
    gsap.set('.scroll-indicator', { opacity: 0 });
    gsap.set('.hero-frame', { opacity: 0, scale: 0.8 });

    var tl = gsap.timeline({ delay: 0.2 });

    // Corner frames fade in
    tl.to('.hero-frame', {
      opacity: 0.25,
      scale: 1,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power2.out',
    })
    // Monogram scales in
    .to('.monogram-wrapper', {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: 'power3.out',
    }, '-=0.5')
    // Name — blur to clear
    .to('.hero-name', {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.9,
      ease: 'power3.out',
    }, '-=0.4')
    // Title
    .to('.hero-title', {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.7,
      ease: 'power2.out',
    }, '-=0.3')
    // Sub
    .to('.hero-sub', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.2')
    // Scroll indicator
    .to('.scroll-indicator', {
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.1');
  }

  // ═══════════════════════════════════════════════════════════
  // ABOUT SECTION
  // ═══════════════════════════════════════════════════════════
  function aboutAnimations() {
    // Section label
    gsap.set('.about .section-label', { opacity: 0, y: 20 });
    gsap.to('.about .section-label', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    });

    // Decorative art panel — fade + scale
    gsap.set('.about-decorative', { opacity: 0, scale: 0.92 });
    gsap.to('.about-decorative', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      scale: 1,
      duration: 1.1,
      ease: 'power2.out',
    });

    // Text side — slide from right
    gsap.set('.about-content', { opacity: 0, x: 60 });
    gsap.to('.about-content', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power2.out',
      delay: 0.15,
    });

    // Experience counter — fade in + count up
    var counterEl = document.querySelector('.counter-number');
    if (counterEl) {
      var target = parseInt(counterEl.getAttribute('data-target'), 10);
      gsap.set('.experience-counter', { opacity: 0, y: 20 });

      gsap.to('.experience-counter', {
        scrollTrigger: {
          trigger: '.experience-counter',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      });

      var counterObj = { value: 0 };
      gsap.to(counterObj, {
        value: target,
        duration: 1.5,
        ease: 'power2.out',
        snap: { value: 1 },
        scrollTrigger: {
          trigger: '.experience-counter',
          start: 'top 80%',
          once: true,
        },
        onUpdate: function () {
          counterEl.textContent = Math.round(counterObj.value) + '+';
        },
      });
    }
  }

  // ═══════════════════════════════════════════════════════════
  // EXPERIENCE ENTRIES
  // ═══════════════════════════════════════════════════════════
  function experienceAnimations() {
    // Section label
    var expLabel = document.querySelector('.experience .section-label');
    if (expLabel) {
      gsap.set(expLabel, { opacity: 0, y: 20 });
      gsap.to(expLabel, {
        scrollTrigger: {
          trigger: '.experience',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
      });
    }

    var entries = document.querySelectorAll('.exp-entry');

    entries.forEach(function (entry) {
      var isReverse = entry.querySelector('.split-layout--reverse');
      var leftEl = entry.querySelector('.split-left');
      var rightEl = entry.querySelector('.split-right');
      var yearMarker = entry.querySelector('.exp-year-marker');

      // Year marker
      if (yearMarker) {
        gsap.set(yearMarker, { opacity: 0, y: 20 });
        gsap.to(yearMarker, {
          scrollTrigger: {
            trigger: entry,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0.08,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        });
      }

      // Image side: scale reveal
      var imageEl = isReverse ? rightEl : leftEl;
      gsap.set(imageEl, { opacity: 0, scale: 0.93 });
      gsap.to(imageEl, {
        scrollTrigger: {
          trigger: entry,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
      });

      // Text side: slide from its direction
      var textEl = isReverse ? leftEl : rightEl;
      var slideX = isReverse ? -60 : 60;
      gsap.set(textEl, { opacity: 0, x: slideX });
      gsap.to(textEl, {
        scrollTrigger: {
          trigger: entry,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 0.1,
      });

      // Stagger children within text side
      var children = textEl.querySelectorAll('.exp-meta, .exp-company, .exp-role, .exp-points li');
      if (children.length) {
        gsap.set(children, { opacity: 0, y: 20 });
        gsap.to(children, {
          scrollTrigger: {
            trigger: entry,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          delay: 0.3,
        });
      }
    });

    // Image pop-up effect — each image scales up when its entry is in view
    entries.forEach(function (entry) {
      var img = entry.querySelector('.exp-image');
      if (!img) return;

      gsap.fromTo(img,
        { scale: 1 },
        {
          scale: 1.05,
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          ease: 'power2.out',
          scrollTrigger: {
            trigger: entry,
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: 0.5,
          },
        }
      );
    });
  }

  // ═══════════════════════════════════════════════════════════
  // JOURNEY ICON — Travels entries 1 & 3, skips entry 2
  // ═══════════════════════════════════════════════════════════
  function journeyAnimation() {
    var line = document.querySelector('.timeline-line');
    var icon = document.querySelector('.journey-icon-wrap');
    var trail1 = document.querySelector('.journey-trail--1');
    var trail3 = document.querySelector('.journey-trail--3');
    var entries = document.querySelectorAll('.exp-entry');

    if (!line || !icon || !trail1 || !trail3 || entries.length < 3 || window.innerWidth <= 1024) return;

    // Measure positions relative to the experience section
    var section = document.querySelector('.experience');
    var sectionTop = section.getBoundingClientRect().top + window.scrollY;
    var lineTop = line.getBoundingClientRect().top + window.scrollY;
    var lineOffset = lineTop - sectionTop; // 200px typically

    // Entry bounding boxes relative to section
    function entryBounds(entry) {
      var rect = entry.getBoundingClientRect();
      var top = rect.top + window.scrollY - sectionTop - lineOffset;
      var bottom = rect.bottom + window.scrollY - sectionTop - lineOffset;
      return { top: Math.max(0, top), bottom: bottom };
    }

    var e1 = entryBounds(entries[0]); // Raysone
    var e2 = entryBounds(entries[1]); // Alshaya
    var e3 = entryBounds(entries[2]); // MMC

    var lineHeight = line.offsetHeight;
    var iconH = 30;

    // Clamp values within line range
    var e1Top = Math.max(0, e1.top);
    var e1Bot = Math.min(lineHeight, e1.bottom);
    var e3Top = Math.max(0, e3.top);
    var e3Bot = Math.min(lineHeight - iconH, e3.bottom);

    // Position trail segments
    trail1.style.top = (lineOffset + e1Top) + 'px';
    trail3.style.top = (lineOffset + e3Top) + 'px';

    // Fractional positions within the total line for the timeline
    var p1Start = e1Top / lineHeight;
    var p1End = e1Bot / lineHeight;
    var p3Start = e3Top / lineHeight;
    var p3End = e3Bot / lineHeight;

    // Extend entry 1 travel: icon goes past e1Bot, almost to e2 top
    var fadeOutY = e2.top - 80; // stop well before the Alshaya entry
    var fadeInY = e3Top;        // reappear at MMC start

    // Position trail1 to cover the extended range
    // (trail1 already starts at e1Top)

    // Build a GSAP timeline scrubbed by scroll
    // Durations control the scroll-progress proportions:
    //   0.38 = entry 1 travel
    //   0.03 = fade out
    //   0.14 = hold hidden through entry 2
    //   0.03 = fade in at entry 3
    //   0.42 = entry 3 travel
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: line,
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: 0.5,
      },
    });

    // Segment 1: icon travels from entry 1 top down to just above entry 2
    tl.fromTo(icon,
      { y: e1Top, opacity: 1, scale: 1 },
      { y: fadeOutY, opacity: 1, scale: 1, duration: 0.38, ease: 'none',
        onUpdate: function () {
          var currentY = gsap.getProperty(icon, 'y');
          trail1.style.height = Math.max(0, currentY - e1Top + iconH * 0.5) + 'px';
        }
      }
    );

    // Segment 2: icon fades out right before entry 2
    tl.to(icon, { opacity: 0, scale: 0.6, duration: 0.03, ease: 'power2.in' });

    // Segment 3: hold invisible through entry 2
    tl.to(icon, { opacity: 0, duration: 0.14 });

    // Segment 4: teleport icon to entry 3 start, fade in
    tl.set(icon, { y: fadeInY });
    tl.to(icon, { opacity: 1, scale: 1, duration: 0.03, ease: 'power2.out' });

    // Segment 5: icon travels through entry 3
    tl.to(icon, {
      y: e3Bot - iconH - 60,
      duration: 0.42,
      ease: 'none',
      onUpdate: function () {
        var currentY = gsap.getProperty(icon, 'y');
        trail3.style.height = Math.max(0, currentY - e3Top + iconH * 0.5) + 'px';
      },
    });
  }

  // ═══════════════════════════════════════════════════════════
  // EXPERTISE TAGS
  // ═══════════════════════════════════════════════════════════
  function expertiseAnimations() {
    var cols = document.querySelectorAll('.expertise-col');
    cols.forEach(function (col) {
      gsap.set(col, { opacity: 0, y: 40 });
      gsap.to(col, {
        scrollTrigger: {
          trigger: col,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    });

    // Skill tags stagger
    var tagGroups = document.querySelectorAll('.skill-tags');
    tagGroups.forEach(function (group) {
      var tags = group.querySelectorAll('.skill-tag');
      tags.forEach(function (tag) {
        gsap.set(tag, { opacity: 0, y: 12 });
      });
      gsap.to(tags, {
        scrollTrigger: {
          trigger: group,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.out',
        delay: 0.2,
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  // AWARDS COMPACT
  // ═══════════════════════════════════════════════════════════
  function awardsAnimation() {
    var el = document.querySelector('.awards-inline');
    if (!el) return;
    gsap.set(el, { opacity: 0, y: 20 });
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out',
    });
  }

  // ═══════════════════════════════════════════════════════════
  // LANGUAGES
  // ═══════════════════════════════════════════════════════════
  function languageAnimations() {
    var cards = document.querySelectorAll('.lang-card');
    cards.forEach(function (card, i) {
      gsap.set(card, { opacity: 0, y: 30 });
      gsap.to(card, {
        scrollTrigger: {
          trigger: '.languages',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: i * 0.12,
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  // FOOTER
  // ═══════════════════════════════════════════════════════════
  function footerAnimations() {
    var footerEls = [
      '.footer-monogram',
      '.footer-tagline',
      '.footer-rule',
      '.footer-content',
      '.footer-copy'
    ];
    footerEls.forEach(function (sel, i) {
      var el = document.querySelector(sel);
      if (!el) return;
      gsap.set(el, { opacity: 0, y: 20 });
      gsap.to(el, {
        scrollTrigger: {
          trigger: '.footer',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: i * 0.08,
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  // HERO SCROLL EFFECT — CSS Sticky + GSAP Scrub
  // Hero stays sticky; content-overlay scrolls over it.
  // Animations trigger as the wrapper scrolls out of view.
  // ═══════════════════════════════════════════════════════════
  function heroScrollEffect() {
    // The hero-wrapper is 200vh tall.
    // The hero is sticky at top:0 inside it.
    // Once the wrapper starts scrolling out (its bottom approaches viewport bottom),
    // the content-overlay naturally slides up and covers the sticky hero.
    // We animate the hero as the wrapper scrolls away.

    var wrapper = document.querySelector('.hero-wrapper');
    if (!wrapper) return;

    // Scale down the entire hero (creates depth/receding effect)
    gsap.to('.hero', {
      scale: 0.92,
      borderRadius: '16px',
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper,
        start: 'bottom bottom',   // animation starts when wrapper bottom hits viewport bottom
        end: 'bottom top',        // ends when wrapper bottom exits viewport top
        scrub: true,
      },
    });

    // Text fades out faster — first 40% of the scroll range
    gsap.to('.hero-text-content', {
      opacity: 0,
      filter: 'blur(8px)',
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper,
        start: 'bottom bottom',
        end: 'bottom 60%',        // text gone by 60% viewport height
        scrub: true,
      },
    });

    // Monogram moves up + fades over full range
    gsap.to('.monogram-wrapper', {
      y: -60,
      opacity: 0.3,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper,
        start: 'bottom bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Corner frames fade out in first half
    gsap.to('.hero-frame', {
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper,
        start: 'bottom bottom',
        end: 'bottom 50%',
        scrub: true,
      },
    });

    // Dark overlay intensifies: 0.15 → 0.5
    gsap.fromTo('.hero-overlay',
      { opacity: 0.15 },
      {
        opacity: 0.5,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: 'bottom bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }

  // ─── Initialize ───────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    initLenis();
    initGSAP();
  });

})();
