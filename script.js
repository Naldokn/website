/* =====================================================================
   Muster & Service – script.js
   ---------------------------------------------------------------------
   Diese Datei enthält die LOGIK der Website. Inhalte (Texte, Leistungen,
   Bilder …) stehen NICHT hier, sondern in data.js bzw. am Anfang von
   index-editable.html. Normalerweise müssen Sie hier nichts ändern.

   Aufbau:
     1. Icons (SVG)
     2. Hilfsfunktionen
     3. Firmendaten in die Seite einsetzen
     4. Bereiche aus den Daten erzeugen (Leistungen, Projekte, …)
     5. Navigation (Sticky Header, Mobile Menü, aktiver Menüpunkt)
     6. Galerie-Lightbox
     7. Vorher/Nachher-Regler
     8. Videos (Klick zum Laden)
     9. Kontaktformular (Versand über Web3Forms)
    10. Scroll-Animationen, Nach-oben-Button
    11. Structured Data (SEO) aktualisieren
    12. Start
   ===================================================================== */
(function () {
    "use strict";

    /* ---------------------------------------------------------------
       1. ICONS
       Einfache Linien-Icons (24×24). Neue Icons können hier ergänzt
       und dann in data.js über ihren Namen verwendet werden.
       --------------------------------------------------------------- */
    const ICON_PATHS = {
        garden:  '<path d="M7 21h10"/><path d="M12 21v-9"/><path d="M12 12C12 8 9.5 5.5 5 5.5c0 4.5 2.5 6.5 7 6.5Z"/><path d="M12 12c0-4.5 2.5-8 7-8 0 4.5-2.5 8-7 8Z"/>',
        lawn:    '<path d="M3 20h18"/><path d="M5 20c0-4 1-7 3-9"/><path d="M9 20c0-5-1-8-3-11"/><path d="M12 20c0-6 1-10 3-13"/><path d="M16 20c0-4-1-7-3-9"/><path d="M19 20c0-3 1-6 2-7"/>',
        tree:    '<path d="M12 22v-7"/><path d="M9 18l3-3 3 3"/><path d="M7.5 15A4.5 4.5 0 0 1 6 6.6 6 6 0 0 1 17.6 6a4.5 4.5 0 0 1-1.1 9Z"/>',
        land:    '<path d="M4 21V8l2-3 2 3v13"/><path d="M10 21V8l2-3 2 3v13"/><path d="M16 21V8l2-3 2 3v13"/><path d="M2 11h20"/><path d="M2 17h20"/>',
        box:     '<path d="M21 8 12 3 3 8v8l9 5 9-5Z"/><path d="m3 8 9 5 9-5"/><path d="M12 13v8"/><path d="m7.5 5.5 9 5"/>',
        tools:   '<path d="M15 4a5 5 0 0 0-4.6 6.9L3.6 17.7a2 2 0 0 0 2.8 2.8l6.8-6.8A5 5 0 0 0 20 9l-3 3-2.5-.5L14 9l3-3a5 5 0 0 0-2-2Z"/>',
        paint:   '<rect x="3" y="3" width="15" height="6" rx="1.5"/><path d="M18 6h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-8v3"/><rect x="10.5" y="14" width="3" height="7" rx="1"/>',
        wall:    '<rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M3 9.3h18M3 14.6h18M9 4v5.3M15 9.3v5.3M9 14.6V20"/>',
        drill:   '<path d="m13.5 11.5-8 8a2.1 2.1 0 0 1-3-3l8-8"/><path d="m15 3-6 6 6 6 6-6-2.5-2.5 1-1-2-2-1 1Z"/>',
        key:     '<circle cx="8" cy="15" r="4.5"/><path d="m11.2 11.8 9-9"/><path d="m17 6 3 3"/><path d="m14.5 8.5 2 2"/>',
        sparkle: '<path d="M11 3l1.9 5.1L18 10l-5.1 1.9L11 17l-1.9-5.1L4 10l5.1-1.9Z"/><path d="M19 14.5l.8 2.2 2.2.8-2.2.8L19 20.5l-.8-2.2-2.2-.8 2.2-.8Z"/>',
        snow:    '<path d="M12 2v20"/><path d="M3.3 7l17.4 10"/><path d="M20.7 7 3.3 17"/><path d="m9 4 3 2.5L15 4"/><path d="m9 20 3-2.5 3 2.5"/>',
        star:    '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3l-5.5 2.9 1-6.2L3 9.6l6.2-.9Z"/>',
        home:    '<path d="M3 11 12 4l9 7"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-6h4v6"/>',
        truck:   '<path d="M3 6h11v10H3z"/><path d="M14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
        shield:  '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z"/><path d="m9 12 2 2 4-4"/>',
        clock:   '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
        check:   '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
        checkSm: '<path d="m5 12.5 4.5 4.5L19 7"/>',
        euro:    '<path d="M18 6.5a7 7 0 1 0 0 11"/><path d="M4 10h9"/><path d="M4 14h9"/>',
        user:    '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
        layers:  '<path d="m12 3 9 5-9 5-9-5Z"/><path d="m3 13 9 5 9-5"/>',
        phone:   '<path d="M5 3.5h3.5l2 5-2.5 1.6a11 11 0 0 0 5.4 5.4l1.6-2.5 5 2V18.5a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 5.7a2 2 0 0 1 2-2.2"/>',
        mail:    '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/>',
        pin:     '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
        chat:    '<path d="M4 20l1.3-4A8 8 0 1 1 8.4 19Z"/><path d="M8.5 11h.01M12 11h.01M15.5 11h.01"/>',
        arrowRight: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
        arrowUp: '<path d="M12 19V5"/><path d="m6 11 6-6 6 6"/>',
        chevLeft: '<path d="m15 6-6 6 6 6"/>',
        chevRight: '<path d="m9 6 6 6-6 6"/>',
        close:   '<path d="M6 6l12 12"/><path d="M18 6 6 18"/>',
        compare: '<path d="m9 7-5 5 5 5"/><path d="m15 7 5 5-5 5"/>',
        info:    '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/>',
        calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
        roller:  '<rect x="3" y="3" width="15" height="6" rx="1.5"/><path d="M18 6h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-8v3"/><rect x="10.5" y="14" width="3" height="7" rx="1"/>',
        building:'<path d="M4 21V6.5L12 3l8 3.5V21"/><path d="M2 21h20"/><path d="M8 9h2M14 9h2M8 13h2M14 13h2"/><path d="M10 21v-4h4v4"/>',
        spray:   '<path d="M12 3s-5.5 6.2-5.5 10.5a5.5 5.5 0 0 0 11 0C17.5 9.2 12 3 12 3Z"/><path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5"/>',
        eye:     '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
        logo:    '<path d="M3 11 12 4l9 7"/><path d="M6 9.5V20h12V9.5"/><path d="M12 20v-3.5a4 4 0 0 1 4-4"/>'
    };

    /** Liefert ein SVG-Icon als HTML-Text. Unbekannte Namen → Stern. */
    function icon(name) {
        if (typeof name === "string" && name.trim().startsWith("<svg")) return name; // eigenes SVG
        const paths = ICON_PATHS[name] || ICON_PATHS.star;
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + paths + "</svg>";
    }
    const PLAY_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15a1 1 0 0 0 1.5.9l12-7.5a1 1 0 0 0 0-1.8l-12-7.5A1 1 0 0 0 7 4.5Z"/></svg>';

    /* ---------------------------------------------------------------
       2. HILFSFUNKTIONEN
       --------------------------------------------------------------- */
    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

    /** Schützt Texte aus den Daten vor ungewollter HTML-Interpretation. */
    function esc(value) {
        return String(value == null ? "" : value)
            .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    }

    /* Die Daten kommen aus data.js bzw. aus dem Datenbereich in
       index-editable.html. Fehlt eine Liste, wird sie einfach leer gelassen. */
    const DATA = {
        site:     typeof websiteData   !== "undefined" ? websiteData   : {},
        services: typeof services      !== "undefined" ? services      : [],
        projects: typeof projects      !== "undefined" ? projects      : [],
        gallery:  typeof galleryImages !== "undefined" ? galleryImages : [],
        videos:   typeof videos        !== "undefined" ? videos        : [],
        benefits: typeof benefits      !== "undefined" ? benefits      : [],
        steps:    typeof processSteps  !== "undefined" ? processSteps  : []
    };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---------------------------------------------------------------
       3. FIRMENDATEN IN DIE SEITE EINSETZEN
       Im HTML markierte Stellen:
         data-bind="companyName"      → Text wird ersetzt
         data-bind-src="heroImage"    → Bildquelle wird ersetzt
         data-bind-alt="heroImageAlt" → Alt-Text wird ersetzt
         data-href="tel|mailto|whatsapp" → Link wird gesetzt
       --------------------------------------------------------------- */
    function computedValue(key) {
        const s = DATA.site;
        switch (key) {
            case "zipCity": return [s.zip, s.city].filter(Boolean).join(" ");
            case "address": return [s.street, [s.zip, s.city].filter(Boolean).join(" ")].filter(Boolean).join(", ");
            case "year": return String(new Date().getFullYear());
            default: return s[key];
        }
    }

    function telHref(phone) {
        let digits = String(phone || "").replace(/[^\d+]/g, "");
        return "tel:" + digits;
    }

    function whatsappHref() {
        const num = String(DATA.site.whatsapp || "").replace(/\D/g, "");
        if (!num) return "";
        const text = "Hallo " + (DATA.site.companyName || "") + ", ich interessiere mich für Ihre Leistungen.";
        return "https://wa.me/" + num + "?text=" + encodeURIComponent(text);
    }

    function applySiteData() {
        $$("[data-bind]").forEach((el) => {
            const v = computedValue(el.dataset.bind);
            if (v != null && v !== "") el.textContent = v;
        });
        $$("[data-bind-src]").forEach((el) => {
            const v = computedValue(el.dataset.bindSrc);
            if (v) el.setAttribute("src", v);
        });
        $$("[data-bind-alt]").forEach((el) => {
            const v = computedValue(el.dataset.bindAlt);
            if (v) el.setAttribute("alt", v);
        });
        $$("[data-href]").forEach((el) => {
            const type = el.dataset.href;
            if (type === "tel" && DATA.site.phone) el.href = telHref(DATA.site.phone);
            if (type === "mailto" && DATA.site.email) el.href = "mailto:" + DATA.site.email;
            if (type === "whatsapp") {
                const href = whatsappHref();
                if (href) { el.href = href; } else { el.hidden = true; }
            }
        });
    }

    /* ---------------------------------------------------------------
       4. BEREICHE AUS DEN DATEN ERZEUGEN
       --------------------------------------------------------------- */

    // Text der Formular-Option für alles, was keiner Leistung zugeordnet ist
    const OTHER_OPTION = "Weitere Leistungen / individuelle Anfrage";

    // 4a) Kurze Vorteile im Hero (websiteData.heroFacts)
    function renderHeroFacts() {
        const list = $("#hero-facts");
        const facts = DATA.site.heroFacts;
        if (!list || !Array.isArray(facts)) return;
        list.innerHTML = facts.map((f) => "<li>" + icon("checkSm") + " " + esc(f) + "</li>").join("");
        list.hidden = facts.length === 0;
    }

    // 4a) Leistungen
    function renderServices() {
        const grid = $("#services-grid");
        if (!grid) return;
        grid.innerHTML = DATA.services.map((s, i) => {
            const tags = Array.isArray(s.tags) && s.tags.length
                ? '<ul class="service-tags" aria-label="Stichworte">' + s.tags.map((t) => "<li>" + esc(t) + "</li>").join("") + "</ul>"
                : "";
            const items = Array.isArray(s.items) && s.items.length
                ? '<ul class="service-items">' + s.items.map((t) => "<li>" + icon("checkSm") + "<span>" + esc(t) + "</span></li>").join("") + "</ul>"
                : "";
            const serviceValue = s.highlight ? OTHER_OPTION : s.title;
            return (
                '<article class="service-card reveal' + (s.highlight ? " service-card--cta" : "") + '" style="--delay:' + (i % 3) * 0.08 + 's">' +
                    '<div class="service-icon">' + icon(s.icon) + "</div>" +
                    "<h3>" + esc(s.title) + "</h3>" +
                    "<p>" + esc(s.description) + "</p>" +
                    items +
                    tags +
                    '<a class="card-link" href="#kontakt" data-service="' + esc(serviceValue) + '">' +
                        esc(s.linkText || "Angebot anfragen") +
                        '<span class="visually-hidden"> zu ' + esc(s.title) + "</span>" + icon("arrowRight") +
                    "</a>" +
                "</article>"
            );
        }).join("");
        // Karten mit Leistungs-Listen bekommen ein breiteres 2-Spalten-Raster
        if (DATA.services.some((s) => Array.isArray(s.items) && s.items.length)) grid.classList.add("services-grid--detailed");
    }

    // 4b) Auswahlfeld "gewünschte Leistung" im Formular
    function renderServiceOptions() {
        const select = $("#cf-service");
        if (!select) return;
        const options = DATA.services.filter((s) => !s.highlight).map((s) => s.title);
        options.push(OTHER_OPTION);
        select.innerHTML = '<option value="">Bitte auswählen (optional)</option>' +
            options.map((o) => '<option value="' + esc(o) + '">' + esc(o) + "</option>").join("");
    }

    // 4c) Projekte inkl. Filter
    function projectMedia(p) {
        if (p.before && p.after) {
            return (
                '<div class="compare" data-compare>' +
                    '<img src="' + esc(p.before) + '" alt="Vorher: ' + esc(p.alt || p.title) + '" loading="lazy" decoding="async" width="1200" height="800">' +
                    '<img class="compare-after" src="' + esc(p.after) + '" alt="Nachher: ' + esc(p.alt || p.title) + '" loading="lazy" decoding="async" width="1200" height="800">' +
                    '<span class="compare-label compare-label--before">Vorher</span>' +
                    '<span class="compare-label compare-label--after">Nachher</span>' +
                    '<input class="compare-range" type="range" min="0" max="100" value="50" aria-label="Vorher/Nachher-Vergleich: ' + esc(p.title) + '">' +
                    '<span class="compare-line"><span class="compare-handle">' + icon("compare") + "</span></span>" +
                "</div>"
            );
        }
        return '<img src="' + esc(p.image) + '" alt="' + esc(p.alt || p.title) + '" loading="lazy" decoding="async" width="1200" height="800">';
    }

    function renderProjects() {
        const grid = $("#projects-grid");
        if (!grid) return;
        grid.innerHTML = DATA.projects.map((p, i) => {
            const meta = [p.date ? icon("calendar") + esc(p.date) : "", p.location ? icon("pin") + esc(p.location) : ""]
                .filter(Boolean).map((m) => "<span>" + m + "</span>").join("");
            return (
                '<article class="project-card reveal" data-category="' + esc(p.category) + '" style="--delay:' + (i % 3) * 0.08 + 's">' +
                    '<div class="project-media">' +
                        '<span class="project-badge">' + esc(p.category) + "</span>" +
                        projectMedia(p) +
                    "</div>" +
                    '<div class="project-body">' +
                        (meta ? '<div class="project-meta">' + meta + "</div>" : "") +
                        "<h3>" + esc(p.title) + "</h3>" +
                        "<p>" + esc(p.description) + "</p>" +
                    "</div>" +
                "</article>"
            );
        }).join("");

        // Filter-Buttons aus den vorhandenen Kategorien erzeugen
        const bar = $("#project-filter");
        if (!bar) return;
        const categories = Array.from(new Set(DATA.projects.map((p) => p.category).filter(Boolean)));
        if (categories.length < 2) { bar.hidden = true; return; }
        bar.innerHTML = ["Alle"].concat(categories).map((c, i) =>
            '<button type="button" class="filter-btn" data-filter="' + esc(c) + '" aria-pressed="' + (i === 0) + '">' + esc(c) + "</button>"
        ).join("");
        bar.addEventListener("click", (e) => {
            const btn = e.target.closest(".filter-btn");
            if (!btn) return;
            const filter = btn.dataset.filter;
            $$(".filter-btn", bar).forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
            $$(".project-card", grid).forEach((card) => {
                card.hidden = !(filter === "Alle" || card.dataset.category === filter);
                card.classList.add("is-visible");
            });
        });
    }

    // 4d) Videos
    function renderVideos() {
        const grid = $("#videos-grid");
        if (!grid) return;
        if (DATA.videos.some((v) => v.format === "hochformat")) grid.classList.add("videos-grid--portrait");
        grid.innerHTML = DATA.videos.map((v, i) => {
            let frame;
            const poster = v.poster ? '<img src="' + esc(v.poster) + '" alt="" loading="lazy" decoding="async" width="1280" height="720">' : "";
            if (!v.src) {
                // Platzhalter, solange kein Video hinterlegt ist
                frame = poster +
                    '<div class="video-placeholder">' +
                        '<span class="play-btn" aria-hidden="true">' + PLAY_ICON + "</span>" +
                        '<span class="video-note">VIDEO FOLGT – PLATZHALTER</span>' +
                    "</div>";
            } else if (v.type === "youtube") {
                // Zwei-Klick-Lösung: YouTube wird erst nach Klick geladen (Datenschutz)
                frame = poster +
                    '<div class="video-placeholder">' +
                        '<button type="button" class="play-btn" data-youtube="' + esc(v.src) + '" aria-label="Video abspielen: ' + esc(v.title) + '">' + PLAY_ICON + "</button>" +
                        '<span class="video-consent">Mit Klick wird das Video von YouTube geladen. Es gelten die Datenschutzhinweise von YouTube.</span>' +
                    "</div>";
            } else {
                frame = '<video controls preload="none" playsinline' + (v.poster ? ' poster="' + esc(v.poster) + '"' : "") + ">" +
                    '<source src="' + esc(v.src) + '" type="video/mp4">' +
                    "Ihr Browser unterstützt keine Videos." +
                    "</video>";
            }
            return (
                '<article class="video-card reveal' + (v.format === "hochformat" ? " video-card--portrait" : "") + '" style="--delay:' + (i % 3) * 0.08 + 's">' +
                    '<div class="video-frame">' + frame + "</div>" +
                    "<h3>" + esc(v.title) + "</h3>" +
                    "<p>" + esc(v.description) + "</p>" +
                "</article>"
            );
        }).join("");

        grid.addEventListener("click", (e) => {
            const btn = e.target.closest("[data-youtube]");
            if (!btn) return;
            const id = encodeURIComponent(btn.dataset.youtube);
            const frame = btn.closest(".video-frame");
            frame.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0" title="' + esc(btn.getAttribute("aria-label")) + '" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        });
    }

    // 4e) Galerie
    function renderGallery() {
        const grid = $("#gallery-grid");
        if (!grid) return;
        grid.innerHTML = DATA.gallery.map((img, i) => {
            const size = img.size ? " gallery-item--" + esc(img.size) : "";
            return (
                '<button type="button" class="gallery-item reveal' + size + '" data-index="' + i + '" aria-label="Bild vergrößern: ' + esc(img.caption || img.alt) + '">' +
                    '<img src="' + esc(img.thumb || img.src) + '" alt="' + esc(img.alt) + '" loading="lazy" decoding="async">' +
                "</button>"
            );
        }).join("");
    }

    // 4f) Vorteile
    function renderBenefits() {
        const grid = $("#benefits-grid");
        if (!grid) return;
        grid.innerHTML = DATA.benefits.map((b, i) =>
            '<div class="benefit reveal" style="--delay:' + (i % 3) * 0.08 + 's">' +
                '<div class="benefit-icon">' + icon(b.icon) + "</div>" +
                "<div><h3>" + esc(b.title) + "</h3><p>" + esc(b.text) + "</p></div>" +
            "</div>"
        ).join("");
    }

    // 4g) Ablauf
    function renderSteps() {
        const list = $("#steps-list");
        if (!list) return;
        list.innerHTML = DATA.steps.map((s, i) =>
            '<li class="step reveal" style="--delay:' + i * 0.08 + 's">' +
                '<span class="step-num" aria-hidden="true">' + (i + 1) + "</span>" +
                '<div><h3><span class="visually-hidden">Schritt ' + (i + 1) + ": </span>" + esc(s.title) + "</h3><p>" + esc(s.text) + "</p></div>" +
            "</li>"
        ).join("");
    }

    /* ---------------------------------------------------------------
       5. NAVIGATION
       --------------------------------------------------------------- */
    function initNavigation() {
        const header = $(".site-header");
        const toggle = $(".nav-toggle");
        const nav = $("#main-nav");
        if (!header) return;

        // a) Header verändert sich beim Scrollen
        const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        if (!toggle || !nav) return;

        // b) Mobiles Menü öffnen/schließen
        const setOpen = (open) => {
            toggle.setAttribute("aria-expanded", String(open));
            toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
            nav.classList.toggle("is-open", open);
            header.classList.toggle("menu-open", open);
            document.body.classList.toggle("no-scroll", open);
            if (open) {
                const first = $("a", nav);
                if (first) setTimeout(() => first.focus(), 50);
            }
        };
        toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));

        // c) Menü schließt nach Auswahl eines Punktes
        nav.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });

        // d) ESC schließt das Menü
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && nav.classList.contains("is-open")) { setOpen(false); toggle.focus(); }
        });

        // e) Beim Wechsel auf Desktop-Breite Menü-Zustand zurücksetzen
        window.matchMedia("(min-width: 960px)").addEventListener("change", (mq) => { if (mq.matches) setOpen(false); });

        // f) Aktiven Menüpunkt beim Scrollen hervorheben
        const links = $$('.nav-link[href^="#"]', nav);
        const sections = links.map((l) => document.getElementById(l.getAttribute("href").slice(1))).filter(Boolean);
        if (!("IntersectionObserver" in window) || !sections.length) return;
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                links.forEach((l) => {
                    const active = l.getAttribute("href") === "#" + entry.target.id;
                    l.classList.toggle("is-active", active);
                    if (active) l.setAttribute("aria-current", "true"); else l.removeAttribute("aria-current");
                });
            });
        }, { rootMargin: "-45% 0px -50% 0px" });
        sections.forEach((s) => io.observe(s));
    }

    // Klick auf "Anfrage stellen" bei einer Leistung → Leistung im Formular vorauswählen
    function initServicePreselect() {
        document.addEventListener("click", (e) => {
            const link = e.target.closest("[data-service]");
            if (!link) return;
            const select = $("#cf-service");
            if (!select) return;
            const value = link.dataset.service;
            if ($$("option", select).some((o) => o.value === value)) select.value = value;
        });
    }

    /* ---------------------------------------------------------------
       6. GALERIE-LIGHTBOX
       Bedienung: Klick/Enter öffnet · Pfeiltasten oder Buttons blättern ·
       ESC oder Klick auf den Hintergrund schließt · Wischen auf dem Handy
       --------------------------------------------------------------- */
    function initLightbox() {
        const grid = $("#gallery-grid");
        const box = $("#lightbox");
        if (!grid || !box || !DATA.gallery.length) return;

        const img = $(".lightbox-stage img", box);
        const caption = $(".lightbox-caption", box);
        const counter = $(".lightbox-counter", box);
        const btnPrev = $(".lb-prev", box);
        const btnNext = $(".lb-next", box);
        const btnClose = $(".lb-close", box);
        let index = 0;
        let lastFocus = null;

        function show(i) {
            const total = DATA.gallery.length;
            index = (i + total) % total;
            const item = DATA.gallery[index];
            img.style.animation = "none";
            void img.offsetWidth;             // Animation neu starten
            img.style.animation = "";
            img.src = item.src;
            img.alt = item.alt || "";
            caption.textContent = item.caption || item.alt || "";
            counter.textContent = (index + 1) + " / " + total;
            // Nächstes Bild vorladen
            const next = new Image();
            next.src = DATA.gallery[(index + 1) % total].src;
        }
        function open(i) {
            lastFocus = document.activeElement;
            show(i);
            box.classList.add("is-open");
            box.setAttribute("aria-hidden", "false");
            document.body.classList.add("no-scroll");
            btnClose.focus();
        }
        function close() {
            box.classList.remove("is-open");
            box.setAttribute("aria-hidden", "true");
            document.body.classList.remove("no-scroll");
            if (lastFocus) lastFocus.focus();
        }

        grid.addEventListener("click", (e) => {
            const item = e.target.closest(".gallery-item");
            if (item) open(Number(item.dataset.index));
        });
        btnPrev.addEventListener("click", () => show(index - 1));
        btnNext.addEventListener("click", () => show(index + 1));
        btnClose.addEventListener("click", close);
        box.addEventListener("click", (e) => {
            if (e.target === box || e.target.classList.contains("lightbox-stage")) close();
        });

        document.addEventListener("keydown", (e) => {
            if (!box.classList.contains("is-open")) return;
            if (e.key === "Escape") close();
            else if (e.key === "ArrowLeft") show(index - 1);
            else if (e.key === "ArrowRight") show(index + 1);
            else if (e.key === "Tab") {
                // Fokus innerhalb der Lightbox halten
                const f = [btnClose, btnPrev, btnNext];
                const pos = f.indexOf(document.activeElement);
                e.preventDefault();
                const nextPos = e.shiftKey ? (pos <= 0 ? f.length - 1 : pos - 1) : (pos + 1) % f.length;
                f[nextPos].focus();
            }
        });

        // Wischgesten (Touch)
        let startX = 0, startY = 0;
        box.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; startY = e.touches[0].clientY; }, { passive: true });
        box.addEventListener("touchend", (e) => {
            const dx = e.changedTouches[0].clientX - startX;
            const dy = e.changedTouches[0].clientY - startY;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) show(index + (dx < 0 ? 1 : -1));
        }, { passive: true });
    }

    /* ---------------------------------------------------------------
       7. VORHER/NACHHER-REGLER
       --------------------------------------------------------------- */
    function initCompare() {
        $$("[data-compare]").forEach((wrap) => {
            const range = $(".compare-range", wrap);
            if (!range) return;
            const update = () => wrap.style.setProperty("--pos", range.value + "%");
            range.addEventListener("input", update);
            update();
        });
    }

    /* ---------------------------------------------------------------
       9. KONTAKTFORMULAR
       Das Formular prüft die Eingaben und verschickt die Anfrage direkt
       über den Dienst Web3Forms an das Postfach, für das der Zugangsschlüssel
       (websiteData.formAccessKey) erstellt wurde.
       Ist kein Schlüssel eingetragen, öffnet sich stattdessen das
       E-Mail-Programm des Besuchers mit einer fertigen Nachricht.
       --------------------------------------------------------------- */
    function initContactForm() {
        const form = $("#contact-form");
        if (!form) return;
        const status = $("#form-status");

        const rules = {
            name:    (v) => v.trim().length >= 2 || "Bitte geben Sie Ihren Namen ein.",
            email:   (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
            phone:   (v) => v.trim() === "" || /^[\d\s+()\/-]{6,}$/.test(v.trim()) || "Bitte prüfen Sie die Telefonnummer.",
            message: (v) => v.trim().length >= 10 || "Bitte beschreiben Sie Ihr Anliegen kurz (mind. 10 Zeichen).",
            privacy: (v, el) => el.checked || "Bitte stimmen Sie der Datenschutzerklärung zu."
        };

        function validateField(el) {
            const rule = rules[el.name];
            if (!rule) return true;
            const result = rule(el.value, el);
            const wrap = el.closest(".form-field") || el.closest(".form-check");
            const msg = wrap ? $(".field-error", wrap) : null;
            const ok = result === true;
            el.setAttribute("aria-invalid", String(!ok));
            if (wrap) wrap.classList.toggle("has-error", !ok);
            if (msg) msg.textContent = ok ? "" : result;
            return ok;
        }

        form.addEventListener("blur", (e) => { if (e.target.name && e.target.value) validateField(e.target); }, true);
        form.addEventListener("input", (e) => {
            if (e.target.getAttribute("aria-invalid") === "true") validateField(e.target);
        });
        form.addEventListener("change", (e) => { if (e.target.type === "checkbox") validateField(e.target); });

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const fields = $$("input, select, textarea", form).filter((el) => rules[el.name]);
            const invalid = fields.filter((el) => !validateField(el));
            if (invalid.length) {
                invalid[0].focus();
                status.classList.remove("is-visible");
                return;
            }
            const f = form.elements;
            const name = f.name.value.trim();
            const visit = f.visit && f.visit.checked;
            const service = f.service.value || "Allgemeine Anfrage";
            const subject = "Anfrage über die Website – " + service;
            const tel = DATA.site.phone ? '<a href="' + telHref(DATA.site.phone) + '">' + esc(DATA.site.phone) + "</a>" : "";
            const mailtoHref = () => {
                const body = [
                    "Name: " + name,
                    "E-Mail: " + f.email.value.trim(),
                    "Telefon: " + (f.phone.value.trim() || "-"),
                    "Gewünschte Leistung: " + service,
                    "Kostenlose Besichtigung gewünscht: " + (visit ? "ja" : "nein"),
                    "",
                    f.message.value.trim()
                ].join("\n");
                return "mailto:" + (DATA.site.email || "") + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
            };
            const showStatus = (html, isError) => {
                status.innerHTML = icon(isError ? "info" : "check") + "<p>" + html + "</p>";
                status.classList.toggle("form-status--error", !!isError);
                status.classList.add("is-visible");
                status.focus();
            };

            // ---- Variante A: Ohne Zugangsschlüssel öffnet sich das E-Mail-Programm des Besuchers ----
            const accessKey = (DATA.site.formAccessKey || "").trim();
            if (!accessKey) {
                window.location.href = mailtoHref();
                showStatus("<strong>Fast geschafft, " + esc(name) + "!</strong><br>" +
                    "Ihr E-Mail-Programm öffnet sich mit Ihrer fertigen Anfrage – bitte dort nur noch auf <em>Senden</em> tippen." +
                    (visit ? " Wir melden uns dann, um einen Termin für die kostenlose Besichtigung abzustimmen." : "") +
                    (tel ? "<br>Öffnet sich nichts? Rufen Sie uns einfach an: " + tel + "." : ""));
                return;
            }

            // ---- Variante B: Direkter Versand über Web3Forms (Zugangsschlüssel in websiteData.formAccessKey) ----
            const btn = $('button[type="submit"]', form);
            const btnHtml = btn.innerHTML;
            btn.disabled = true;
            btn.textContent = "Wird gesendet …";
            const payload = {
                access_key: accessKey,
                subject: subject,
                from_name: "Website " + (DATA.site.companyName || ""),
                name: name,
                email: f.email.value.trim(),
                "Telefon": f.phone.value.trim() || "-",
                "Gewünschte Leistung": service,
                "Kostenlose Besichtigung": visit ? "ja" : "nein",
                message: f.message.value.trim(),
                botcheck: f.botcheck && f.botcheck.checked ? true : ""
            };
            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
                body: JSON.stringify(payload)
            })
                .then((res) => res.json().then((data) => ({ ok: res.ok && data.success })))
                .catch(() => ({ ok: false }))
                .then((result) => {
                    btn.disabled = false;
                    btn.innerHTML = btnHtml;
                    if (result.ok) {
                        showStatus("<strong>Vielen Dank, " + esc(name) + "!</strong><br>" +
                            "Ihre Anfrage ist bei uns eingegangen. Wir melden uns schnellstmöglich" +
                            (visit ? ", um einen Termin für die kostenlose Besichtigung abzustimmen." : "."));
                        form.reset();
                        $$("[aria-invalid]", form).forEach((el) => el.removeAttribute("aria-invalid"));
                    } else {
                        showStatus("<strong>Das hat leider nicht geklappt.</strong><br>" +
                            "Ihre Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut, " +
                            '<a href="' + esc(mailtoHref()) + '">senden Sie sie per E-Mail</a>' +
                            (tel ? " oder rufen Sie uns an: " + tel : "") + ".", true);
                    }
                });
        });
    }

    /* ---------------------------------------------------------------
       10. SCROLL-ANIMATIONEN & NACH-OBEN-BUTTON
       --------------------------------------------------------------- */
    function initReveal() {
        const items = $$(".reveal");
        if (prefersReducedMotion || !("IntersectionObserver" in window)) {
            items.forEach((el) => el.classList.add("is-visible"));
            return;
        }
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    io.unobserve(entry.target);
                }
            });
        }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
        items.forEach((el) => io.observe(el));
    }

    function initToTop() {
        const btn = $(".to-top");
        if (!btn) return;
        const onScroll = () => btn.classList.toggle("is-visible", window.scrollY > 700);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        btn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
            const skip = $(".brand");
            if (skip) skip.focus({ preventScroll: true });
        });
    }

    /* ---------------------------------------------------------------
       11. STRUCTURED DATA (SEO)
       Aktualisiert das JSON-LD im <head> mit den Daten aus websiteData.
       --------------------------------------------------------------- */
    function updateStructuredData() {
        const node = $("#structured-data");
        const s = DATA.site;
        if (!node || !s.companyName) return;
        const base = s.websiteUrl || "";
        const data = {
            "@context": "https://schema.org",
            "@type": "HousePainter",
            "name": s.companyName,
            "description": s.shortDescription || s.slogan,
            "url": base,
            "image": base ? new URL(s.heroImage || "", base).href : undefined,
            "telephone": s.phone,
            "email": s.email,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": s.street,
                "postalCode": s.zip,
                "addressLocality": s.city,
                "addressCountry": "DE"
            },
            "areaServed": s.serviceArea,
            "openingHours": s.openingHoursSchema,
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Dienstleistungen",
                "itemListElement": DATA.services.filter((x) => !x.highlight).map((x) => ({
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": x.title, "description": x.description }
                }))
            }
        };
        node.textContent = JSON.stringify(data, null, 2);
    }

    /* ---------------------------------------------------------------
       12. START
       --------------------------------------------------------------- */
    function init() {
        applySiteData();
        renderHeroFacts();
        renderServices();
        renderServiceOptions();
        renderProjects();
        renderVideos();
        renderGallery();
        renderBenefits();
        renderSteps();

        // Statische Icons im HTML (<span data-icon="phone"></span>) befüllen
        $$("[data-icon]").forEach((el) => { el.innerHTML = icon(el.dataset.icon); });

        initNavigation();
        initServicePreselect();
        initLightbox();
        initCompare();
        initContactForm();
        initReveal();
        initToTop();
        updateStructuredData();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
