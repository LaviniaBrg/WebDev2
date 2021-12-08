import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Artikel} from "../../models/artikel.model";
import {Kunde} from "../../models/kunde.model";


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

  addArtikel(artikelNr: number) {
    return this.http.put<any>(`${this.baseUrl}/artikel`, {body: {ArtikelNr: artikelNr}})
  }

  updateArtikel(artikelNr: number) {
    return this.http.post<any>(`${this.baseUrl}/artikel`, {body: {ArtikelNr: artikelNr}})
  }

  getKunden() {
    return this.http.get<Kunde[]>(`${this.baseUrl}/kunden`)
  }

  deleteKunden(kundenNr: number) {
    return this.http.delete<any>(`${this.baseUrl}/kunden`, {body: {KundenNr: kundenNr}})
  }

  addKunde(kundenNr: number) {
    return this.http.put<any>(`${this.baseUrl}/kunden`, {body: {KundenNr: kundenNr}})
  }

  updateKunde(kundenNr: number) {
    return this.http.post<any>(`${this.baseUrl}/kunden`, {body: {KundenNr: kundenNr}})
  }
}
