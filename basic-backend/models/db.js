//const Datastore = require('nedb');
//exports.echo = new Datastore({ filename: './databases/echo.db', autoload: true });

const { PromisedDatabase } = require("promised-sqlite3"); // import the class

const db = new PromisedDatabase(); // create a instance of PromisedDatabase
// note: at this stade, the wrapped sqlite3.Database object is not created.

async function init() {
    try {
        await db.open("./databases/db.sqlite"); // create a sqlite3.Database object & open the database on the passed filepath.

        // run some sql request.
        await db.run("CREATE TABLE Artikel (ArtikelNr INTEGER PRIMARY KEY NOT NULL, ArtikelName VARCHAR(50), ArtikelBeschreibung VARCHAR (250), ArtikelPreis DECIMAL(6,2)");
        await db.run("CREATE TABLE Kunden (KundenNr INTEGER PRIMARY KEY NOT NULL, KundenAnrede VARCHAR(10), KundenVorname VARCHAR(20), KundenNachname VARCHAR(15),RechnungsAdresse VARCHAR(50), LieferAdresse VARCHAR(50)");
        await db.run("CREATE TABLE RechnungsAdressen (ReAdressNr INTEGER PRIMARY KEY NOT NULL, KundenNr INTEGER,Rechnungsadresse VARCHAR(50), FOREIGN KEY (KundenNr) REFERENCES Kunden(KundenNr) INTEGER");
        await db.run("CREATE TABLE LieferAdressen (LiAdressNr INTEGER PRIMARY KEY NOT NULL, KundenNr INTEGER,Rechnungsadresse VARCHAR(50), FOREIGN KEY (KundenNr) REFERENCES Kunden(KundenNr)");
        await db.run("CREATE TABLE Bestellungen (BestellNr INTEGER PRIMARY KEY NOT NULL, BestellStatus VARCHAR(10), BestellDatum DATE, LieferDatumGeplant DATE, VersandDatum DATE, BestellPosNr INTEGER, KundenNr INTEGER,ReAdressNr INTEGER, LiAdressNr VARCHAR(50), FOREIGN KEY (BestellPosNr) REFERENCES Bestellpositionen(BestellPosNr), FOREIGN KEY (KundenNr) REFERNECES Kunden(KundenNr), FOREIGN KEY (ReAdressNr) REFERNECES RechnungsAdressen(ReAdressNr), FOREIGN KEY (LiAdressNr) REFERNECES LieferAdressen(LiAdressNr)");
        await db.run("CREATE TABLE Bestellpositionen (BestellPosNr INTEGER PRIMARY KEY NOT NULL, BestellNr INTEGER, ArtikelNr INTEGER, ArtikelName VARCHAR(50), ArtikelPreis DECIMAL(6,2), BestellStückzahl INTEGER, FOREIGN KEY (BestellNr) REFERENCES Bestellungen(BestellNr), FOREIGN KEY (ArtikelNr) REFERENCES Artikel(ArtikelNr)");
        await db.run("CREATE TABLE Rechungen (RechnungsNr INTEGER PRIMARY KEY NOT NULL, RechnungsDatum Date, BestellNr INTEGER, KundenNr INTEGER, ReAdressNr INTEGER, BestellPosNr INTEGER, FOREIGN KEY (BestellNr) REFERENCES Bestellungen(BestellNr), FOREIGN KEY (KundenNr) REFERNECES Kunden(KundenNr), FOREIGN KEY (ReAdressNr) REFERNECES RechnungsAdressen(ReAdressNr), FOREIGN KEY (BestellPosNr) REFERENCES Bestellpositionen(BestellPosNr)");
        await db.run("CREATE TABLE Bestellpositionen (BestellPosNr INTEGER PRIMARY KEY NOT NULL, BestellNr INTEGER, ArtikelNr INTEGER, ArtikelName VARCHAR(50), ArtikelPreis DECIMAL(6,2), BestellStückzahl INTEGER, FOREIGN KEY (BestellNr) REFERENCES Bestellungen(BestellNr), FOREIGN KEY (ArtikelNr) REFERENCES Artikel(ArtikelNr)");
        //await db.run("");
        //await db.run("");
        //await db.run("");
        //await db.run("");



        await db.run("INSERT INTO foo (a, b) VALUES (?, ?)", "alpha", "beta");
        await db.run("INSERT INTO foo (a, b) VALUES ($goo, $hoo)", { $goo: "GOO !", $hoo: "HOO :" });
        await db.run("INSERT INTO foo (a, b) VALUES (?, ?)", ["Value of a", "Value of b"]);

        // read database
        const row = await db.get("SELECT * FROM foo WHERE id = ?", 2);
        console.log(row2);

        const rows = await db.all("SELECT * FROM foo");
        console.log(rows);

        await db.each("SELECT * FROM foo WHERE id > ?", 5,
            function(row) {
                console.log(row);
            }
        );

        // get the wrapped sqlite3.Database object
        const sqliteDB = db.db;

        // close the database
        await db.close();

    } catch(err) {
        console.error(err);
    }
}

init();

/*const sqlite = require('sqlite3');
sqlite.verbose();
const db = new sqlite.Database('./database/db.sqlite', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Connected to SQLITE');
        createTables();
        db.all('select sqlite_version();', (err, rows) => {
            console.log(err);
            console.log(rows);
        })
    }
});

function createTables() {
    db.run(`CREATE TABLE IF NOT EXISTS lists(
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL);`);
    db.run(`CREATE TABLE IF NOT EXISTS items(
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        listId INTEGER NOT NULL REFERENCES lists ON DELETE CASCADE,
        name TEXT NOT NULL);`);
}

module.exports = db;

*/