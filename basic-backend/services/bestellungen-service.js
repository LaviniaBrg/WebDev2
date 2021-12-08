import * as BestellungenModel from '../models/bestellungen-model.js';

export async function fetchAlleBestellungen() {
    const BestellungenUebersicht = await BestellungenModel.getAlleBestellungen();
    return BestellungenUebersicht;
}

export async function deleteBestellung(BestellNr){
    const BestellungenUebersicht = await BestellungenModel.deleteBestellung(BestellNr);
    return BestellungenUebersicht;
}

export async function updateBestellung(BestellNr){
    const BestellungenUebersicht = await BestellungenModel.updateBestellung(BestellNr);
    return BestellungenUebersicht;
}

export async function addBestellung(BestellNr){
    const BestellungenUebersicht = await BestellungenModel.addBestellung(BestellNr);
    return BestellungenUebersicht;
}