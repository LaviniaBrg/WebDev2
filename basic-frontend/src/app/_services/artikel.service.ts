import {Injectable} from "@angular/core";
import {Artikel} from "../models/artikel.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})

export class ArtikelService {

    private readonly basePath = environment.backend_URL + '/api';

    constructor(private http: HttpClient) {
    }

    alterArtikel(ArtikelNr: number, ArtikelName: string, ArtikelBeschreibung: string, ArtikelPreis: number): Observable<Artikel> {
        return this.http.put<Artikel>(
            `${this.basePath}/artikel/${ArtikelNr}`,
            {
                ArtikelName: ArtikelName,
                ArtikelBeschreibung: ArtikelBeschreibung,
                ArtikelPreis: ArtikelPreis
            }
        )
    }

    getArtikel(ArtikelNr: number) {
        return this.http.get<Artikel>(
            `${this.basePath}/artikel/${ArtikelNr}`
        )
    }
}
