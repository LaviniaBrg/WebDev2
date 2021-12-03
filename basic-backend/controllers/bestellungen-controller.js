import { Router } from 'express';
import {fetchAlleBestellungen} from "../services/bestellungen-service.js";
export const router = Router();

router.get('/', (req, res) => {
    fetchAlleBestellungen().then((BestellungenUebersicht) => {
        res.status(200);
        res.json(BestellungenUebersicht);
    }).catch((err) => {
        res.status(500);
        res.send();
    })
});