(() => {
  const languagePicker = document.getElementById('app-language');
  const languageTrigger = languagePicker.querySelector('summary');
  const languageOptions = languagePicker.querySelectorAll('[data-language]');
  const messages = new Map(`
Sprache auswählen|Choose language
CityMate Pirna – zur Startseite|CityMate Pirna – home
Parken. Entdecken. Erleben.|Park. Discover. Explore.
Menü|Menu
Menü öffnen|Open menu
Menü schließen|Close menu
Hauptnavigation|Main navigation
PIRNA ENTDECKEN|DISCOVER PIRNA
Parken|Parking
Erlebnisroute|Plan a route
Entdecken|Discover
Infos|Info
GUT ANKOMMEN IN PIRNA|WELCOME TO PIRNA
Dein Parkplatz. Dein Weg in die Stadt.|Find parking. Explore the city.
Finde einen Parkplatz in der Nähe deines Ziels.|Find a parking spot near your destination.
Wo möchtest du hin?|Where would you like to go?
Zum Beispiel Marktplatz oder Bahnhof|For example, market square or train station
Suche zurücksetzen|Clear search
Suchvorschläge|Search suggestions
Suche nach einem Ort oder Parkplatz in Pirna. Wähle einen Vorschlag aus oder klicke auf die Karte, um ein Ziel festzulegen.|Search for a place or parking spot in Pirna. Pick a suggestion or select a point on the map.
Parkplatzart|Parking type
Alle Parkplätze|All parking
Parkhäuser|Parking garages
Straßen & Parkplätze|Street parking & lots
Übernehmen|Apply
Zurücksetzen|Reset
Karte der Parkplätze in Pirna|Map of parking in Pirna
Standort finden|Find my location
Tipp: Klicke auf eine freie Stelle der Karte, um ein Ziel zu wählen.|Tip: Select an empty spot on the map to set a destination.
P = Parkplatz ·|P = Parking lot ·
= Parkhaus ·|= Parking garage ·
= Ladepunkt (Status unbekannt)|= Charging point (status unknown)
Parkplatzdetails und Navigation|Parking details and directions
Gut geparkt. Und jetzt Pirna entdecken?|Parked up? Now explore Pirna.
Sehenswürdigkeiten, Cafés und kleine Ausflüge durch die Stadt.|Sights, cafés and short trips around the city.
Pirna entdecken →|Discover Pirna →
Pirna entdecken|Discover Pirna
Deine Erlebnisroute|Your route
In 3 Schritten zum Ausflug durch Pirna.|Plan your trip around Pirna in three steps.
DEINE PLANUNG|YOUR PLAN
Start → Entdecken → Genießen|Start → Explore → Enjoy
Start & Parken|Start & parking
Lege deinen Ausgangspunkt fest.|Choose your starting point.
Startpunkt auswählen|Choose a starting point
Meinen Standort als Start wählen|Use my location as the starting point
Mein Standort|My location
Dein Standort|Your location
Gespeicherter Startpunkt|Saved starting point
Start an deinem aktuellen Standort|Start at your current location
Personen|People
Parkdauer (Std.)|Parking time (hours)
Ziele auswählen|Choose your stops
Stelle dir deinen Tag zusammen.|Plan your day.
Sehenswürdigkeiten|Sights
Sehenswürdigkeit|Sight
KULTUR & ORTE|CULTURE & PLACES
Essen & Trinken|Food & drink
GENUSS|FOOD & DRINK
Dein Tagesplan|Your itinerary
Die Reihenfolge deiner Stopps.|The order of your stops.
Route auf Karte|Show route on map
Route speichern|Save route
Gespeicherte Routen|Saved routes
Noch keine Routen gespeichert.|No saved routes yet.
Name der Route|Route name
Aktuelle Route speichern|Save current route
Route gespeichert.|Route saved.
Gib einen Namen ein und wähle mindestens einen Stopp.|Enter a name and choose at least one stop.
Die Route konnte in diesem Browser nicht gespeichert werden.|This browser could not save the route.
Gewählt|Selected
Hinzu|Add
Kostenlos / Spende möglich|Free / donations welcome
Noch keine Ziele gewählt. Oben kannst du Orte hinzufügen.|No stops selected. Choose places above to add them.
Geschätzte Kosten pro Person|Estimated cost per person
Bei Parkflächen aus der Liste ohne unbekannte Parkgebühren.|Excludes parking fees where the price is unknown.
Gesamt für alle|Total for everyone
Parken (anteilig)|Parking (per person)
unbekannt / nicht enthalten|Unknown / excluded
Eintritte|Admission
Essen (Demo-Budget)|Food (sample budget)
Für die neu aufgenommenen Parkflächen sind Gebühren unbekannt und deshalb nicht in der Kostenschätzung enthalten. Bisherige Parktarife sind Richtwerte, Gastro-Budgets Testwerte. Die Verbindungslinie auf der Karte ist schematisch; Google Maps berechnet den tatsächlichen Fußweg.|The estimate excludes parking fees where prices are unknown. Listed parking rates are indicative and food budgets are examples. The line on the map is schematic. Google Maps calculates the walking route.
Die schönsten Orte, Restaurants und Veranstaltungen auf einen Blick.|Discover Pirna’s sights, restaurants and events.
Übersicht|Overview
Erleben|Explore
Genießen|Food & drink
Veranstaltungen|Events
Kultur, Geschichte & besondere Orte|Culture, history and places to visit
Restaurants und Cafés in der Altstadt|Restaurants and cafés in the old town
Was demnächst in Pirna los ist|What’s coming up in Pirna
Karte|Map
Karte ↗|Map ↗
Route starten|Start directions
Route starten ↗|Start directions ↗
Route starten →|Start directions →
Jetzt Route starten|Start directions now
Jetzt Route starten ↗|Start directions now ↗
Termin prüfen|Check date
Mehr Infos|More information
Mehr Infos ↗|More information ↗
Eintritt frei|Free admission
Aktuell keine kommenden Termine im gespeicherten Datenstand. Bitte den Veranstaltungskalender prüfen.|No upcoming events in the saved data. Check the official events calendar.
Informationen|Information
Parken in Pirna|Parking in Pirna
Die 37 kartierten Bereiche aus deiner Koordinatenliste sind direkt in die bestehenden Filter eingeordnet (4 Parkhäuser, 1 Straßenparkzone, 31 Parkflächen und 1 Motorradparkplatz). Für diese sind freie Plätze, Gebühren, Zufahrt und Parkberechtigung nicht bekannt. Angaben vor Ort prüfen. Auf der Parkplatzansicht werden keine Belegungszahlen angezeigt.|The map covers 37 parking areas, including four garages, one street parking zone, 31 lots and one motorcycle parking area. Availability, fees, access and eligibility are unknown. Check signs on site.
Offizielle Parkinformationen|Official parking information
Offizielle Parkinformationen ↗|Official parking information ↗
Die Veranstaltungen werden beim Öffnen und alle 30 Minuten aus dem veröffentlichten Datenstand geladen. Bei fehlender Verbindung bleibt der letzte gespeicherte Stand sichtbar.|Event data loads when you open the app and every 30 minutes thereafter. If you go offline, the last saved data remains visible.
Aktualisierung wird geprüft …|Checking for updates …
Gespeicherte Veranstaltungsdaten geladen|Saved event data loaded
Offline / Datenquelle nicht erreichbar – gespeicherte Termine werden angezeigt|Offline or data unavailable. Showing saved events.
Aktueller Veranstaltungskalender|Current events calendar
Aktueller Veranstaltungskalender ↗|Current events calendar ↗
Demo-Daten|Sample data
Die 37 Parkflächen wurden vom Team vor Ort mit GPS erfasst. Belegungsdaten liegen nicht vor. Ladepunkte aus der Liste ohne Live-Status. Gastronomie-Budgets sind Testwerte.|The team mapped all 37 parking areas on site using GPS. Occupancy and live charging status are unavailable. Food budgets are examples.
Bus & Bahn|Public transport
Eine Fahrplanauskunft kann in einer späteren Ausbaustufe ergänzt werden.|Timetable information may be added in a future version.
Kein hinterlegter Ort gefunden. Wähle dein Ziel direkt auf der Karte.|No matching place found. Choose your destination on the map.
Wähle einen Suchvorschlag oder ein Ziel auf der Karte.|Choose a search suggestion or a destination on the map.
DEIN ZIEL|YOUR DESTINATION
Ziel entfernen|Clear destination
Wähle einen Parkplatz auf der Karte oder starte die Navigation zum Ziel.|Choose a parking spot on the map or start directions to the destination.
Ausgewähltes Ziel|Selected destination
Dein Standort ist gefunden|Location found
Wähle als Nächstes dein Ziel.|Next, choose your destination.
Start: dein Standort|Start: your location
Navigation zum ausgewählten Ziel|Directions to the selected destination
Zum Ziel navigieren|Directions to destination
Zum Ziel navigieren ↗|Directions to destination ↗
Zum Parkplatz navigieren|Directions to parking
Zum Parkplatz navigieren ↗|Directions to parking ↗
Navigationsanzeige ausblenden|Hide directions panel
Rundgang|Walking route
Stadtrundgang ab hier planen|Plan a walk from here
Routenansicht schließen|Close route preview
Google Maps startet mit den ersten 2 Stopps.|Google Maps opens with the first two stops.
Start und ausgewählte Stopps in deiner Reihenfolge.|Starting point and selected stops in your chosen order.
Wähle zuerst mindestens einen Stopp für deine Erlebnisroute.|Choose at least one stop for your route.
Füge mindestens einen Stopp für deine Erlebnisroute hinzu.|Add at least one stop to your route.
Standort wird ermittelt …|Finding your location …
Dein Standort ist als Start ausgewählt.|Your location is set as the starting point.
Der blaue Punkt zeigt deinen Standort. Wähle jetzt ein Ziel über die Suche oder direkt auf der Karte.|The blue dot marks your location. Search for a destination or choose one on the map.
Standort ermittelt. Du kannst ihn als Start wählen.|Location found. You can use it as your starting point.
Dein Browser unterstützt keine Standortbestimmung. Du kannst dein Ziel über die Suche oder auf der Karte wählen.|Your browser does not support location access. Use search or choose your destination on the map.
Der Standort konnte nicht zuverlässig ermittelt werden. Bitte erneut versuchen.|Your location could not be determined accurately. Try again.
Standortzugriff nicht erlaubt. Bitte erlaube den Standort für diese Seite in deinen Browsereinstellungen oder wähle ein Ziel auf der Karte.|Location access was denied. Enable location access for this site in your browser settings or choose a destination on the map.
Dein Standort ist gerade nicht verfügbar. Bitte prüfe die Standortdienste deines Geräts und versuche es erneut.|Your location is unavailable. Check your device’s location settings and try again.
Die Standortbestimmung dauert zu lange. Bitte versuche es erneut, möglichst mit freier Sicht nach draußen.|Finding your location took too long. Try again, ideally with a clear view outdoors.
Standortbestimmung fehlgeschlagen. Bitte erneut versuchen.|Could not find your location. Try again.
Schließen|Close
Schloss Sonnenstein über der historischen Altstadt von Pirna|Sonnenstein Castle above Pirna’s historic old town
Blick über den Pirnaer Marktplatz|View over Pirna’s market square
Kinder entdecken Pirna|Children exploring Pirna
Panorama der Pirnaer Altstadt|Panorama of Pirna’s old town
Historischer Marktplatz in der Altstadt|Historic market square in the old town
Schlossanlage von außen; Bastionenführung saisonal und kostenpflichtig|Castle exterior. Seasonal bastion tours require a ticket.
Erwachsene 6 €, ermäßigt 4 €, bis 18 Jahre frei; Di–So 10–17 Uhr|Adults €6, concessions €4, under 18 free. Tue–Sun, 10 am–5 pm.
Besichtigung; Spende empfohlen (1 € pro Erwachsenem)|Open to visitors. Suggested donation €1 per adult.
Restaurant · Budget pro Person simuliert|Restaurant · sample budget per person
Burgerrestaurant · Budget pro Person simuliert|Burger restaurant · sample budget per person
Café und Restaurant · Budget pro Person simuliert|Café and restaurant · sample budget per person
Parkplatz / Parkfläche|Parking lot
Parkhaus / Tiefgarage|Parking garage
Straßenparkzone|Street parking zone
Motorradparkplatz|Motorcycle parking
Parkplatz|Parking spot
Restaurant / Café|Restaurant / café
Details im offiziellen Kalender|Details in the official calendar
Pirna · Details im offiziellen Kalender|Pirna · see the official calendar
Gespeicherter Beispieltermin, noch nicht automatisch abgeglichen|Sample event. Check the official calendar for details.
Standort vor Ort mit GPS erfasst|Location mapped on site using GPS
Standort aus bisherigem Datenbestand|Location from existing records
Zugänglichkeit und Regeln vor Ort prüfen|Check access and local rules on site
Gebühren unbekannt|Fees unknown
Kein fester Eintritt|No fixed admission fee
Stadtrundgang ab hier|Start walking route here
Weg anzeigen|Show directions
`.trim().split('\n').map(line => line.split('|')));
  const patterns = [
    [/^(\d+) GPS-erfasste Parkplätze in Pirna$/, '$1 GPS-mapped parking locations in Pirna'],
    [/^(\d+) passende Parkplätze auf der Karte$/, '$1 matching parking locations on the map'],
    [/^(\d+) Parkplätze auf der Karte · Ziel: /, '$1 parking locations on the map · Destination: '],
    [/^Deine Erlebnisroute · (\d+) ausgewählte Stopps$/, 'Your route · $1 selected stops'],
    [/^Deine Erlebnisroute · (\d+) Stopp(s?)$/, 'Your route · $1 stop$2'],
    [/^(\d+) Stopps · Verbindung schematisch$/, '$1 stops · schematic route'],
    [/^(\d+) Ziel(?:e)? ausgewählt$/, (_, count) => count + (count === '1' ? ' stop selected' : ' stops selected')],
    [/^(\d+) Stunden parken$/, '$1 hours of parking'],
    [/^(\d+) m Luftlinie von deinem Standort$/, '$1 m straight-line distance from your location'],
    [/^Dein Ziel: /, 'Your destination: '],
    [/^Letzter Datenabgleich: /, 'Last updated: '],
    [/ entfernen$/, ' — remove'],
    [/ · Budget\/Person \(Demo\)$/, ' · sample budget per person'],
    [/ Demo-Budget \/ Person$/, ' sample budget per person'],
    [/ · Eintritt$/, ' · admission'],
    [/ Eintritt$/, ' admission']
  ];
  function english(value) {
    const trimmed = value.trim();
    if (!trimmed) return value;
    const prefix = trimmed.match(/^[^\p{L}\p{N}=]*/u)[0];
    const message = trimmed.slice(prefix.length);
    let translated = messages.get(trimmed) || messages.get(message);
    if (translated && !messages.has(trimmed)) translated = prefix + translated;
    if (!translated) {
      const rule = patterns.find(([pattern]) => pattern.test(message));
      if (rule) translated = prefix + message.replace(...rule);
    }
    if (!translated && message.includes(' · Gebühren ')) {
      const [category, fee] = message.split(' · Gebühren ');
      translated = prefix + (messages.get(category) || category) +
        (fee === 'nicht hinterlegt' ? ' · fees unknown' : ' · check signs for fees');
    }
    return translated ? value.replace(trimmed, () => translated) : value;
  }

  let language = 'de';
  try { if (localStorage.getItem('citymate.language') === 'en') language = 'en'; } catch {}
  const originals = new WeakMap();
  const attributes = ['aria-label', 'title', 'placeholder', 'alt'];
  const skip = 'script,style,svg,#credits,[data-no-translate]';
  function update(node, key, value, write) {
    let fields = originals.get(node);
    if (!fields) originals.set(node, fields = new Map());
    let previous = fields.get(key);
    if (!previous || value !== previous.rendered) previous = {source:value};
    previous.rendered = language === 'en' ? english(previous.source) : previous.source;
    fields.set(key, previous);
    if (previous.rendered !== value) write(previous.rendered);
  }
  function translate(root) {
    if (root.nodeType === Node.TEXT_NODE) {
      if (root.parentElement && !root.parentElement.closest(skip)) {
        update(root, 'text', root.data, value => { root.data = value; });
      }
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE || root.closest(skip)) return;
    for (const attribute of attributes) {
      if (root.hasAttribute(attribute)) {
        update(root, attribute, root.getAttribute(attribute), value => root.setAttribute(attribute, value));
      }
    }
    for (const child of root.childNodes) translate(child);
  }
  const app = document.querySelector('.app');
  function applyLanguage() {
    document.documentElement.lang = language;
    languageTrigger.querySelector('.language-flag').dataset.flag = language;
    document.getElementById('current-language').textContent = language.toUpperCase();
    for (const option of languageOptions) {
      option.setAttribute('aria-pressed', String(option.dataset.language === language));
    }
    translate(app);
  }
  for (const option of languageOptions) {
    option.addEventListener('click', () => {
      language = option.dataset.language;
      try { localStorage.setItem('citymate.language', language); } catch {}
      applyLanguage();
      languagePicker.open = false;
      languageTrigger.focus();
    });
  }
  document.addEventListener('click', event => {
    if (!languagePicker.contains(event.target)) languagePicker.open = false;
  });
  languagePicker.addEventListener('keydown', event => {
    if (event.key === 'Escape' && languagePicker.open) {
      languagePicker.open = false;
      languageTrigger.focus();
    }
  });
  applyLanguage();
  new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'childList') record.addedNodes.forEach(translate);
      else translate(record.target);
    }
  }).observe(app, {subtree:true, childList:true, characterData:true, attributes:true, attributeFilter:attributes});
})();
