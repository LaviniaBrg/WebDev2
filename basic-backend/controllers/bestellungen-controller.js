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
    if(req.body.BestellNr !== undefined){
        let BestellNr = req.body.BestellNr;
        BestellungenService.updateBestellung(BestellNr).then((BestellungenUebersicht) => {
            res.status(200);
            res.json(BestellungenUebersicht);
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
    console.log(BestellNr);
    BestellungenService.addBestellung(BestellNr).then( () => {
        res.status(204);
        res.send();
    }).catch((err) => {
        res.status(500);
        res.send(err);
    })
});