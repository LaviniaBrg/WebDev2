import { getAlleArtikel } from '../models/artikel-model.js';

export async function fetchAlleArtikel() {
    const ArtikelUebersicht = await getAlleArtikel();
    return ArtikelUebersicht;
}