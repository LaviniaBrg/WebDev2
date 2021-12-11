import * as ArtikelModel from '../models/artikel-model.js';

export async function fetchAlleArtikel() {
    const ArtikelUebersicht = await ArtikelModel.getAlleArtikel();
    return ArtikelUebersicht;
}

export async function deleteArtikel(ArtikelNr) {
    const ArtikelUebersicht = await ArtikelModel.deleteArtikel(ArtikelNr);
    return ArtikelUebersicht;
}
export async function updateArtikel(ArtikelNr, ArtikelName, ArtikelBeschreibung, ArtikelPreis) {
    await ArtikelModel.aupdateArtikel(ArtikelNr, ArtikelName, ArtikelBeschreibung, ArtikelPreis);
}

export async function addArtikel(ArtikelName, ArtikelBeschreibung, ArtikelPreis) {
    await ArtikelModel.addArtikel(ArtikelName, ArtikelBeschreibung, ArtikelPreis);
}
