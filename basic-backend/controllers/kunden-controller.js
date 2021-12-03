import { Router } from 'express';
export const router = Router();

router.get('/', (req, res) => {
    KundenService.KundenServicefetchAlleKunden().then((KundenUebersicht) => {
        res.status(200);
        res.json(KundenUebersicht);
    }).catch((err) => {
        res.status(500);
        res.send();
    })
});

export default KundenUebersicht;