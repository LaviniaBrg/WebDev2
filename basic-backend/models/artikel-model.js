import {db} from './db.js';

export async function getAlleArtikel() {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM Artikel;", (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        })
    });
}

export async function getEinenArtikel(ArtikelNr) {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Artikel WHERE ArtikelNr = ?;"
        db.get(sql, [ArtikelNr], function (err, results) {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        })
    });
}

export async function deleteArtikel(ArtikelNr) {
    return new Promise((resolve, reject) => {
        console.log(ArtikelNr);
        const sql = "DELETE FROM Artikel WHERE ArtikelNr = ?;"
        db.run(sql, [ArtikelNr], function (err) {
            if (err) {
                if (err.errno === 19) {
                    reject(409);
                }
                else {
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

export async function updateArtikel(ArtikelNr, ArtikelName, ArtikelBeschreibung, ArtikelPreis) {
    return new Promise((resolve, reject) => {
        db.run("UPDATE Artikel SET Artikelname =?, ArtikelBeschreibung =?, ArtikelPreis=? WHERE ArtikelNr=?;",
            [ArtikelName, ArtikelBeschreibung, ArtikelPreis, ArtikelNr], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            })
    });
}

export async function addArtikel(ArtikelName, ArtikelBeschreibung, ArtikelPreis) {
    return new Promise((resolve, reject) => {
        db.run("INSERT INTO Artikel (ArtikelName, ArtikelBeschreibung, ArtikelPreis) VALUES ( ?, ?, ?);",
            [ArtikelName, ArtikelBeschreibung, ArtikelPreis], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            })
    });
}
