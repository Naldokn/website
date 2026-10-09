/* =====================================================================
   INHALTE DER WEBSITE  (data.js)
   =====================================================================
   In dieser Datei stehen ALLE Inhalte, die sich regelmäßig ändern:
   Firmendaten, Leistungen, Projekte, Galerie-Bilder, Videos, Vorteile
   und Ablauf-Schritte.

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
   den Dateinamen eintragen, z. B. "assets/images/garten-01.jpg".
   Externe Bilder (https://…) funktionieren ebenfalls.

   ALLE ANGABEN SIND DEMO-/PLATZHALTERDATEN!
   ===================================================================== */


/* ---------------------------------------------------------------------
   1) UNTERNEHMENSDATEN
   Diese Werte werden automatisch überall auf der Seite eingesetzt
   (Navigation, Hero, Kontakt, Footer, Structured Data für Google …).
   --------------------------------------------------------------------- */
const websiteData = {
    companyName: "Muster & Service",                 // Firmenname
    owner: "Max Mustermann",                         // Inhaber / Ansprechpartner
    slogan: "Zuverlässige Lösungen rund um Haus, Garten und Grundstück.",
    heroEyebrow: "Allround-Service aus Musterstadt", // kleine Zeile über der Hero-Überschrift
    heroText: "Vom Rasenschnitt über die Renovierung bis zum Winterdienst: Wir erledigen anfallende Arbeiten sauber, pünktlich und zu fairen Preisen – alles aus einer Hand.",
    shortDescription: "Ihr Allround-Dienstleister für Haus, Garten, Grundstück und vieles mehr – zuverlässig, flexibel und persönlich.",

    // Adresse
    street: "Musterstraße 12",
    zip: "49000",
    city: "Musterstadt",
    serviceArea: "Musterstadt und Umgebung (ca. 30 km)",

    // Kontakt
    phone: "01234 567890",              // so wird die Nummer angezeigt
    email: "info@muster-service.de",
    whatsapp: "491234567890",           // nur Ziffern, mit Ländervorwahl ohne "+" – leer lassen ("") blendet den WhatsApp-Button aus
    openingHours: "Mo–Fr: 08:00–18:00 Uhr",
    openingHoursSchema: "Mo-Fr 08:00-18:00", // gleiche Zeiten im Google-Format (für Structured Data)

    // Über uns
    aboutTitle: "Ihr zuverlässiger Partner für vielseitige Arbeiten",
    aboutText: "Muster & Service ist Ihr Ansprechpartner, wenn rund um Haus, Garten und Grundstück etwas zu tun ist. Ob regelmäßige Pflege, einmalige Aufgaben oder kurzfristige Hilfe – wir hören zu, beraten ehrlich und packen mit an.",
    aboutText2: "Statt für jede Kleinigkeit einen anderen Betrieb zu beauftragen, bekommen Sie bei uns viele Leistungen aus einer Hand. Das spart Zeit, Abstimmung und Nerven.",
    experienceYears: "10+",            // Zahl im Badge auf dem Über-uns-Bild
    experienceLabel: "Jahre Erfahrung (Demo)",

    // Bilder für Hero und Über-uns-Bereich
    heroImage: "assets/images/hero-01.jpg",
    heroImageAlt: "Gepflegtes Grundstück mit Garten (Platzhalterbild)",
    aboutImage: "assets/images/ueber-uns-01.jpg",
    aboutImageAlt: "Mitarbeiter bei der Arbeit (Platzhalterbild)",

    // Website-Adresse (für Structured Data / Social Media) – später echte Domain eintragen
    websiteUrl: "https://www.example.com/"
};


