const kundenModel = require('../models/kunden-model');

async function fetchAlleKunden() {
    const KundenUebersicht = await kundenModel.getAlleKunden();
    return KundenUebersicht;
}

module.exports = [fetchAlleKunden];