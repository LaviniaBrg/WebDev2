const db = require('./db.js').db;

async function getAlleBestellungen() {
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

module.exports = [getAlleBestellungen];