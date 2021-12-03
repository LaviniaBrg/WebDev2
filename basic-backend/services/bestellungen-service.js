import bestellungenModel from '../models/bestellungen-model';

async function fetchAlleBestellungen() {
    const BestellungenUebersicht = await bestellungenModel.getAlleBestellungen();
    return BestellungenUebersicht;
}

export default [fetchAlleBestellungen];