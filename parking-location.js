/* Device location adapter; no coordinates are persisted or sent to a server. */
(function (root) {
  root.PirnaLocation = {
    read: function (geolocation) {
      return new Promise(function (resolve, reject) {
        if (!geolocation) {
          reject(new Error('Dein Browser unterstützt keine Standortbestimmung. Du kannst dein Ziel über die Suche oder auf der Karte wählen.'));
          return;
        }
        geolocation.getCurrentPosition(function (position) {
          var c = position.coords;
          if (!Number.isFinite(c.latitude) || !Number.isFinite(c.longitude) || Math.abs(c.latitude) > 90 || Math.abs(c.longitude) > 180) {
            reject(new Error('Der Standort konnte nicht zuverlässig ermittelt werden. Bitte erneut versuchen.'));
            return;
          }
          resolve({lat: c.latitude, lon: c.longitude, accuracy: Number.isFinite(c.accuracy) ? Math.max(0, c.accuracy) : 0});
        }, function (error) {
          var messages = {
            1: 'Standortzugriff nicht erlaubt. Bitte erlaube den Standort für diese Seite in deinen Browsereinstellungen oder wähle ein Ziel auf der Karte.',
            2: 'Dein Standort ist gerade nicht verfügbar. Bitte prüfe die Standortdienste deines Geräts und versuche es erneut.',
            3: 'Die Standortbestimmung dauert zu lange. Bitte versuche es erneut, möglichst mit freier Sicht nach draußen.'
          };
          reject(new Error(messages[error.code] || 'Standortbestimmung fehlgeschlagen. Bitte erneut versuchen.'));
        }, {enableHighAccuracy: true, timeout: 20000, maximumAge: 30000});
      });
    }
  };
})(globalThis);
