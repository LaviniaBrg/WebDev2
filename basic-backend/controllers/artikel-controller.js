const express = require('express');
const router = express.Router();

const ArtikelService = require('../services/artikel-service.js');

router.get('/', (req, res) => {
    ArtikelService.fetchAlleArtikel().then((ArtikelUebersicht) => {
        res.status(200);
        res.json(ArtikelUebersicht);
    }).catch((err) => {
        res.status(500);
        res.send();
    })
});

module.exports = router;