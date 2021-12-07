import {HttpClient} from '@angular/common/http';
import {Artikel} from "../../models/artikel.model";
import {Kunde} from "../../models/kunde.model";


export class ApiService {

  private readonly baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

  getArtikel() {
    return this.http.get<Artikel[]>(`${this.baseUrl}/artikel`)
  }

  getKunden() {
    return this.http.get<Kunde[]>(`${this.baseUrl}/kunden`)
  }
}
