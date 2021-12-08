import { db } from './db.js';

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
