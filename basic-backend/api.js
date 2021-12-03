import { Router } from 'express';
const router = Router();

import echoController from './controllers/echo';
import artikelController from './controllers/artikel-controller';
import bestellungenController from './controllers/bestellungen-controller';
import kundenController from './controllers/kunden-controller';
import logger from './util/logger';
import cors from "cors";

router.use(cors());
router.use(express.json());
router.use(logger.logToConsole);

router.use('/echo', echoController);
router.use('/artikel', artikelController);
router.use('/kunden', kundenController);
router.use('/bestellungen', bestellungenController);

router.use((req, res) => {
    res.status(404);
    res.send('Route does not exist');
});

export default router;