import { echo } from './db.js';

export function createEchoLog(message, callback) {
    const doc = {
        message: message
    };
    echo.insert(doc, (err, newDoc) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, newDoc);
        }
    });
}
export function queryEchos(containsString, callback) {
    echo.find(containsString ? { message: new RegExp(containsString) } : {}, (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
}