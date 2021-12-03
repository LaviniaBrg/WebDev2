import { Router } from 'express';
const router = Router();

import { fetchAlleBestellungen } from '../services/bestellungen-service.js';

router.get('/', (req, res) => {
    fetchAlleBestellungen().then((BestellungenUebersicht) => {
        res.status(200);
        res.json(BestellungenUebersicht);
    }).catch((err) => {
        res.status(500);
        res.send();
    })
});

export default router;