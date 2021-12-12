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

router.get('/:ArtikelNr', (req, res) => {
    const ArtikelNr = parseInt(req.params.KundenNr);
    console.log(ArtikelNr);
    ArtikelService.fetchEinenArtikel(ArtikelNr).then(() => {
        res.status(204);
        res.send();
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
    const ArtikelName = req.body.ArtikelName;
    const ArtikelBeschreibung = req.body.ArtikelBeschreibung;
    const ArtikelPreis = parseInt(req.body.ArtikelPreis);
    if (ArtikelName
        && ArtikelBeschreibung
        && ArtikelPreis) {
        ArtikelService.addArtikel(ArtikelName,
            ArtikelBeschreibung,
            ArtikelPreis).then(function () {
            res.status(201).send();
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
    const ArtikelName = req.body.ArtikelName;
    const ArtikelBeschreibung = req.body.ArtikelBeschreibung;
    const ArtikelPreis = parseInt(req.body.ArtikelPreis);
    if (ArtikelNr
        && ArtikelName
        && ArtikelBeschreibung
        && ArtikelPreis) {
        if (parseInt(req.params.ArtikelNr) === parseInt(req.body.ArtikelNr)) {
            ArtikelService.updateArtikel(ArtikelNr,
                ArtikelName,
                ArtikelBeschreibung,
                ArtikelPreis).then(() => {
                res.status(201);
                res.send();
            }).catch((err) => {
                res.status(500);
                res.send(err);
            })
        } else {
            res.status(400).send("inconsistent");
        }
    } else {
        res.status(400).send("bad request");
    }


});
