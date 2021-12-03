import { Router } from 'express';
const router = Router();

import ArtikelService from '../services/artikel-service.js';

router.get('/', (req, res) => {
    ArtikelService.fetchAlleArtikel().then((ArtikelUebersicht) => {
        res.status(200);
        res.json(ArtikelUebersicht);
    }).catch((err) => {
        res.status(500);
        res.send();
    })
});

export default router;