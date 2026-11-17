/* =====================================================================
   INHALTE DER WEBSITE  (data.js)
   =====================================================================
   In dieser Datei stehen ALLE Inhalte, die sich regelmäßig ändern:
   Firmendaten, Leistungen, Projekte (Vorher/Nachher), Galerie-Bilder,
   Videos, Vorteile und Ablauf-Schritte.

   ▸ Diese Datei wird von index.html, impressum.html, datenschutz.html
     und copyright.html geladen.
   ▸ index-editable.html enthält dieselben Daten noch einmal direkt in
     der Datei (siehe dort), damit sie komplett eigenständig ist.

   So bearbeiten Sie die Inhalte:
   1. Text zwischen den Anführungszeichen "..." ändern.
   2. Neue Einträge: einen vorhandenen Block { ... }, kopieren, direkt
      darunter einfügen und anpassen. Wichtig: Zwischen zwei Blöcken
      steht immer ein Komma.
   3. Datei speichern und die Website im Browser neu laden.

   Bilder: Eigene Fotos in den Ordner assets/images/ legen und unten
   den Dateinamen eintragen, z. B. "assets/images/fassade-vorher.jpg".
   Am einfachsten: eigenes Foto unter DEMSELBEN Namen speichern.

   Projektfotos liegen in assets/images/projekte/, Galerie-Bilder in
   assets/images/galerie/, Videos in assets/videos/.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1) UNTERNEHMENSDATEN
   Diese Werte werden automatisch überall auf der Seite eingesetzt
   (Navigation, Hero, Kontakt, Footer, Structured Data für Google …).
   --------------------------------------------------------------------- */
const websiteData = {
    companyName: "Knott Allroundservice",            // Firmenname
    owner: "Renaldo Knott",                          // Inhaber / Ansprechpartner
    slogan: "Sauber, zuverlässig und professionell – wir bringen neuen Glanz in Ihr Zuhause!",
    heroEyebrow: "Bramsche & Osnabrück · ca. 80 km Umkreis", // kleine Zeile über der Hero-Überschrift
    heroTitle: "Malerarbeiten und Reinigung rund ums Haus",       // große Überschrift (sagt, was wir machen)
    heroText: "Anstriche innen und außen, Lackierarbeiten, Fassaden- und Außenreinigung – mit kostenloser Besichtigung und fairem Angebot.",
    shortDescription: "Malerarbeiten, Fassadenreinigung und Reinigung von Außenflächen – sauber, zuverlässig und professionell. Für Privat- und Geschäftskunden.",

    // Kurze Vorteile direkt unter den Hero-Buttons (beliebig viele)
    heroFacts: [
        "Kostenlose & unverbindliche Besichtigung",
        "Privat- und Geschäftskunden",
        "Faire Preise"
    ],

    // Adresse
    street: "Westerkappelner Str. 27",
    zip: "49565",
    city: "Bramsche-Achmer",
    serviceArea: "Osnabrück und Umgebung (ca. 80 km)", // Einsatzgebiet

    // Kontakt
    phone: "0173 6363684",              // Handynummer – so wird die Nummer angezeigt
    email: "info@knottallroundservice.de",
    whatsapp: "491736363684",           // nur Ziffern, mit Ländervorwahl ohne "+" – leer lassen ("") blendet den WhatsApp-Button aus
    // Kontaktformular: Zugangsschlüssel von web3forms.com (für info@knottallroundservice.de erstellt).
    // Leer lassen ("") = das Formular öffnet stattdessen das E-Mail-Programm des Besuchers.
    formAccessKey: "",
    openingHours: "Mo–Sa: 07:00–17:00 Uhr",
    openingHoursSchema: "Mo-Sa 07:00-17:00", // gleiche Zeiten im Google-Format (für Structured Data)

    // Über uns
    aboutTitle: "Neuer Glanz für Wände, Fassaden und Außenflächen",
    aboutText: "Wir sind Ihr Ansprechpartner für Malerarbeiten innen und außen, für die Reinigung von Hausfassaden und für alles, was im Außenbereich wieder sauber werden soll – von der Einfahrt bis zur Terrasse.",
    aboutText2: "Bevor wir loslegen, schauen wir uns alles vor Ort an – kostenlos und unverbindlich. Sie bekommen eine ehrliche Beratung und ein klares Angebot. Danach arbeiten wir sauber, termingerecht und hinterlassen alles ordentlich.",
    badgeValue: "0 €",                  // große Zahl im Badge auf dem Über-uns-Bild
    badgeLabel: "für Besichtigung und Angebot",

    // Bilder für Hero und Über-uns-Bereich
    heroImage: "assets/images/hero-01.jpg",
    heroImageAlt: "Weiß lackierte Schrankwand in einem renovierten Raum",
    aboutImage: "assets/images/ueber-uns-01.jpg",
    aboutImageAlt: "Frisch lackierte Haustür mit Glasfront",

    // Website-Adresse (für Structured Data / Social Media) – später echte Domain eintragen,
    // z. B. "https://BENUTZERNAME.github.io/REPOSITORY/" bei GitHub Pages
    websiteUrl: "https://knottallroundservice.de/"
};


