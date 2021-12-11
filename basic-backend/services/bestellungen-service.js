import * as BestellungenModel from '../models/bestellungen-model.js';

export async function fetchAlleBestellungen() {
    const BestellungenUebersicht = await BestellungenModel.getAlleBestellungen();
    return BestellungenUebersicht;
}

export async function deleteBestellung(BestellNr){
    const BestellungenUebersicht = await BestellungenModel.deleteBestellung(BestellNr);
    return BestellungenUebersicht;
}

export async function updateBestellung(BestellNr, BestellStatus, BestellDatum, LieferDatumGeplant, VersandDatum, KundenNr, ReAdressNr, LiAdressNr){
    await BestellungenModel.updateBestellung(BestellNr, BestellStatus, BestellDatum, LieferDatumGeplant, VersandDatum, KundenNr, ReAdressNr, LiAdressNr);
}

export async function addBestellung(BestellStatus, BestellDatum, LieferDatumGeplant, VersandDatum, KundenNr, ReAdressNr, LiAdressNr){
    await BestellungenModel.addBestellung(BestellStatus, BestellDatum, LieferDatumGeplant, VersandDatum, KundenNr, ReAdressNr, LiAdressNr);
}
