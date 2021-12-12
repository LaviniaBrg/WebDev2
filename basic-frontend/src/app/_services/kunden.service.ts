import {Injectable} from "@angular/core";
import {Kunde} from "../models/kunde.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})

export class KundenService {

    private readonly basePath = environment.backend_URL + '/api';

    constructor(private http: HttpClient) {
    }

    alterKunde(KundenNr: number, KundenAnrede: string, KundenVorname: string, KundenNachname: string, ReAdressNr: number, LiAdressNr: number): Observable<Kunde> {
        return this.http.put<Kunde>(
            `${this.basePath}/kunden/${KundenNr}`,
            {
                KundenAnrede: KundenAnrede,
                KundenVorname: KundenVorname,
                KundenNachname: KundenNachname,
                ReAdressNr: ReAdressNr,
                LiAdressNr: LiAdressNr
            }
        )
    }

    getKunde(KundenNr: number) {
        return this.http.get<Kunde>(
            `${this.basePath}/kunden/${KundenNr}`
        )
    }
}
