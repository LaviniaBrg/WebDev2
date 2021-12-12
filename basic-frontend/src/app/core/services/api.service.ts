import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Artikel} from "../../models/artikel.model";
import {Kunde} from "../../models/kunde.model";
import {Bestellung} from "../../models/bestellung.model";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private readonly baseUrl = environment.backend_URL+ '/api';

    constructor(private http: HttpClient) {
    }

    getArtikel() {
        return this.http.get<Artikel[]>(`${this.baseUrl}/artikel`)
    }

    get1Artikel(ArtikelNr: string) {
        return this.http.get<Artikel>(`${this.baseUrl}/artikel/${ArtikelNr}`)
    }

    deleteArtikel(artikelNr: number) {
        return this.http.delete<void>(`${this.baseUrl}/artikel/${artikelNr}`)
    }

    addArtikel(artikel: Artikel) {
        return this.http.post<void>(`${this.baseUrl}/artikel`, artikel)
    }

    updateArtikel(artikel: Artikel) {
        return this.http.put<void>(`${this.baseUrl}/artikel/${artikel.ArtikelNr}`, artikel)
    }

    getKunden() {
        return this.http.get<Kunde[]>(`${this.baseUrl}/kunden`)
    }

    getKunde(KundenId: string) {
        return this.http.get<Kunde>(`${this.baseUrl}/kunden/${KundenId}`)
    }

    deleteKunde(kundenNr: number) {
        return this.http.delete<any>(`${this.baseUrl}/kunden`, {body: {KundenNr: kundenNr}})
    }

    addKunde(kunde: Kunde) {
        return this.http.post<any>(`${this.baseUrl}/kunden`, {body: JSON.stringify(kunde)})
    }

    updateKunde(kunde: Kunde) {
        return this.http.put<any>(`${this.baseUrl}/kunden/${kunde.KundenNr}`, {body: JSON.stringify(kunde)})

    }

    getBestellungen() {
        return this.http.get<Bestellung[]>(`${this.baseUrl}/bestellungen`)
    }

    getBestellung(BestellNr: number) {
        return this.http.get<Bestellung>(`${this.baseUrl}/bestellungen/${BestellNr}`)
    }

    deleteBestellung(BestellNr: number) {
        return this.http.delete<void>(`${this.baseUrl}/bestellungen/${BestellNr}`)
    }

    addBestellung(bestellung: Bestellung) {
        return this.http.post<void>(`${this.baseUrl}/bestellungen/`, bestellung)
    }

    updateBestellung(bestellung: Bestellung) {
        return this.http.put<void>(`${this.baseUrl}/bestellungen/${bestellung.BestellNr}`, bestellung)
    }
}
