import {Injectable} from "@angular/core";
import {Bestellung} from "../models/bestellung.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})

export class BestellungService {

    private readonly basePath = environment.backend_URL + '/api';

    constructor(private http: HttpClient) {
    }

    alterBestellung(BestellNr: number, BestellStatus: string, BestellDatum: any, LieferDatumGeplant: any, VersandDatum: any, KundenNr: number, ReAdressNr: number, LiAdressNr: number): Observable<Bestellung> {
        return this.http.put<Bestellung>(
            `${this.basePath}/bestellungen/${BestellNr}`,
            {
                BestellStatus: BestellStatus,
                BestellDatum: BestellDatum,
                LieferDatumGeplant: LieferDatumGeplant,
                VersandDatum: VersandDatum,
                ReAdressNr: ReAdressNr,
                LiAdressNr: LiAdressNr
            }
        )
    }

    getArtikel(BestellNr: number) {
        return this.http.get<Bestellung>(
            `${this.basePath}/bestellungen/${BestellNr}`
        )
    }
}
