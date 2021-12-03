const db = require('./db.js').db;

async function getAlleKunden() {
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

module.exports = [getAlleKunden];