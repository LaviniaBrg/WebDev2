import { Router } from 'express';
import {fetchAlleArtikel} from "../services/artikel-service.js";
export const router = Router();

router.get('/', (req, res) => {
    fetchAlleArtikel().then((ArtikelUebersicht) => {
        res.status(200);
        res.json(ArtikelUebersicht);
    }).catch((err) => {
        res.status(500);
        res.send();
    })
});