import {getAlleBestellungen} from '../models/bestellungen-model.js';

export async function fetchAlleBestellungen() {
    return await getAlleBestellungen();
}
