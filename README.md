# PirnaSmart – Quellcode

Dies ist das PirnaSmart-Web-App-Projekt mit Karte, Parkflächen, Erlebnisrouten, Entdecken, Informationen und einer Credits-Demofunktion.

## Projektdateien
- `index.html` – Oberfläche und JavaScript der Web-App
- `parkflaechen.json` – Parkflächen-/Koordinatendaten
- `events.json` – Veranstaltungsdaten
- `icons/` – App-Symbole
- `manifest.webmanifest` – Einstellungen für die installierbare Web-App
- `service-worker.js` – Offline-Cache

## App verwenden
1. Den kompletten Ordner entpacken bzw. kopieren. Dateinamen und `icons/`-Unterordner beibehalten.
2. Für die Veröffentlichung alle Dateien mit derselben Ordnerstruktur in ein GitHub-Repository hochladen.
3. Unter GitHub **Settings → Pages** die Veröffentlichung aus dem Branch `main`, Ordner `/ (root)`, aktivieren.
4. Den angezeigten GitHub-Pages-Link öffnen und testen.

Die Karte benötigt eine Internetverbindung zum Laden der Kartendaten und ggf. der Kartenbibliothek. Einige Inhalte und die Credits-Funktion sind Demonstrations-/Prototypfunktionen; es ist keine produktionsreife kommunale Plattform.

## Rechte
Die Weitergabe dieser Dateien allein erteilt **keine pauschale Erlaubnis zur kommerziellen Weiterverwertung**. Klärt die Nutzungsrechte mit den tatsächlichen Rechteinhabern, insbesondere bei Teamarbeit, KI-generierten Bestandteilen und Fremdkomponenten. Die OpenStreetMap-Kartendaten und externe Bibliotheken unterliegen eigenen Lizenz- und Attributionsbedingungen.