/* ---------------------------------------------------------------------
   2) DIENSTLEISTUNGEN
   Jede Leistung wird automatisch als Karte angezeigt und erscheint
   außerdem im Auswahlfeld des Kontaktformulars.

   Felder:
     title       – Name der Leistung
     description – kurzer Text (1–2 Sätze)
     icon        – Name eines Icons. Verfügbar sind:
                   garden, lawn, tree, land, box, tools, paint, wall,
                   drill, key, sparkle, snow, star, home, truck
                   (alternativ: kompletter <svg>…</svg>-Code)
     tags        – optionale Stichworte (Liste) – kann auch [] sein
     linkText    – optional, Text des Links (Standard: "Anfrage stellen")
     highlight   – optional true = dunkle Hervorhebungs-Karte
   --------------------------------------------------------------------- */
const services = [
    {
        title: "Gartenpflege",
        description: "Rasenpflege, Heckenschnitt, Sträucher und allgemeine Pflegearbeiten – regelmäßig oder einmalig.",
        icon: "garden",
        tags: ["Rasen", "Beete", "Laub"]
    },
    {
        title: "Baum- & Heckenschnitt",
        description: "Fachgerechter Rückschnitt von Hecken, Sträuchern und kleineren Bäumen inklusive Entsorgung des Grünschnitts.",
        icon: "tree",
        tags: ["Hecken", "Sträucher", "Entsorgung"]
    },
    {
        title: "Grundstückspflege",
        description: "Pflege von Wegen, Freiflächen und Außenanlagen – damit Ihr Grundstück jederzeit einen guten Eindruck macht.",
        icon: "land",
        tags: ["Wege", "Freiflächen", "Unkraut"]
    },
    {
        title: "Renovierung",
        description: "Malerarbeiten, kleinere Renovierungsarbeiten und Instandsetzungen in Wohnung, Haus und Gewerbe.",
        icon: "paint",
        tags: ["Streichen", "Tapezieren", "Ausbessern"]
    },
    {
        title: "Trockenbau",
        description: "Ständerwände, Deckenverkleidungen und Vorsatzschalen – sauber geplant und ordentlich umgesetzt.",
        icon: "wall",
        tags: ["Wände", "Decken", "Dämmung"]
    },
    {
        title: "Reparaturen",
        description: "Kleine Reparaturen rund ums Haus, für die Sie keinen großen Handwerksbetrieb beauftragen möchten.",
        icon: "tools",
        tags: ["Kleinreparaturen", "Instandsetzung"]
    },
    {
        title: "Montage",
        description: "Aufbau und Montage von Möbeln, Regalen, Lampen, Gardinenstangen und weiteren Einrichtungen.",
        icon: "drill",
        tags: ["Möbel", "Küchen", "Lampen"]
    },
    {
        title: "Entrümpelung",
        description: "Räumung von Wohnungen, Kellern, Dachböden, Garagen und Grundstücken – inklusive fachgerechter Entsorgung.",
        icon: "box",
        tags: ["Keller", "Wohnung", "Garage"]
    },
    {
        title: "Hausmeisterservice",
        description: "Regelmäßige Betreuung und Pflege von Immobilien und Grundstücken für Privat, Vermieter und Gewerbe.",
        icon: "key",
        tags: ["Kontrollgänge", "Kleinreparaturen"]
    },
    {
        title: "Reinigung",
        description: "Treppenhaus-, Fenster- und Grundreinigung sowie Reinigung nach Renovierung oder Umzug.",
        icon: "sparkle",
        tags: ["Treppenhaus", "Fenster", "Bauendreinigung"]
    },
    {
        title: "Winterdienst",
        description: "Schnee- und Eisbeseitigung sowie Betreuung von Grundstücken im Winter – zuverlässig und früh am Morgen.",
        icon: "snow",
        tags: ["Räumen", "Streuen", "Bereitschaft"]
    },
    {
        title: "Ihr Anliegen ist nicht dabei?",
        description: "Sprechen Sie uns an – wir übernehmen auch individuelle Aufgaben und finden gemeinsam eine Lösung.",
        icon: "star",
        tags: [],
        linkText: "Individuell anfragen",
        highlight: true
    }
];