/* ---------------------------------------------------------------------
   2) DIENSTLEISTUNGEN
   Jede Leistung wird automatisch als Karte angezeigt und erscheint
   außerdem im Auswahlfeld des Kontaktformulars.

   Felder:
     title       – Name der Leistung
     description – kurzer Text (1–2 Sätze)
     icon        – Name eines Icons. Verfügbar sind:
                   paint, roller, building, spray, sparkle, tools, home,
                   wall, star, layers, eye, shield, clock, euro, user
                   (alternativ: kompletter <svg>…</svg>-Code)
     items       – Liste der einzelnen Leistungen (erscheint mit Häkchen)
     tags        – optional: kurze Stichworte als kleine Etiketten
     linkText    – optional, Text des Links (Standard: "Angebot anfragen")
     highlight   – optional true = dunkle Hervorhebungs-Karte
   --------------------------------------------------------------------- */
const services = [
    {
        title: "Malerarbeiten",
        description: "Innen und außen: vom frischen Wandanstrich bis zur lackierten Haustür – sauber abgeklebt und ordentlich ausgeführt.",
        icon: "roller",
        items: [
            "Innenanstriche",
            "Außenanstriche",
            "Wände und Decken streichen",
            "Lackierarbeiten (Türen, Fenster, Heizkörper usw.)",
            "Tapezierarbeiten",
            "Spachtelarbeiten",
            "Ausbesserungsarbeiten",
            "Renovierungsarbeiten",
            "Fassadenanstriche"
        ]
    },
    {
        title: "Fassadenreinigung",
        description: "Algen, Moos und Schmutz lassen jede Fassade alt aussehen. Wir reinigen schonend und frischen sie wieder auf.",
        icon: "building",
        items: [
            "Reinigung von Hausfassaden",
            "Entfernung von Algen und Moos",
            "Entfernung von Schmutz und Ablagerungen",
            "Fassadenpflege und Auffrischung"
        ]
    },
    {
        title: "Reinigung im Außenbereich",
        description: "Einfahrt, Terrasse, Hof und Gehwege – mit Hochdruck und dem passenden Verfahren für jeden Belag.",
        icon: "spray",
        items: [
            "Einfahrtsreinigung",
            "Terrassenreinigung",
            "Gehweg- und Pflasterreinigung",
            "Hofreinigung",
            "Steinreinigung",
            "Entfernung von Moos und Unkraut",
            "Hochdruckreinigung"
        ]
    },
    {
        title: "Weitere Dienstleistungen",
        description: "Ihr Anliegen passt nicht in eine Schublade? Sprechen Sie uns an – vieles ist nach Absprache möglich.",
        icon: "star",
        items: [
            "Allgemeine Renovierungsarbeiten",
            "Gebäudepflege",
            "Reinigung von Außenflächen",
            "Individuelle Kundenwünsche nach Absprache"
        ],
        linkText: "Individuell anfragen",
        highlight: true
    }
];


/* ---------------------------------------------------------------------
   3) PROJEKTE / "UNSERE ARBEITEN" (Vorher/Nachher)
   Felder:
     title       – Projekttitel
     category    – Kategorie (daraus entstehen automatisch die Filter-Buttons)
     description – kurze Beschreibung
     date        – optional, z. B. "Mai 2026" (oder "" für keine Angabe)
     location    – optional, z. B. "Musterstadt"
     image       – Pfad zum Bild (wenn es kein Vorher/Nachher gibt)
     alt         – Bildbeschreibung (wichtig für Barrierefreiheit & SEO)
     before / after – zwei Bilder für den Vorher/Nachher-Regler.
                      Ist "before" gesetzt, wird statt "image" der Regler gezeigt.

   --------------------------------------------------------------------- */
