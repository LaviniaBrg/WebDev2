import {getAlleKunden} from '../models/kunden-model.js';

export async function fetchAlleKunden() {
    return await getAlleKunden();
}
