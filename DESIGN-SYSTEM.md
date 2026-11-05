# PirnaSmart · Riverside

Designsystem aus der bereitgestellten Immobilien-App-Referenz, für eine zugängliche Stadt- und Park-App übersetzt. Bestehende Abläufe und Daten bleiben erhalten.

## Grundlagen

| Token | Wert | Verwendung |
|---|---|---|
| Canvas | `#F6F5F1` | warmer, ruhiger Hintergrund |
| Surface | `#FFFEFA` / `#FFFFFF` | Karten, Suchfeld, Informationsflächen |
| Brand | `#123F3C` | primäre Aktionen, aktive Navigation |
| Accent | `#EE8A01` | gewähltes Ziel, Fokus, kleine Hervorhebungen |
| Accent soft | `#FFF0D8` | Tags, Nummerierung und Auswahlzustände |
| Accent ink | `#855000` | lesbare Schrift auf hellen Akzentflächen |
| Text | `#193D3A` | Haupttexte |
| Muted | `#667672` | sekundäre Informationen |
| Border | `#E3E6DE` | zurückhaltende Konturen |

Orange dient als Akzent, nicht als Hintergrund für kleine weiße Schrift. Primäre Buttons verwenden dunkles Petrol mit weißer Schrift.

## Typografie und Geometrie

- Manrope: Überschriften, Markenname und Kartentitel, Gewichte 600–800.
- DM Sans: Fließtext und Bedienelemente, Gewichte 400–700.
- Lokale Schriftdateien in `fonts/`; kein externer Font-Aufruf zur Laufzeit.
- Abstände: 4, 8, 12, 16, 24, 32 Pixel.
- Radien: 12 Pixel kleine Felder, 20 Pixel Inhaltskarten, 28 Pixel Karte; pillenförmige Buttons.
- Einheitliche SVG-Linienicons aus `design-icons.js`, keine zusätzliche Icon-Bibliothek.

## Komponenten

- Schwebende, transparente Navigationsleiste mit Blur; aktive Registerkarte in Petrol, Icon in Orange. Textbeschriftungen bleiben erhalten.
- Helle Suchfläche mit konsistenten, tastaturbedienbaren Vorschlägen.
- Ruhige Kartenansicht: vorhandene OSM-Kacheln visuell entsättigt und aufgehellt. Datenanbieter, Koordinaten, Attribution und Bedienung bleiben unverändert.
- Parkplatzflächen erhalten zurückhaltende Konturen. Parkhäuser und Parkplätze haben unterscheidbare Marker; gewählte Marker werden orange hervorgehoben.
- Standortpunkt, Ziel-Stecknadel, schließbare Zielkarte und Infoanzeige behalten ihre Abläufe.
- Alle Unterseiten verwenden dieselben Farben, Schriften, Felder, Buttons und Karten.

## Dateien

- `design-system.css`: Tokens, Komponenten, responsive Varianten und Fokuszustände.
- `fonts.css` und `fonts/`: lokal ausgelieferte Schriften.
- `design-icons.js`: visuelle SVG-Ersetzung einschließlich dynamischer Inhalte; keine Änderung am App-Zustand.
- `index.html`: Einbindung und Farben der Leaflet-Geometrien.

Bei Änderungen an Interaktionen die bestehende App-Logik separat prüfen. Visuelle Änderungen sollen keine Daten, Filter oder Einstellungen verändern.
