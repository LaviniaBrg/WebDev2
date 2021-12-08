import { db } from './db.js';

export async function getAlleArtikel() {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM Artikel;`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        })
    });
}

export async function deleteArtikel(ArtikelNr){
    return new Promise((resolve, reject)=>{
        console.log(ArtikelNr);
        const sql = "DELETE FROM Artikel WHERE ArtikelNr = ?;"
        db.run(sql, [ArtikelNr], function(err) {
            if (err){
                console.log(err);
                reject(err);
            } else if (this.changes === 0) {
                reject();
            } else {
                resolve();
            }
        })
    });
}

export async function updateArtikel(ArtikelNr, ArtikelName, ArtikelBeschreibung, ArtikelPreis){
    return new Promise((resolve, reject)=>{
        db.run("UPDATE Artikel SET Artikelname =?, ArtikelBeschreibung =?, ArtikelPreis=? WHERE ArtikelNr=?;",
            [ArtikelNr, ArtikelName, ArtikelBeschreibung, ArtikelPreis, ArtikelNr], (err, results) =>{
                if (err){
                    reject(err);
                } else {
                    resolve(results);
                }
            })
    });
}

export async function addArtikel(ArtikelNr, ArtikelName, ArtikelBeschreibung, ArtikelPreis){
    return new Promise((resolve, reject)=>{
        db.run("INSERT INTO Artikel VALUES (ArtikelNr=?, Artikelname =?, ArtikelBeschreibung =?, ArtikelPreis=?);",
            [ArtikelNr, ArtikelName, ArtikelBeschreibung, ArtikelPreis], (err, results) =>{
                if (err){
                    reject(err);
                } else {
                    resolve(results);
                }
            })
    });
}