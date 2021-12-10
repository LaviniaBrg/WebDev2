import { db } from './db.js';

export async function getAlleKunden() {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM Kunden;", (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        })
    });
}

export async function deleteKunde(KundenNr){
    return new Promise((resolve, reject)=>{
        console.log(KundenNr);
        const sql = "DELETE FROM Kunden WHERE KundenNr = ?;"
        db.run(sql, [KundenNr], function(err) {
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

export async function updateKunde(KundenNr, KundenAnrede, KundenVorname, KundenNachname, ReAdressNr, LiAdressNr){
    return new Promise((resolve, reject)=>{
        db.run("UPDATE Kunden SET KundenAnrede =?, KundenVorname=?, KundenNachname=?, ReAdressNr=?, LiAdressNr=? WHERE KundenNr=?;",
            [KundenAnrede, KundenVorname, KundenNachname, ReAdressNr, LiAdressNr, KundenNr], (err, results) =>{
            if (err){
                reject(err);
            } else {
                resolve(results);
            }
        })
    });
}

export async function addKunde(KundenAnrede, KundenVorname, KundenNachname, ReAdressNr, LiAdressNr){
    return new Promise((resolve, reject)=>{
        db.run("INSERT INTO Kunden (KundenAnrede, KundenVorname, KundenNachname, ReAdressNr, LiAdressNr) VALUES ( ?, ?, ?, ?, ?);",
            [KundenAnrede, KundenVorname, KundenNachname, ReAdressNr, LiAdressNr], (err, results) =>{
                if (err){
                    reject(err);
                } else {
                    resolve(results);
                }
            })
    });
}