import { Router } from 'express';
export const router = Router();

router.get('/', (req, res) => {
    ArtikelService.fetchAlleArtikel().then((ArtikelUebersicht) => {
        res.status(200);
        res.json(ArtikelUebersicht);
    }).catch((err) => {
        res.status(500);
        res.send();
    })
});

export default { ArtikelUebersicht };