const projects = [
    {
        title: "Wände gespachtelt und gestrichen",
        category: "Malerarbeiten",
        description: "Alte, fleckige Wandflächen ausgebessert, gespachtelt und sauber weiß gestrichen.",
        date: "",
        location: "",
        before: "assets/images/projekte/B-raum-vorher.jpg",
        after: "assets/images/projekte/B-raum-nachher.jpg",
        alt: "Raum mit Durchgang zur Treppe vor und nach dem Anstrich"
    },
    {
        title: "Paneeldecke weiß gestrichen",
        category: "Malerarbeiten",
        description: "Holzpaneele an der Decke vorbereitet und deckend weiß gestrichen – der Raum wirkt deutlich heller.",
        date: "",
        location: "",
        before: "assets/images/projekte/A-decke-vorher.jpg",
        after: "assets/images/projekte/A-decke-nachher.jpg",
        alt: "Paneeldecke vor und nach dem Anstrich"
    },
    {
        title: "Badezimmer renoviert",
        category: "Renovierung",
        description: "Vom Rohbauzustand zum fertigen, hellen Badezimmer.",
        date: "",
        location: "",
        before: "assets/images/projekte/C-bad-vorher.jpg",
        after: "assets/images/projekte/C-bad-nachher.jpg",
        alt: "Badezimmer vor und nach der Renovierung"
    },
    {
        title: "Einbauschrank weiß lackiert",
        category: "Lackierarbeiten",
        description: "Komplette Schrankwand von Holzoptik auf Weiß umlackiert – frischer Look, ohne neue Möbel.",
        date: "",
        location: "",
        before: "assets/images/projekte/F-schrank-vorher.jpg",
        after: "assets/images/projekte/F-schrank-nachher.jpg",
        alt: "Schrankwand vor und nach dem Lackieren"
    },
    {
        title: "Haustür und Glasfront lackiert",
        category: "Lackierarbeiten",
        description: "Rahmen, Glasfront und Haustür vorbereitet und neu in Weiß lackiert.",
        date: "",
        location: "",
        before: "assets/images/projekte/E-haustuer-vorher.jpg",
        after: "assets/images/projekte/E-haustuer-nachher.jpg",
        alt: "Haustür mit Glasfront vor und nach dem Lackieren"
    },
    {
        title: "Treppe gestrichen",
        category: "Malerarbeiten",
        description: "Treppenwange und Setzstufen gestrichen, die Holzstufen dabei sauber abgeklebt.",
        date: "",
        location: "",
        before: "assets/images/projekte/G-treppe-vorher.jpg",
        after: "assets/images/projekte/G-treppe-nachher.jpg",
        alt: "Treppe während und nach den Malerarbeiten"
    }
];


/* ---------------------------------------------------------------------
   4) GALERIE
   Felder:
     src     – Pfad zum Bild (wird auch in der großen Ansicht genutzt)
     alt     – Bildbeschreibung
     caption – Bildunterschrift in der großen Ansicht (Lightbox)
     size    – optional: "" (normal), "wide" (breit), "tall" (hoch),
               "big" (groß) – sorgt für das abwechslungsreiche Raster.
               Tipp für ein lückenloses Raster: normal = 1 Feld, wide/tall = 2,
               big = 4 Felder. Die Summe sollte durch 4 teilbar sein
               (aktuell: 4+2+2+2+2+1+1+2 = 16).
   --------------------------------------------------------------------- */
const galleryImages = [
    { src: "assets/images/galerie/raum-treppendurchgang.jpg", alt: "Frisch gestrichener Raum mit Durchgang zur Treppe", caption: "Wände gespachtelt und gestrichen",   size: "big"  },
    { src: "assets/images/galerie/treppe.jpg",                alt: "Gestrichene Treppe mit Holzstufen",                caption: "Treppe gestrichen",                 size: "tall" },
    { src: "assets/images/galerie/bad.jpg",                   alt: "Renoviertes Badezimmer",                           caption: "Badezimmer nach der Renovierung",   size: "tall" },
    { src: "assets/images/galerie/einbauschrank.jpg",         alt: "Weiß lackierte Schrankwand",                       caption: "Einbauschrank weiß lackiert",       size: "wide" },
    { src: "assets/images/galerie/raum-verteilerkasten.jpg",  alt: "Frisch gestrichener Raum",                         caption: "Wände und Decke gestrichen",        size: "wide" },
    { src: "assets/images/galerie/haustuer.jpg",              alt: "Weiß lackierte Haustür mit Glasfront",             caption: "Haustür und Glasfront lackiert",    size: ""     },
    { src: "assets/images/galerie/schmaler-raum.jpg",         alt: "Heller Raum mit kleinem Fenster",                  caption: "Raum komplett neu gestrichen",      size: ""     },
    { src: "assets/images/galerie/decke.jpg",                 alt: "Weiß gestrichene Paneeldecke",                     caption: "Paneeldecke weiß gestrichen",       size: "wide" }
];