/* ---------------------------------------------------------------------
   3) PROJEKTE / "UNSERE ARBEITEN"
   Felder:
     title       – Projekttitel
     category    – Kategorie (daraus entstehen automatisch die Filter-Buttons)
     description – kurze Beschreibung
     date        – optional, z. B. "Mai 2026" (oder "" für keine Angabe)
     location    – optional, z. B. "Musterstadt"
     image       – Pfad zum Bild
     alt         – Bildbeschreibung (wichtig für Barrierefreiheit & SEO)
     before / after – optional: zwei Bilder für einen Vorher/Nachher-Regler.
                      Ist "before" gesetzt, wird statt "image" der Regler gezeigt.
   --------------------------------------------------------------------- */
const projects = [
    {
        title: "Gartenpflege – Beispielprojekt",
        category: "Garten",
        description: "Komplette Grundstückspflege inklusive Rückschnitt und Rasenpflege.",
        date: "Juni 2026",
        location: "Musterstadt",
        image: "",
        alt: "Vorher/Nachher-Vergleich einer Gartenpflege (Platzhalter)",
        before: "assets/images/projekt-01-vorher.jpg",
        after: "assets/images/projekt-01-nachher.jpg"
    },
    {
        title: "Wohnzimmer neu gestrichen",
        category: "Renovierung",
        description: "Abkleben, Ausbessern kleiner Risse und Neuanstrich von Wänden und Decke an einem Tag.",
        date: "Mai 2026",
        location: "Musterdorf",
        image: "assets/images/maler-01.jpg",
        alt: "Frisch gestrichenes Wohnzimmer (Platzhalter)"
    },
    {
        title: "Kellerräumung mit Entsorgung",
        category: "Entrümpelung",
        description: "Vollständige Räumung eines Kellers inklusive Sortierung und fachgerechter Entsorgung.",
        date: "April 2026",
        location: "Musterstadt",
        image: "assets/images/entruempelung-01.jpg",
        alt: "Geräumter Kellerraum (Platzhalter)"
    },
    {
        title: "Heckenschnitt Reihenhausanlage",
        category: "Garten",
        description: "Formschnitt von rund 120 Metern Hecke inklusive Abtransport des Grünschnitts.",
        date: "März 2026",
        location: "Musterhausen",
        image: "assets/images/hecke-01.jpg",
        alt: "Frisch geschnittene Hecke (Platzhalter)"
    },
    {
        title: "Trennwand im Büro",
        category: "Trockenbau",
        description: "Einbau einer Ständerwand mit Tür, Spachtelarbeiten und Anstrich für ein zusätzliches Büro.",
        date: "Februar 2026",
        location: "Musterstadt",
        image: "assets/images/trockenbau-01.jpg",
        alt: "Neue Trockenbauwand im Büro (Platzhalter)"
    },
    {
        title: "Winterdienst Wohnanlage",
        category: "Hausmeisterservice",
        description: "Räum- und Streudienst für Gehwege und Zufahrten einer Wohnanlage über die gesamte Wintersaison.",
        date: "Winter 2025/26",
        location: "Musterdorf",
        image: "assets/images/winterdienst-01.jpg",
        alt: "Geräumter Gehweg im Winter (Platzhalter)"
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
               (aktuell: 4+2+1+1+2+1+1+1+1+2 = 16).
   --------------------------------------------------------------------- */
const galleryImages = [
    { src: "assets/images/garten-01.jpg",       alt: "Gepflegter Garten (Platzhalter)",           caption: "Gartenpflege – Musterstadt",             size: "big"  },
    { src: "assets/images/maler-02.jpg",        alt: "Malerarbeiten im Flur (Platzhalter)",       caption: "Malerarbeiten im Treppenhaus",           size: "tall" },
    { src: "assets/images/rasen-01.jpg",        alt: "Frisch gemähter Rasen (Platzhalter)",       caption: "Rasenpflege und Vertikutieren",          size: ""     },
    { src: "assets/images/montage-01.jpg",      alt: "Montierte Möbel (Platzhalter)",             caption: "Möbelmontage im Neubau",                 size: ""     },
    { src: "assets/images/hausmeister-01.jpg",  alt: "Betreutes Mehrfamilienhaus (Platzhalter)",  caption: "Hausmeisterservice für eine Wohnanlage", size: "wide" },
    { src: "assets/images/garten-02.jpg",       alt: "Beetgestaltung (Platzhalter)",              caption: "Beetpflege im Frühjahr",                 size: ""     },
    { src: "assets/images/reinigung-01.jpg",    alt: "Gereinigter Eingangsbereich (Platzhalter)", caption: "Grundreinigung nach Renovierung",        size: ""     },
    { src: "assets/images/renovierung-01.jpg",  alt: "Renovierter Raum (Platzhalter)",            caption: "Renovierung einer Mietwohnung",          size: ""     },
    { src: "assets/images/garten-03.jpg",       alt: "Gartenweg (Platzhalter)",                   caption: "Grundstückspflege mit Wegereinigung",    size: ""     },
    { src: "assets/images/hecke-01.jpg",        alt: "Hecke nach dem Schnitt (Platzhalter)",      caption: "Heckenschnitt",                          size: "wide" }
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
   --------------------------------------------------------------------- */
const videos = [
    {
        title: "Gartenpflege im Zeitraffer",
        description: "Ein kompletter Pflegeeinsatz vom ersten Schnitt bis zum fertigen Ergebnis.",
        type: "file",
        src: "",                                   // z. B. "assets/videos/gartenpflege.mp4"
        poster: "assets/images/video-poster-01.jpg"
    },
    {
        title: "Renovierung einer Wohnung",
        description: "Vorher, nachher und ein Blick auf die einzelnen Arbeitsschritte.",
        type: "file",
        src: "",                                   // z. B. "assets/videos/renovierung.mp4"
        poster: "assets/images/video-poster-02.jpg"
    },
    {
        title: "Winterdienst am frühen Morgen",
        description: "So sorgen wir dafür, dass Wege und Zufahrten rechtzeitig frei sind.",
        type: "youtube",
        src: "",                                   // z. B. "abc123XYZ" (YouTube-Video-ID)
        poster: "assets/images/video-poster-03.jpg"
    }
];


/* ---------------------------------------------------------------------
   6) VORTEILE ("Warum wir?")
   icon – siehe Icon-Liste bei den Dienstleistungen, zusätzlich:
          shield, clock, check, euro, user, layers
   --------------------------------------------------------------------- */
const benefits = [
    { title: "Zuverlässig",                 text: "Vereinbarte Termine halten wir ein – und melden uns, wenn sich etwas ändert.", icon: "shield" },
    { title: "Flexibel",                    text: "Einmalige Einsätze, regelmäßige Pflege oder kurzfristige Hilfe.",             icon: "clock"  },
    { title: "Saubere Arbeit",              text: "Wir hinterlassen jeden Einsatzort so ordentlich, wie wir ihn vorfinden.",      icon: "check"  },
    { title: "Faire Preise",                text: "Transparente Angebote ohne versteckte Kosten.",                               icon: "euro"   },
    { title: "Persönliche Betreuung",       text: "Ein fester Ansprechpartner von der Anfrage bis zur Abnahme.",                 icon: "user"   },
    { title: "Viele Leistungen aus einer Hand", text: "Ein Anruf statt mehrerer Firmen – das spart Zeit und Abstimmung.",        icon: "layers" }
];


/* ---------------------------------------------------------------------
   7) ABLAUF ("So läuft es ab")
   --------------------------------------------------------------------- */
const processSteps = [
    { title: "Kontakt aufnehmen", text: "Per Telefon, E-Mail, WhatsApp oder Formular." },
    { title: "Anliegen besprechen", text: "Wir klären Ihre Wünsche – bei Bedarf direkt vor Ort." },
    { title: "Angebot erhalten", text: "Sie bekommen ein klares, verständliches Angebot." },
    { title: "Termin vereinbaren", text: "Wir finden einen Termin, der Ihnen passt." },
    { title: "Arbeit wird erledigt", text: "Sauber, pünktlich und mit gemeinsamer Abnahme." }
];
