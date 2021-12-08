
import * as KundenModel from '../models/kunden-model.js';

export async function fetchAlleKunden() {
    const KundenUebersicht = await KundenModel.getAlleKunden();
    return KundenUebersicht;
}

export async function deleteKunde(KundenNr){
    const KundenUebersicht = await KundenModel.deleteKunde(KundenNr);
    return KundenUebersicht;
}

export async function updateKunde(KundenNr){
    const KundenUebersicht = await KundenModel.updateKunde(KundenNr);
    return KundenUebersicht;
}

export async function addKunde(KundenNr){
    const KundenUebersicht = await KundenModel.addKunde(KundenNr);
    return KundenUebersicht;
}
