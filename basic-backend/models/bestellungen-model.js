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