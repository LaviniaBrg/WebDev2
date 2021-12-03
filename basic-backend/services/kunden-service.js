import { getAlleKunden } from '../models/kunden-model';

async function fetchAlleKunden() {
    const KundenUebersicht = await getAlleKunden();
    return KundenUebersicht;
}

export default [fetchAlleKunden];