import { Router } from 'express';
import * as BestellungenService from "../services/bestellungen-service.js";
export const router = Router();

router.get('/', (req, res) => {
    BestellungenService.fetchAlleBestellungen().then((BestellungenUebersicht) => {
        res.status(200);
        res.json(BestellungenUebersicht);
    }).catch((err) => {
        res.status(500);
        res.send();
    })
});

router.get('/:BestellNr',(req, res) =>{
    const BestellNr = parseInt(req.params.BestellNr);
    console.log(BestellNr);
    BestellungenService.fetchEineBestellung(BestellNr).then( () => {
        res.status(204);
        res.send();
    }).catch((err) => {
        res.status(500);
        res.send(err);
    })
});

router.delete('/:BestellNr',(req, res) =>{
    const BestellNr = parseInt(req.params.BestellNr);
    console.log(BestellNr);
    BestellungenService.deleteBestellung(BestellNr).then( () => {
        res.status(204);
        res.send();
    }).catch((err) => {
        res.status(500);
        res.send(err);
    })
});

router.post('/', (req, res)=>{
    const BestellStatus = req.body.BestellStatus;
    const BestellDatum = req.body.BestellDatum;
    const LieferDatumGeplant = req.body.LieferDatumGeplant;
    const VersandDatum = req.body.VersandDatum;
    const KundenNr = parseInt(req.body.KundenNr);
    const ReAdressNr = parseInt(req.body.ReAdressNr);
    const LiAdressNr = parseInt(req.body.LiAdressNr);
    if(BestellStatus
        && BestellDatum
        && LieferDatumGeplant
        && VersandDatum
        && KundenNr
        && ReAdressNr
        && LiAdressNr){
        BestellungenService.addBestellung(BestellStatus,
            BestellDatum,
            LieferDatumGeplant,
            VersandDatum,
            KundenNr,
            ReAdressNr,
            LiAdressNr).then(function () {
            res.status(201).send();
        }).catch((err) => {
            res.status(500);
            res.send();
        })
    } else {
        res.status(400);
        res.send();
    }
});

router.put('/:BestellNr', (req, res) =>{
    const BestellNr = parseInt(req.params.BestellNr);
    const BestellStatus = req.body.BestellStatus;
    const BestellDatum = req.body.BestellDatum;
    const LieferDatumGeplant = req.body.LieferDatumGeplant;
    const VersandDatum = req.body.VersandDatum;
    const KundenNr = parseInt(req.body.KundenNr);
    const ReAdressNr = parseInt(req.body.ReAdressNr);
    const LiAdressNr = parseInt(req.body.LiAdressNr);
    if( BestellNr
        && BestellStatus
        && BestellDatum
        && LieferDatumGeplant
        && VersandDatum
        && KundenNr
        && ReAdressNr
        && LiAdressNr){
        if(parseInt(req.params.BestellNr) === parseInt(req.body.BestellNr)){
            BestellungenService.updateBestellung(BestellNr,
                BestellStatus,
                BestellDatum,
                LieferDatumGeplant,
                VersandDatum,
                KundenNr,
                ReAdressNr,
                LiAdressNr).then( () => {
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
