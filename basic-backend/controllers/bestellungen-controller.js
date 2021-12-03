const express = require('express');
const router = express.Router();

const BestellungenService = require('../services/bestellungen-service.js');

router.get('/', (req, res) => {
    BestellungenService.fetchAlleBestellungen().then((BestellungenUebersicht) => {
        res.status(200);
        res.json(BestellungenUebersicht);
    }).catch((err) => {
        res.status(500);
        res.send();
    })
});

module.exports = router;