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

router.get('/:KundenNr',(req, res) =>{
    const KundenNr = parseInt(req.params.KundenNr);
    console.log(KundenNr);
    KundenService.fetchEinenKunden(KundenNr).then( () => {
        res.status(204);
        res.send();
    }).catch((err) => {
        res.status(500);
        res.send(err);
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
    const KundenAnrede = req.body.KundenAnrede;
    const KundenVorname = req.body.KundenVorname;
    const KundenNachname = req.body.KundenNachname;
    const ReAdressNr = parseInt(req.body.ReAdressNr);
    const LiAdressNr = parseInt(req.body.LiAdressNr);
    if(KundenAnrede
        && KundenVorname
        && KundenNachname
        && ReAdressNr
        && LiAdressNr){
        KundenService.addKunde(KundenAnrede,
            KundenVorname,
            KundenNachname,
            ReAdressNr,
            LiAdressNr).then(function () {
            res.status(201).send();
        }).catch((err) => {
            res.status(500);
            res.send(err);
        })
    } else {
        res.status(400);
        res.send();
    }
});

router.put('/:KundenNr', (req, res) =>{
    const KundenNr = parseInt(req.params.KundenNr);
    const KundenAnrede = req.body.KundenAnrede
    const KundenVorname = req.body.KundenVorname;
    const KundenNachname = req.body.KundenNachname;
    const ReAdressNr = parseInt(req.body.ReAdressNr);
    const LiAdressNr = parseInt(req.body.LiAdressNr);
    if(KundenNr
        && KundenAnrede
        && KundenVorname
        && KundenNachname
        && ReAdressNr
        && LiAdressNr){
        if(parseInt(req.params.KundenNr) === parseInt(req.body.KundenNr)){
            KundenService.updateKunde(KundenNr,
                KundenAnrede,
                KundenVorname,
                KundenNachname,
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
