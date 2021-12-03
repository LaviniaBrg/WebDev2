const bestellungenModel = require('../models/bestellungen-model');

async function fetchAlleBestellungen() {
    const BestellungenUebersicht = await bestellungenModel.getAlleBestellungen();
    return BestellungenUebersicht;
}

module.exports = [fetchAlleBestellungen];