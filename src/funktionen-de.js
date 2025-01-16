const konsole = {
    protokoll: function(nachricht) {
        console.log(nachricht);
    },
    fehler: function(nachricht) {
        console.error(nachricht);
    },
    warnung: function(nachricht) {
        console.warn(nachricht);
    },
    info: function(nachricht) {
        console.info(nachricht);
    },
    fehlerbehebung: function(nachricht) {
        console.debug(nachricht);
    },
    zählen: function(label) {
        console.count(label);
    },
    zählenZurücksetzen: function(label) {
        console.countReset(label);
    },
    zeit: function(zeit) {
        console.time(zeit);
    },
    zeitEnde: function(zeit) {
        console.timeEnd(zeit);
    },
    gruppe: function(gruppe) {
        console.group(gruppe);
    },
    gruppeEnde: function() {
        console.groupEnd();
    },
    gruppeEingeklappt: function(gruppe) {
        console.groupCollapsed(gruppe);
    },
    tabelle: function(tabellenDaten, eigenschaften) {
        console.table(tabellenDaten, eigenschaften);
    },
    spur: function(...daten) {
        console.trace(...daten);
    },
    verzeichnis: function(element, optionen) {
        console.dir(element, optionen);
    },
    verzeichnisXml: function(...daten) {
        console.dirxml(...daten);
    },
    zeitStempel: function(label) {
        console.timeStamp(label);
    },
    leeren: function() {
        console.clear();
    },
    behaupten: function(bedingung, ...daten) {
        console.assert(bedingung, ...daten);
    },
    zeitProtokoll: function(label, ...daten) {
        console.timeLog(label, ...daten);
    }
};

function wenn(bedingung, dann, sonst) {
    if (bedingung) {
        dann();
    } else if (sonst) {
        sonst();
    }
}

function während(bedingung, aktion) {
    while (bedingung()) {
        aktion();
    }
}

// Funktionen global verfügbar machen, falls im Browser
if (typeof window !== 'undefined') {
    window.konsole = konsole;
    window.wenn = wenn;
    window.während = während;
}

// Funktionen exportieren, falls in Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        konsole,
        wenn,
        während
    };
}
