import { Router } from 'express';
const router = Router();

import { saveEcho, listEchos } from '../services/echo.js';

router.post('/', validateEcho, (req, res) => {
    const message = req.body.message;

    saveEcho(message, (err, data) => {
        if (err) {
            res.status(500);
            res.send(err.message);
        } else {
            res.send(data);
        }
    });
});
router.get('/', (req, res) => {
    const containsString = req.query.contains;
    listEchos(containsString, (err, data) => {
        if (err) {
            res.status(500);
            res.send(err.message);
        } else {
            res.send(data);
        }
    });
});

function validateEcho(req, res, next) {
    if (req.body.message) {
        next();
    } else {
        res.status(400);
        res.send('Body validation failed');
    }
}

export default router;