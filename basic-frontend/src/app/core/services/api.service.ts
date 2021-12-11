import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Artikel} from "../../models/artikel.model";
import {Kunde} from "../../models/kunde.model";
import {Bestellung} from "../../models/bestellung.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

  getArtikel() {
    return this.http.get<Artikel[]>(`${this.baseUrl}/artikel`)
  }

  deleteArtikel(artikelNr: number) {
    return this.http.delete<any>(`${this.baseUrl}/artikel`, {body: {ArtikelNr: artikelNr}})
  }

  addArtikel(artikel: Artikel) {
    return this.http.post<any>(`${this.baseUrl}/artikel`, {body: JSON.stringify(artikel)})
  }

  updateArtikel(artikel: Artikel) {
    return this.http.put<any>(`${this.baseUrl}/artikel`, {body: JSON.stringify(artikel)})
  }

  getKunden() {
    return this.http.get<Kunde[]>(`${this.baseUrl}/kunden`)
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

  deleteBestellung(bestellNr: number) {
    return this.http.delete<any>(`${this.baseUrl}/bestellungen`, {body: {BestellNr: bestellNr}})
  }

  addBestellung(bestellNr: number) {
    return this.http.put<any>(`${this.baseUrl}/bestellungen`, {body: {BestellNr: bestellNr}})
  }

  updateBestellung(bestellNr: number) {
    return this.http.post<any>(`${this.baseUrl}/bestellungen`, {body: {BestellNr: bestellNr}})
  }
}
