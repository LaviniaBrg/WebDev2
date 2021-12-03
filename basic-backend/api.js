import { Router } from 'express';
import express from 'express';
export const router = Router();

//import echoController from './controllers/echo';
import { BestellungenUebersicht } from './controllers/bestellungen-controller.js';
import { ArtikelUebersicht } from './controllers/artikel-controller.js';
import { KundenUebersicht } from './controllers/kunden-controller.js';
import { logToConsole } from './util/logger.js';
import cors from "cors";

router.use(cors());
router.use(express.json());
router.use(logToConsole);

//router.use('/echo', echoController);
router.use('/artikel', ArtikelUebersicht);
router.use('/kunden', KundenUebersicht);
router.use('/bestellungen', BestellungenUebersicht);

router.use((req, res) => {
    res.status(404);
    res.send('Route does not exist');
});