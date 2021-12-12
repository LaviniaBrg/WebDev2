import express, {Router} from 'express';
import {router as bestellungenRouter} from './controllers/bestellungen-controller.js';
import {router as artikelRouter} from './controllers/artikel-controller.js';
import {router as kundenRouter} from './controllers/kunden-controller.js';
import {logToConsole} from './util/logger.js';
import cors from "cors";
import {authRouter} from './controllers/auth.controller.js';

export const router = Router();

router.use(cors());
router.use(express.json());
router.use(logToConsole);
router.use('/artikel', artikelRouter);
router.use('/artikel/:ArtikelNr', artikelRouter);
router.use('/kunden', kundenRouter);
router.use('/kunden/:KundenNr', kundenRouter);
router.use('/bestellungen', bestellungenRouter);
router.use('/bestellungen/:BestellNr', bestellungenRouter);
router.use('/authentifizieren', authRouter);

router.use((req, res) => {
    res.status(404);
    res.send('Route does not exist');
});
