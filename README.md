# Knott Allroundservice – Website

Statische, responsive Website (HTML5, CSS3, Vanilla JavaScript) für Knott Allroundservice – Malerarbeiten, Fassadenreinigung und Reinigung im Außenbereich.

## Öffnen

`index.html` per Doppelklick im Browser öffnen – fertig. Kein Server, keine Datenbank, keine Installation nötig.

## Dateien

```
/
├── index.html            → fertige Website für Besucher (Inhalte aus data.js)
├── index-editable.html   → gleiche Website, Inhalte stehen direkt oben in der Datei
├── data.js               → ALLE Inhalte für index.html und die Unterseiten
├── style.css             → Design (Farben ganz oben unter :root)
├── script.js             → Logik (Navigation, Galerie, Lightbox, Formular …)
├── impressum.html        → Rechtstext
├── datenschutz.html      → Rechtstext
├── copyright.html        → Rechtstext
└── assets/
    ├── images/           → Logo, Titelbild, projekte/ (Vorher/Nachher), galerie/
    ├── videos/           → Videos (Hochformat, ohne Ton)
    └── icons/            → Browser-Symbole
```

## Inhalte ändern

| Was?                              | Wo?                                                       |
|-----------------------------------|-----------------------------------------------------------|
| Firmenname, Slogan, Telefon, …    | `websiteData` in `data.js` (bzw. oben in `index-editable.html`) |
| Neue Dienstleistung               | Eintrag in `services` kopieren und anpassen               |
| Neues Projekt / Referenz          | Eintrag in `projects`                                     |
| Galerie-Bild                      | Eintrag in `galleryImages`                                |
| Video                             | Eintrag in `videos` – `src` ausfüllen                     |
| Farben                            | `style.css`, ganz oben (`--color-accent` usw.)            |
| Seitentitel / Google-Beschreibung | `<title>` und `<meta name="description">` im `<head>`     |

**index.html vs. index-editable.html:** Beide sehen gleich aus und nutzen dieselben `style.css` / `script.js`.
`index.html` holt die Inhalte aus `data.js`, `index-editable.html` hat sie direkt eingebaut (Suche nach
„START DER BEARBEITBAREN INHALTE“). Wer nur mit einer Datei arbeiten möchte, kann `index-editable.html`
später einfach in `index.html` umbenennen.

## Bilder ersetzen

Am einfachsten: eigenes Foto unter **demselben Dateinamen** in `assets/images/` speichern
(z. B. `fassade-vorher.jpg` überschreiben). Oder neuen Dateinamen in `data.js` eintragen.
Empfehlung: JPG/WebP, max. ca. 1600 px breit, unter 300 KB.

## Videos

- Eigenes Video: Datei nach `assets/videos/` legen, bei `type: "file"` als `src` eintragen,
  z. B. `"assets/videos/fassadenreinigung.mp4"`.
- YouTube: `type: "youtube"` und bei `src` nur die Video-ID eintragen. Das Video wird erst nach
  Klick geladen (datenschutzfreundliche Zwei-Klick-Lösung).

## Kontaktformular

Das Formular verschickt Anfragen direkt über den kostenlosen Dienst **Web3Forms** (250 Anfragen pro Monat frei).

1. Auf https://web3forms.com mit `info@knottallroundservice.de` einen Zugangsschlüssel (Access Key) erstellen – er kommt per E-Mail.
2. Den Schlüssel in `data.js` bei `formAccessKey: ""` zwischen die Anführungszeichen setzen (und ebenso in `index-editable.html`).
3. Fertig – Anfragen landen im Postfach. Ohne Schlüssel öffnet das Formular stattdessen das E-Mail-Programm des Besuchers.

## Stand

Die Website ist fertig für die Veröffentlichung (keine Sperre für Suchmaschinen mehr, außer bei
`index-editable.html`, die bewusst nicht bei Google erscheinen soll).

## Online stellen mit GitHub Pages

1. Auf github.com ein Konto anlegen und ein neues, öffentliches Repository erstellen (z. B. `website`).
2. Den Inhalt dieses Ordners hochladen („Add file → Upload files“). `index-editable.html` und `README.md` können mit hoch, stören nicht.
3. Unter *Settings → Pages* bei „Branch“ `main` und `/ (root)` wählen und speichern.
4. Die Datei `CNAME` (enthält `knottallroundservice.de`) ist schon dabei. Unter *Settings → Pages → Custom domain* die Domain eintragen.
5. Beim Domain-Anbieter die DNS-Einträge setzen:
   - 4 × A-Eintrag für `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - CNAME-Eintrag für `www` auf `BENUTZERNAME.github.io`
   (Werte vorher in der GitHub-Hilfe „Managing a custom domain“ gegenprüfen.)
6. Wenn die Domain erkannt ist, „Enforce HTTPS“ aktivieren.
7. Optional: Seite in der Google Search Console anmelden und `sitemap.xml` einreichen.
