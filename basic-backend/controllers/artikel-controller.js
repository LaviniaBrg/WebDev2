import {Router} from 'express';
import * as ArtikelService from "../services/artikel-service.js";

export const router = Router();

router.get('/', (req, res) => {
    ArtikelService.fetchAlleArtikel().then((ArtikelUebersicht) => {
        res.status(200);
        res.json(ArtikelUebersicht);
    }).catch((err) => {
        res.status(500);
        res.send(err);
    })
});

router.delete('/:ArtikelNr', (req, res) => {
    const ArtikelNr = parseInt(req.params.KundenNr);
    console.log(ArtikelNr);
    ArtikelService.deleteArtikel(ArtikelNr).then(() => {
        res.status(204);
        res.send();
    }).catch((err) => {
        res.status(500);
        res.send(err);
    })
});

router.post('/', (req, res) => {
    if (req.body.ArtikelNr !== undefined) {
        let ArtikelNr = req.body.KundenNr;
        ArtikelService.updateArtikel(ArtikelNr).then((ArtikelUebersicht) => {
            res.status(200);
            res.json(ArtikelUebersicht);
        }).catch((err) => {
            res.status(500);
            res.send();
        })
    } else {
        res.status(400);
        res.send();
    }
});

router.put('/:ArtikelNr', (req, res) => {
    const ArtikelNr = parseInt(req.params.ArtikelNr);
    console.log(ArtikelNr);
    ArtikelService.addArtikel(ArtikelNr).then(() => {
        res.status(204);
        res.send();
    }).catch((err) => {
        res.status(500);
        res.send(err);
    })
});
