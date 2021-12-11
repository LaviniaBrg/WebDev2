import { db } from './db.js';

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

export async function deleteBestellung(BestellNr){
    return new Promise((resolve, reject)=>{
        console.log(BestellNr);
        const sql = "DELETE FROM Bestellungen WHERE BestellNr = ?;"
        db.run(sql, [BestellNr], function(err) {
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

export async function updateBestellung(BestellNr, BestellStatus, BestellDatum, LieferDatumGeplant, VersandDatum, KundenNr, ReAdressNr, LiAdressNr){
    return new Promise((resolve, reject)=>{
        db.run("UPDATE Bestellungen SET BestellStatus =?, BestellDatum=?, LieferDatumGeplant =?, VersandDatum=?, KundenNr=?, ReAdressNr=?, LiAdressNr=? WHERE BestellNr=?;",
            [BestellStatus, BestellDatum, LieferDatumGeplant, VersandDatum, KundenNr, ReAdressNr, LiAdressNr, BestellNr], (err, results) =>{
                if (err){
                    reject(err);
                } else {
                    resolve(results);
                }
            })
    });
}

export async function addBestellung(BestellStatus, BestellDatum, LieferDatumGeplant, VersandDatum, KundenNr, ReAdressNr, LiAdressNr){
    return new Promise((resolve, reject)=>{
        db.run("INSERT INTO Bestellungen (BestellStatus, BestellDatum, LieferDatumGeplant, VersandDatum, KundenNr, ReAdressNr, LiAdressNr) VALUES (?, ?, ?, ?, ?, ?, ?);",
            [BestellStatus, BestellDatum, LieferDatumGeplant, VersandDatum, KundenNr, ReAdressNr, LiAdressNr], (err, results) =>{
                if (err){
                    reject(err);
                } else {
                    resolve(results);
                }
            })
    });
}
