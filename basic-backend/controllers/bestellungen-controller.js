import { Router } from 'express';
export const router = Router();

router.get('/', (req, res) => {
    BestellungenService.BestellungenServicefetchAlleBestellungen().then((BestellungenUebersicht) => {
        res.status(200);
        res.json(BestellungenUebersicht);
    }).catch((err) => {
        res.status(500);
        res.send();
    })
});

export default { BestellungenUebersicht };