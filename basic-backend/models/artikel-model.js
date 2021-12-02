const db = require('./db.js').db;

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

module.exports = [getAlleArtikel];