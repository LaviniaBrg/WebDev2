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