import { Router } from 'express';
import * as KundenService from "../services/kunden-service.js";
export const router = Router();

router.get('/', (req, res) => {
    KundenService.fetchAlleKunden().then((KundenUebersicht) => {
        res.status(200);
        res.json(KundenUebersicht);
    }).catch((err) => {
        res.status(500);
        res.send();
    })
});

router.delete('/:KundenNr',(req, res) =>{
    const KundenNr = parseInt(req.params.KundenNr);
    console.log(KundenNr);
    KundenService.deleteKunde(KundenNr).then( () => {
        res.status(204);
        res.send();
    }).catch((err) => {
        res.status(500);
        res.send(err);
    })
});

router.post('/', (req, res)=>{
    if(req.body.KundenNr !== undefined){
        let KundenNr = req.body.KundenNr;
        KundenService.updateKunde(KundenNr).then((KundenUebersicht) => {
            res.status(200);
            res.json(KundenUebersicht);
        }).catch((err) => {
            res.status(500);
            res.send();
        })
    } else {
        res.status(400);
        res.send();
    }
});

router.put('/:KundenNr', (req, res) =>{
    const KundenNr = parseInt(req.params.KundenNr);
    console.log(KundenNr);
    KundenService.addKunde(KundenNr).then( () => {
        res.status(204);
        res.send();
    }).catch((err) => {
        res.status(500);
        res.send(err);
    })
});