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
            ArtikelPreis DECIMAL(6,2))`);

    db.run(`CREATE TABLE IF NOT EXISTS Kunden (KundenNr INTEGER PRIMARY KEY NOT NULL, 
            KundenAnrede VARCHAR(10), 
            KundenVorname VARCHAR(20), 
            KundenNachname VARCHAR(15),
            RechnungsAdresse VARCHAR(50), 
            LieferAdresse VARCHAR(50))`);

    db.run(`CREATE TABLE IF NOT EXISTS RechnungsAdressen (ReAdressNr INTEGER PRIMARY KEY NOT NULL, 
            KundenNr INTEGER, 
            Rechnungsadresse VARCHAR(50), 
            FOREIGN KEY (KundenNr) REFERENCES Kunden(KundenNr))`);

    db.run(`CREATE TABLE IF NOT EXISTS LieferAdressen (LiAdressNr INTEGER PRIMARY KEY NOT NULL, 
            KundenNr INTEGER, 
            Rechnungsadresse VARCHAR(50), 
            FOREIGN KEY (KundenNr) REFERENCES Kunden(KundenNr))`);

    db.run(`CREATE TABLE IF NOT EXISTS Bestellungen (BestellNr INTEGER PRIMARY KEY NOT NULL, 
            BestellStatus VARCHAR(10), 
            BestellDatum DATE, 
            LieferDatumGeplant DATE, 
            VersandDatum DATE, 
            BestellPosNr INTEGER, 
            KundenNr INTEGER,
            ReAdressNr INTEGER, 
            LiAdressNr VARCHAR(50), 
            FOREIGN KEY (BestellPosNr) REFERENCES Bestellpositionen(BestellPosNr), 
            FOREIGN KEY (KundenNr) REFERENCES Kunden(KundenNr), 
            FOREIGN KEY (ReAdressNr) REFERENCES RechnungsAdressen(ReAdressNr), 
            FOREIGN KEY (LiAdressNr) REFERENCES LieferAdressen(LiAdressNr))`);

    db.run(`CREATE TABLE IF NOT EXISTS Bestellpositionen (BestellPosNr INTEGER PRIMARY KEY NOT NULL, 
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
            (3, 'Herr', 'Harry', 'Potter', 'Ligusterweg 4 01980 Little Whining', 'Ligusterweg 4 01980 Little Whining')
            (4, 'Frau', 'Hermoine', 'Granger', 'KeineAhnungWoDieWohnt 9 01979 London', 'KeineAhnungWoDieWohnt 9 01979 London')`);

    db.run(`INSERT INTO Artikel VALUES 
            ( 1, 'Haare blond', '50 cm lang mittelblond Naturwelle 100g', '49.90'),
            ( 2, 'Haare braun', '50 cm lang haselnussbraun Naturwelle 100g', '49.90'),
            ( 3, 'Haare schwarz', '50 cm lang schwarz Naturwelle 100g', '49.90'),
            ( 4, 'Haare rot', '50 cm karminrot Naturwelle 100g', '49.90')`);

    db.run(`INSERT INTO Bestellungen VALUES
            (11, 'eingegangen', '01.01.2001', NULL, NULL, 1, 2,),
            (12, ),
            (13, ),
            (14, )`);

}