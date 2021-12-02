const artikelModel = require('../models/artikel-model');

async function fetchAlleArtikel() {
    const ArtikelUebersicht = await artikelModel.getAlleArtikel();
    return ArtikelUebersicht;
}

module.exports = [fetchAlleArtikel];