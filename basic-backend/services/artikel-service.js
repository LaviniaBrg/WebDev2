import { getAlleArtikel } from '../models/artikel-model';

async function fetchAlleArtikel() {
    const ArtikelUebersicht = await getAlleArtikel();
    return ArtikelUebersicht;
}

export default [fetchAlleArtikel];