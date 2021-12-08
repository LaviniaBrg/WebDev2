import * as ArtikelModel from '../models/artikel-model.js';

export async function fetchAlleArtikel() {
    const ArtikelUebersicht = await ArtikelModel.getAlleArtikel();
    return ArtikelUebersicht;
}

export async function deleteArtikel(ArtikelNr) {
    const ArtikelUebersicht = await ArtikelModel.deleteArtikel(ArtikelNr);
    return ArtikelUebersicht;
}
export async function updateArtikel(ArtikelNr) {
    const ArtikelUebersicht = await ArtikelModel.aupdateArtikel(ArtikelNr);
    return ArtikelUebersicht;
}

export async function addArtikel(ArtikelNr) {
    const ArtikelUebersicht = await ArtikelModel.addArtikel(ArtikelNr);
    return ArtikelUebersicht;
}