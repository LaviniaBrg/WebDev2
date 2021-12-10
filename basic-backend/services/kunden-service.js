
import * as KundenModel from '../models/kunden-model.js';

export async function fetchAlleKunden() {
    const KundenUebersicht = await KundenModel.getAlleKunden();
    return KundenUebersicht;
}

export async function deleteKunde(KundenNr){
    const KundenUebersicht = await KundenModel.deleteKunde(KundenNr);
    return KundenUebersicht;
}

export async function updateKunde(KundenNr, KundenAnrede, KundenVorname, KundenNachname, ReAdressNr, LiAdressNr){
    await KundenModel.updateKunde(KundenNr, KundenAnrede, KundenVorname, KundenNachname, ReAdressNr, LiAdressNr);

}

export async function addKunde(KundenAnrede, KundenVorname, KundenNachname, ReAdressNr, LiAdressNr){
    await KundenModel.addKunde(KundenAnrede, KundenVorname, KundenNachname, ReAdressNr, LiAdressNr);


}
