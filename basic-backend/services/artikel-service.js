import {getAlleArtikel} from '../models/artikel-model.js';

export async function fetchAlleArtikel() {
    return await getAlleArtikel();
}
