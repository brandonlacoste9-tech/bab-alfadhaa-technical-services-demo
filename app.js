const I18N = {
en: {
  "nav.services": "Services", "nav.why": "Why us", "nav.gallery": "Gallery", "nav.faq": "FAQ",
  "nav.reviews": "Reviews", "nav.contact": "Contact",
  "nav.call": "050 665 8641",
  "hero.kicker": "Al Quoz, Dubai · Home &amp; office maintenance",
  "hero.title": "One call handles<br>every repair at home.",
  "hero.sub": "Plumbing, electrical, AC, cleaning, renovation and CCTV — professional maintenance for your home and office. Same-day service available, starting from AED 99/hr.",
  "hero.cta1": "Book a visit", "hero.cta2": "See services",
  "trust.t1t": "Same-day service", "trust.t1d": "Available on request",
  "trust.t2t": "Plumbing · Electrical · AC", "trust.t2d": "Plus cleaning, renovation, CCTV",
  "trust.t3t": "Home &amp; office visits", "trust.t3d": "We come to you across Dubai",
  "stats.samedayNum": "Same-day", "stats.sameday": "service available",
  "stats.tradesNum": "6 trades", "stats.trades": "one team, one call",
  "stats.rateNum": "AED 99/hr", "stats.rate": "starting rate",
  "stats.visitNum": "Home &amp; office", "stats.visit": "we come to you",
  "services.kicker": "What we do", "services.title": "Every home repair under one roof",
  "services.s1t": "Plumbing repairs", "services.s1d": "Leaks, blockages, taps and sanitary fittings — fixed right the first time.",
  "services.s2t": "Electrical services", "services.s2d": "Wiring, sockets, lighting and fault finding — safe work, done properly.",
  "services.s3t": "AC installation &amp; repair", "services.s3d": "Split and central AC service, gas refills and repairs that keep you cool.",
  "services.s4t": "Home cleaning", "services.s4d": "Deep cleaning for villas and apartments — a fresh home without the hassle.",
  "services.s5t": "Renovation work", "services.s5d": "Painting, tiling and small renovations that refresh your space.",
  "services.s6t": "CCTV installation", "services.s6d": "Camera systems for homes and offices — installed and configured.",
  "why.kicker": "Why choose us", "why.title": "One team for every job",
  "why.intro": "No more calling a different company for every repair. One team handles your plumbing, electrical, AC and more — with clear pricing agreed before we start.",
  "why.l1t": "Upfront pricing", "why.l1d": "Starting from AED 99/hr — you approve the price before we begin.",
  "why.l2t": "Same-day response", "why.l2d": "Urgent leak or dead AC? We come the same day when you need us.",
  "why.l3t": "Homes and offices", "why.l3d": "Villas, apartments and workplaces — we come to you anywhere in Dubai.",
  "why.l4t": "Local and reachable", "why.l4d": "Based in Al Quoz, one call or WhatsApp away on 050 665 8641.",
  "gallery.kicker": "Our work", "gallery.title": "Clean work, done properly",
  "gallery.c1": "Electrical work done safely and neatly",
  "gallery.c2": "Renovation and painting, fresh finish",
  "gallery.c3": "Plumbing repairs without the mess",
  "reviews.kicker": "What people say", "reviews.title": "Trusted across Dubai",
  "reviews.more": "Find us on Google — see our location and reviews",
  "faq.kicker": "Good to know", "faq.title": "Frequently asked questions",
  "faq.q1": "Do you offer same-day service?",
  "faq.a1": "Yes — same-day visits are available on request. Call 050 665 8641 and we will arrange the earliest slot.",
  "faq.q2": "Which areas do you serve?",
  "faq.a2": "We are based in Al Quoz and serve homes and offices across Dubai — villas, apartments and workplaces.",
  "faq.q3": "How much does a visit cost?",
  "faq.a3": "Our work starts from AED 99/hr. You approve the price before we begin — no surprises.",
  "faq.q4": "How do I book a visit?",
  "faq.a4": "Call or WhatsApp us on 050 665 8641 (or 04 353 3789) and tell us what needs fixing — we will take it from there.",
  "contact.kicker": "Get in touch", "contact.title": "Book your visit",
  "contact.addr": "Address", "contact.phone": "Phone", "contact.hours": "Hours",
  "contact.hoursVal": "Call for current opening hours",
  "contact.cta": "Call to book", "contact.cta2": "WhatsApp us",
  "footer.tag": "Home &amp; office maintenance · Al Quoz, Dubai"
}};

document.querySelectorAll("[data-i18n]").forEach(el => {
  const key = el.getAttribute("data-i18n");
  const val = I18N.en[key];
  if (val !== undefined) el.innerHTML = val;
  else console.warn("missing i18n key:", key);
});

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));
