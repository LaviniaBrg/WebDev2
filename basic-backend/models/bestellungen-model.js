import {db} from './db.js';

export async function getAlleBestellungen() {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM Bestellungen;", (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        })
    });
}

export async function getEineBestellung(BestellNr) {
    return new Promise((resolve, reject) => {
        console.log(BestellNr);
        const sql = "SELECT * FROM Bestellungen WHERE BestellNr = ?;"
        db.get(sql, [BestellNr], function (err, results) {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        })
    });
}

export async function deleteBestellung(BestellNr) {
    return new Promise((resolve, reject) => {
        console.log(BestellNr);
        const sql = "DELETE FROM Bestellungen WHERE BestellNr = ?;"
        db.run(sql, [BestellNr], function (err) {
            if (err) {
                if (err.errno === 19) {
                    reject(409);
                } else {
                    console.log(err);
                    reject(err);
                }
            } else if (this.changes === 0) {
                reject(404);
            } else {
                resolve();
            }
        })
    });
}

export async function updateBestellung(BestellNr, BestellStatus, BestellDatum, LieferDatumGeplant, VersandDatum, KundenNr, ReAdressNr, LiAdressNr) {
    return new Promise((resolve, reject) => {
        db.run("UPDATE Bestellungen SET BestellStatus =?, BestellDatum=?, LieferDatumGeplant =?, VersandDatum=?, KundenNr=?, ReAdressNr=?, LiAdressNr=? WHERE BestellNr=?;",
            [BestellStatus, BestellDatum, LieferDatumGeplant, VersandDatum, KundenNr, ReAdressNr, LiAdressNr, BestellNr], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            })
    });
}

export async function addBestellung(BestellStatus, BestellDatum, LieferDatumGeplant, VersandDatum, KundenNr, ReAdressNr, LiAdressNr) {
    return new Promise((resolve, reject) => {
        db.run("INSERT INTO Bestellungen (BestellStatus, BestellDatum, LieferDatumGeplant, VersandDatum, KundenNr, ReAdressNr, LiAdressNr) VALUES (?, ?, ?, ?, ?, ?, ?);",
            [BestellStatus, BestellDatum, (LieferDatumGeplant? LieferDatumGeplant:''), (VersandDatum? VersandDatum:''), KundenNr, ReAdressNr, LiAdressNr], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            })
    });
}
