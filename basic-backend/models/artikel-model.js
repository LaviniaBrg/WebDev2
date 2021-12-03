import { db } from './db.js';

async function getAlleArtikel() {
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

export default [getAlleArtikel];