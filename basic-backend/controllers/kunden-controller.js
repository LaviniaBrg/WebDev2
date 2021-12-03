import { Router } from 'express';
const router = Router();

import { fetchAlleKunden } from '../services/kunden-service.js';

router.get('/', (req, res) => {
    fetchAlleKunden().then((KundenUebersicht) => {
        res.status(200);
        res.json(KundenUebersicht);
    }).catch((err) => {
        res.status(500);
        res.send();
    })
});

export default router;