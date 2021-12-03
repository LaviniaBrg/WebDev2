import { Router } from 'express';
import express from 'express';
export const router = Router();

//import echoController from './controllers/echo';
import { router as bestellungenRouter } from './controllers/bestellungen-controller.js';
import { router as artikelRouter } from './controllers/artikel-controller.js';
import { router as kundenRouter } from './controllers/kunden-controller.js';
import { logToConsole } from './util/logger.js';
import cors from "cors";

router.use(cors());
router.use(express.json());
router.use(logToConsole);

//router.use('/echo', echoController);
router.use('/artikel', artikelRouter);
router.use('/kunden', kundenRouter);
router.use('/bestellungen', bestellungenRouter);

router.use((req, res) => {
    res.status(404);
    res.send('Route does not exist');
});