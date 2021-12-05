import sqlite from 'sqlite3';

export const db = new sqlite.Database('./databases/db.sqlite', (err) => {
    if (err) {
        console.log(err);
    } else {
        init();
    }
});

function init() {
    db.run(`CREATE TABLE IF NOT EXISTS Artikel (ArtikelNr INTEGER PRIMARY KEY NOT NULL, 
            ArtikelName VARCHAR(50), 
            ArtikelBeschreibung VARCHAR (250), 
            ArtikelPreis DECIMAL(6,2));`);

    db.run(`CREATE TABLE IF NOT EXISTS Kunden (KundenNr INTEGER PRIMARY KEY NOT NULL, 
            KundenAnrede VARCHAR(10), 
            KundenVorname VARCHAR(20), 
            KundenNachname VARCHAR(15),
            ReAdressNr INTEGER, 
            LiAdressNR INTEGER,
            FOREIGN KEY (ReAdressNr) REFERENCES RechnungsAdressen(ReAdressNr),
            FOREIGN KEY (LiAdressNr) REFERENCES LieferAdressen(LiAdressNr))`);

    db.run(`CREATE TABLE IF NOT EXISTS RechnungsAdressen (ReAdressNr INTEGER PRIMARY KEY NOT NULL, 
            KundenNr INTEGER, 
            Rechnungsadresse VARCHAR(50), 
            FOREIGN KEY (KundenNr) REFERENCES Kunden(KundenNr))`);

    db.run(`CREATE TABLE IF NOT EXISTS LieferAdressen (LiAdressNr INTEGER PRIMARY KEY NOT NULL, 
            KundenNr INTEGER, 
            Lieferadresse VARCHAR(50), 
            FOREIGN KEY (KundenNr) REFERENCES Kunden(KundenNr))`);

    db.run(`CREATE TABLE IF NOT EXISTS Bestellungen (BestellNr INTEGER PRIMARY KEY NOT NULL, 
            BestellStatus VARCHAR(20), 
            BestellDatum DATE, 
            LieferDatumGeplant DATE, 
            VersandDatum DATE, 
            KundenNr INTEGER,
            ReAdressNr INTEGER, 
            LiAdressNr INTEGER, 
            FOREIGN KEY (KundenNr) REFERENCES Kunden(KundenNr), 
            FOREIGN KEY (ReAdressNr) REFERENCES RechnungsAdressen(ReAdressNr), 
            FOREIGN KEY (LiAdressNr) REFERENCES LieferAdressen(LiAdressNr))`);

    db.run(`CREATE TABLE IF NOT EXISTS Bestellpositionen (BestellPosID INTEGER PRIMARY KEY NOT NULL,
            BestellPosNr INTEGER NOT NULL, 
            BestellNr INTEGER, 
            ArtikelNr INTEGER, 
            ArtikelName VARCHAR(50), 
            ArtikelPreis DECIMAL(6,2), 
            BestellStückzahl INTEGER, 
            FOREIGN KEY (BestellNr) REFERENCES Bestellungen(BestellNr), 
            FOREIGN KEY (ArtikelNr) REFERENCES Artikel(ArtikelNr))`);

    db.run(`CREATE TABLE IF NOT EXISTS Rechnungen (RechnungsNr INTEGER PRIMARY KEY NOT NULL, 
            RechnungsDatum Date, 
            BestellNr INTEGER, 
            KundenNr INTEGER, 
            ReAdressNr INTEGER, 
            BestellPosNr INTEGER, 
            FOREIGN KEY (BestellNr) 
            REFERENCES Bestellungen(BestellNr), 
            FOREIGN KEY (KundenNr) REFERENCES Kunden(KundenNr), 
            FOREIGN KEY (ReAdressNr) REFERENCES RechnungsAdressen(ReAdressNr), 
            FOREIGN KEY (BestellPosNr) REFERENCES Bestellpositionen(BestellPosNr))`);

    db.run(`INSERT INTO Kunden VALUES 
            (1, 'Frau', 'Lavinia', 'Berger', 'Alexanderstraße 146 70180 Stuttgart', 'Alexanderstraße 146 70180 Stuttgart'),
            (2, 'Herr', 'Max', 'Mustermann', 'Musterstraße 1 12345 Musterort', 'Musterstraße 1 12345 Musterort'),
            (3, 'Herr', 'Harry', 'Potter', 'Ligusterweg 4 01980 Little Whining', 'Ligusterweg 4 01980 Little Whining'),
            (4, 'Frau', 'Hermoine', 'Granger', 'KeineAhnungWoDieWohnt 9 01979 London', 'KeineAhnungWoDieWohnt 9 01979 London')`);

    db.run(`INSERT INTO RechnungsAdressen VALUES
            (1, 1, 'Alexanderstraße 146 70180 Stuttgart'),
            (2, 2, 'Musterstraße 1 12345 Musterort'),
            (3, 3, 'Ligusterweg 4 01980 Little Whining'),
            (4, 4, 'KeineAhnungWoDieWohnt 9 01979 London')`);

    db.run(`INSERT INTO LieferAdressen VALUES
            (1, 1, 'Alexanderstraße 146 70180 Stuttgart'),
            (2, 2, 'Musterstraße 1 12345 Musterort'),
            (3, 3, 'Ligusterweg 4 01980 Little Whining'),
            (4, 4, 'KeineAhnungWoDieWohnt 9 01979 London')`);

    db.run(`INSERT INTO Artikel VALUES 
            ( 1, 'Haare blond', '50 cm lang mittelblond Naturwelle 100g', '49.90'),
            ( 2, 'Haare braun', '50 cm lang haselnussbraun Naturwelle 100g', '49.90'),
            ( 3, 'Haare schwarz', '50 cm lang schwarz Naturwelle 100g', '49.90'),
            ( 4, 'Haare rot', '50 cm karminrot Naturwelle 100g', '49.90')`);

    db.run(`INSERT INTO Bestellpositionen VALUES
            (1, 11, 1, 'Haare blond', '49.90', 2),
            (2, 11, 3, 'Haare schwarz', '49.90', 1),
            (3, 12, 4, 'Haare rot', '49.90', 10),
            (4, 13, 2, 'Haare braun', '49.90', 4),
            (5, 13, 3, 'Haare schwarz', '49.90', 5),
            (6, 13, 4, 'Haare rot', '49.90', 1),
            (7, 13, 1, 'Haare blond', '49.90', 3),
            (8, 14, 1, 'Haare blond', '49.90', 1),
            (9, 14, 3, 'Haare schwarz', '49.90', 2),
            (10, 14, 4, 'Haare rot', '49.90', 1)`);

    db.run(`INSERT INTO Bestellungen VALUES
            (11, 'eingegangen', '01.01.2001', NULL, NULL, 1, 1, 1),
            (12, 'in Bearbeitung', '05.05.2009', '06.05.2009', NULL, 1, 1, 1),
            (13, 'eingegangen', '27.04.2012', NULL, NULL, 4, 4, 4),
            (14, 'abgeschlossen', '13.02.2010', '16.02.2010', '14.02.2010', 3, 3, 3)`);
}
