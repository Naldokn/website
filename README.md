# Muster & Service – Demo-Website

Statische, responsive Website (HTML5, CSS3, Vanilla JavaScript) für einen Allround-Service-Dienstleister.
**Alle Inhalte sind Platzhalter / Mock-Daten.**

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
├── impressum.html        → Demo-Vorlage mit [PLATZHALTERN]
├── datenschutz.html      → Demo-Vorlage mit [PLATZHALTERN]
├── copyright.html        → Demo-Vorlage mit [PLATZHALTERN]
└── assets/
    ├── images/           → Bilder (Platzhalter, gleichnamig ersetzen)
    ├── videos/           → eigene MP4-Videos hier ablegen
    └── icons/            → Favicon
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
(z. B. `garten-01.jpg` überschreiben). Oder neuen Dateinamen in `data.js` eintragen.
Empfehlung: JPG/WebP, max. ca. 1600 px breit, unter 300 KB.

## Videos

- Eigenes Video: Datei nach `assets/videos/` legen, bei `type: "file"` als `src` eintragen,
  z. B. `"assets/videos/gartenpflege.mp4"`.
- YouTube: `type: "youtube"` und bei `src` nur die Video-ID eintragen. Das Video wird erst nach
  Klick geladen (datenschutzfreundliche Zwei-Klick-Lösung).

## Kontaktformular

Das Formular prüft die Eingaben und zeigt eine Demo-Erfolgsmeldung, **versendet aber nichts**.
Für den echten Betrieb z. B.:
- PHP-Mailskript beim Webhoster, oder
- Formular-Dienst (z. B. Formspree, Web3Forms) – `action` am `<form>` setzen und in
  `script.js` (Abschnitt 9) den Demo-Teil durch einen `fetch()`-Aufruf ersetzen.
  Den Dienst in der Datenschutzerklärung aufführen.

## Checkliste vor dem Livegang

- [ ] `<meta name="robots" content="noindex, nofollow">` in allen HTML-Dateien entfernen
- [ ] `https://www.example.com/` (canonical, Open Graph, `websiteUrl`) durch echte Domain ersetzen
- [ ] Alle Mock-Daten in `data.js` ersetzen
- [ ] Impressum, Datenschutz, Copyright: alle gelben `[PLATZHALTER]` ersetzen, **rechtlich prüfen lassen**
- [ ] Demo-Hinweis am Formular entfernen und echten Versand einrichten
- [ ] Platzhalterbilder durch echte Fotos ersetzen (Einwilligungen bei Personen beachten)
- [ ] `og-image.jpg` (1200 × 630 px) für Social-Media-Vorschau ersetzen

## Hosting

Läuft auf jedem normalen Webspace (Dateien per FTP hochladen) oder über **GitHub Pages**
(Repository anlegen, Dateien hochladen, unter *Settings → Pages* den Branch auswählen).
