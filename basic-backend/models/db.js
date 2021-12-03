//import { PromisedDatabase } from "promised-sqlite3"; // import the class
// noinspection SqlNoDataSourceInspection

import sqlite from 'sqlite3';
//const Database = require('sqlite3');

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
}