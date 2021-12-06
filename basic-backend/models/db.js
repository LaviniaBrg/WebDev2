import sqlite3 from 'sqlite3';

const sqlite = sqlite3.verbose();

export const db = new sqlite.Database('./databases/db.sqlite', (err) => {
    if (err) {
        console.log(err);
    } else {
        init();
    }
});

function run (sqlString, params) {
    return new Promise((resolve, reject) => {
        db.run(sqlString, params, function (err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.changes);
            }
        });
    });
}

function get(sqlstring, parameters){
    return new Promise((resolve, reject) => {
        db.get(sqlstring, parameters, (err, row) => {
            if (err) {
                rejec(err)
            } else {
                resolve(row)
            }
        });
    });
}

async function init() {
    await run (`PRAGMA foreign_keys = ON;`, []);

    await run (`CREATE TABLE IF NOT EXISTS Artikel
                (
                    ArtikelNr           INTEGER PRIMARY KEY NOT NULL,
                    ArtikelName         VARCHAR(50),
                    ArtikelBeschreibung VARCHAR(250),
                    ArtikelPreis        DECIMAL(6, 2)
                );`, []);

    await run (`CREATE TABLE IF NOT EXISTS Kunden
                (
                    KundenNr       INTEGER PRIMARY KEY NOT NULL,
                    KundenAnrede   VARCHAR(10),
                    KundenVorname  VARCHAR(20),
                    KundenNachname VARCHAR(15),
                    ReAdressNr     INTEGER,
                    LiAdressNR     INTEGER
                );`, [])

    await run (`CREATE TABLE IF NOT EXISTS RechnungsAdressen
                (
                    ReAdressNr       INTEGER PRIMARY KEY NOT NULL,
                    KundenNr         INTEGER,
                    Rechnungsadresse VARCHAR(50),
                    FOREIGN KEY (KundenNr) REFERENCES Kunden (KundenNr)
                );`, []);

    await run (`CREATE TABLE IF NOT EXISTS LieferAdressen
                (
                    LiAdressNr    INTEGER PRIMARY KEY NOT NULL,
                    KundenNr      INTEGER,
                    Lieferadresse VARCHAR(50),
                    FOREIGN KEY (KundenNr) REFERENCES Kunden (KundenNr)
                );`, []);

    await run (`CREATE TABLE IF NOT EXISTS Bestellungen
                (
                    BestellNr          INTEGER PRIMARY KEY NOT NULL,
                    BestellStatus      VARCHAR(20),
                    BestellDatum       DATE,
                    LieferDatumGeplant DATE,
                    VersandDatum       DATE,
                    KundenNr           INTEGER,
                    ReAdressNr         INTEGER,
                    LiAdressNr         INTEGER,
                    FOREIGN KEY (KundenNr) REFERENCES Kunden (KundenNr),
                    FOREIGN KEY (ReAdressNr) REFERENCES RechnungsAdressen (ReAdressNr),
                    FOREIGN KEY (LiAdressNr) REFERENCES LieferAdressen (LiAdressNr)
                );`, []);

    await run (`CREATE TABLE IF NOT EXISTS Bestellpositionen
                (
                    BestellPosID     INTEGER PRIMARY KEY NOT NULL,
                    BestellPosNr     INTEGER             NOT NULL,
                    BestellNr        INTEGER,
                    ArtikelNr        INTEGER,
                    ArtikelName      VARCHAR(50),
                    ArtikelPreis     DECIMAL(6, 2),
                    BestellStückzahl INTEGER,
                    FOREIGN KEY (BestellNr) REFERENCES Bestellungen (BestellNr),
                    FOREIGN KEY (ArtikelNr) REFERENCES Artikel (ArtikelNr)
                );`, []);

    await run (`CREATE TABLE IF NOT EXISTS Rechnungen
                (
                    RechnungsNr    INTEGER PRIMARY KEY NOT NULL,
                    RechnungsDatum Date,
                    BestellNr      INTEGER,
                    KundenNr       INTEGER,
                    ReAdressNr     INTEGER,
                    FOREIGN KEY (BestellNr)
                    REFERENCES Bestellungen (BestellNr),
                    FOREIGN KEY (KundenNr) REFERENCES Kunden (KundenNr),
                    FOREIGN KEY (ReAdressNr) REFERENCES RechnungsAdressen (ReAdressNr)
                );`, []);

    await run (`CREATE TABLE IF NOT EXISTS DummyZurPruefung 
                (
                    ID INTEGER PRIMARY KEY NOT NULL
                );`, []);

    const row = await get(`SELECT * FROM DummyZurPruefung WHERE id = ?;`, [1])
    if(row) {
        console.log("Datenbank wird wiederverwendet")
    } else {
        await run(`INSERT INTO DummyZurPruefung (id) VALUES (?);`, [1]) //Item zum merken ob Elemente schon vorhanden sind

        await run(`INSERT INTO Artikel
                   VALUES (1, 'Haare blond', '50 cm lang mittelblond Naturwelle 100g', '49.90'),
                          (2, 'Haare braun', '50 cm lang haselnussbraun Naturwelle 100g', '49.90'),
                          (3, 'Haare schwarz', '50 cm lang schwarz Naturwelle 100g', '49.90'),
                          (4, 'Haare rot', '50 cm karminrot Naturwelle 100g', '49.90');`, []);

        await run(`INSERT INTO Kunden
                   VALUES (1, 'Frau', 'Lavinia', 'Berger', 1, 1),
                          (2, 'Herr', 'Max', 'Mustermann', 2, 2),
                          (3, 'Herr', 'Harry', 'Potter', 3, 3),
                          (4, 'Frau', 'Hermoine', 'Granger', 4, 4);`, []);

        await run(`INSERT INTO RechnungsAdressen
                   VALUES (1, 1, 'Alexanderstraße 146 70180 Stuttgart'),
                          (2, 2, 'Musterstraße 1 12345 Musterort'),
                          (3, 3, 'Ligusterweg 4 01980 Little Whining'),
                          (4, 4, 'KeineAhnungWoDieWohnt 9 01979 London');`, []);

        await run(`INSERT INTO LieferAdressen
                   VALUES (1, 1, 'Alexanderstraße 146 70180 Stuttgart'),
                          (2, 2, 'Musterstraße 1 12345 Musterort'),
                          (3, 3, 'Ligusterweg 4 01980 Little Whining'),
                          (4, 4, 'KeineAhnungWoDieWohnt 9 01979 London');`, []);

        await run(`INSERT INTO Bestellungen
                   VALUES (11, 'eingegangen', '01.01.2001', NULL, NULL, 1, 1, 1),
                          (12, 'in Bearbeitung', '05.05.2009', '06.05.2009', NULL, 1, 1, 1),
                          (13, 'eingegangen', '27.04.2012', NULL, NULL, 4, 4, 4),
                          (14, 'abgeschlossen', '13.02.2010', '16.02.2010', '14.02.2010', 3, 3, 3);`, []);

        await run(`INSERT INTO Bestellpositionen
                   VALUES (1, 1, 11, 1, 'Haare blond', '49.90', 2),
                          (2, 2, 11, 3, 'Haare schwarz', '49.90', 1),
                          (3, 1, 12, 4, 'Haare rot', '49.90', 10),
                          (4, 1, 13, 2, 'Haare braun', '49.90', 4),
                          (5, 2, 13, 3, 'Haare schwarz', '49.90', 5),
                          (6, 3, 13, 4, 'Haare rot', '49.90', 1),
                          (7, 4, 13, 1, 'Haare blond', '49.90', 3),
                          (8, 1, 14, 1, 'Haare blond', '49.90', 1),
                          (9, 2, 14, 3, 'Haare schwarz', '49.90', 2),
                          (10, 3, 14, 4, 'Haare rot', '49.90', 1);`, []);
    }
}

