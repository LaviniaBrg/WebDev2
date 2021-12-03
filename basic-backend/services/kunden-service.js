import { getAlleKunden } from '../models/kunden-model.js';

export async function fetchAlleKunden() {
    const KundenUebersicht = await getAlleKunden();
    return KundenUebersicht;
}