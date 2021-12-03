const express = require('express');
const router = express.Router();

const KundenService = require('../services/kunden-service.js');

router.get('/', (req, res) => {
    KundenService.fetchAlleKunden().then((KundenUebersicht) => {
        res.status(200);
        res.json(KundenUebersicht);
    }).catch((err) => {
        res.status(500);
        res.send();
    })
});

module.exports = router;