/* ---------------------------------------------------------------------
   5) VIDEOS
   Felder:
     title       – Titel des Videos
     description – kurze Beschreibung
     type        – "file"    = eigenes Video (MP4) aus assets/videos/
                   "youtube" = YouTube-Video (nur die Video-ID eintragen,
                               z. B. "dQw4w9WgXcQ"). Wird aus Datenschutz-
                               gründen erst nach Klick geladen.
     src         – Pfad zur MP4-Datei bzw. YouTube-ID.
                   LEER ("") = es wird ein Platzhalter angezeigt.
     poster      – Vorschaubild
     format      – optional "hochformat" für senkrecht gefilmte Handy-Videos
   --------------------------------------------------------------------- */
const videos = [
    {
        title: "Raum nach dem Anstrich",
        description: "Frisch gespachtelt und gestrichen – bereit für den Bodenbelag.",
        type: "file",
        format: "hochformat",                      // "hochformat" für Handy-Videos, sonst weglassen
        src: "assets/videos/raum-treppendurchgang.mp4",
        poster: "assets/images/video-raum-treppendurchgang.jpg"
    },
    {
        title: "Wohnraum fertig gestrichen",
        description: "Großer Wohnraum mit Terrassentür nach den Malerarbeiten.",
        type: "file",
        format: "hochformat",
        src: "assets/videos/wohnraum-terrasse.mp4",
        poster: "assets/images/video-wohnraum-terrasse.jpg"
    },
    {
        title: "Saubere Wände bis in die Ecken",
        description: "Ein weiterer Raum nach dem Spachteln und Streichen.",
        type: "file",
        format: "hochformat",
        src: "assets/videos/raum-verteilerkasten.mp4",
        poster: "assets/images/video-raum-verteilerkasten.jpg"
    }
];


/* ---------------------------------------------------------------------
   6) VORTEILE ("Warum wir?")
   icon – siehe Icon-Liste bei den Dienstleistungen
   --------------------------------------------------------------------- */
const benefits = [
    { title: "Kostenlose Besichtigung",     text: "Wir schauen uns alles vor Ort an – kostenlos und unverbindlich.",           icon: "eye"    },
    { title: "Faire Preise",                text: "Ein klares Angebot ohne versteckte Kosten.",                                 icon: "euro"   },
    { title: "Zuverlässig und sauber",      text: "Sorgfältige Arbeit und ein ordentlich hinterlassener Arbeitsplatz.",         icon: "shield" },
    { title: "Termingerecht",               text: "Vereinbarte Termine halten wir ein – und melden uns, wenn sich etwas ändert.", icon: "clock"  },
    { title: "Professionelle Beratung",     text: "Ehrliche Einschätzung, welches Vorgehen für Ihr Objekt sinnvoll ist.",       icon: "user"   },
    { title: "Privat- und Geschäftskunden", text: "Ob Eigenheim, Mietobjekt oder Gewerbeimmobilie – Sie sind willkommen.",     icon: "home"   }
];


/* ---------------------------------------------------------------------
   7) ABLAUF ("So läuft es ab")
   --------------------------------------------------------------------- */
const processSteps = [
    { title: "Kontakt aufnehmen",        text: "Per Telefon, E-Mail, WhatsApp oder über das Formular." },
    { title: "Kostenlose Besichtigung",  text: "Wir schauen uns alles vor Ort an und beraten Sie." },
    { title: "Unverbindliches Angebot",  text: "Sie erhalten ein klares Angebot zu fairen Preisen." },
    { title: "Termin vereinbaren",       text: "Wir finden einen Termin, der Ihnen passt." },
    { title: "Saubere Ausführung",       text: "Termingerecht erledigt – mit gemeinsamer Abnahme." }
];
