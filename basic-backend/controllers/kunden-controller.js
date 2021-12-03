import { Router } from 'express';
import {fetchAlleKunden} from "../services/kunden-service.js";
export const router = Router();

router.get('/', (req, res) => {
    fetchAlleKunden().then((KundenUebersicht) => {
        res.status(200);
        res.json(KundenUebersicht);
    }).catch((err) => {
        res.status(500);
        res.send();
    })
});