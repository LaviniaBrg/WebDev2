import { getAlleBestellungen } from '../models/bestellungen-model.js';

export async function fetchAlleBestellungen() {
    const BestellungenUebersicht = await bestellungenModel.getAlleBestellungen();
    return BestellungenUebersicht;
}