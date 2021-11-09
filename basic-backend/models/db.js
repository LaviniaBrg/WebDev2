//const Datastore = require('nedb');
//exports.echo = new Datastore({ filename: './databases/echo.db', autoload: true });

const sqlite = require('sqlite3');
sqlite.verbose();
const db = new sqlite.Database('./database/db.sqlite', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Connected to SQLITE');
        createTables();
        db.all('select sqlite_version();', (err, rows) => {
            console.log(err);
            console.log(rows);
        })
    }
});

function createTables() {
    db.run(`CREATE TABLE IF NOT EXISTS lists(
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL);`);
    db.run(`CREATE TABLE IF NOT EXISTS items(
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        listId INTEGER NOT NULL REFERENCES lists ON DELETE CASCADE,
        name TEXT NOT NULL);`);
}

module.exports = db;