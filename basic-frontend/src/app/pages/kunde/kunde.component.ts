import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../core/services/api.service";
import {Kunde} from "../../models/kunde.model";

@Component({
  selector: 'app-kunde',
  templateUrl: './kunde.component.html',
  styleUrls: ['./kunde.component.css']
})
export class KundeComponent implements OnInit {

  public eintraege: Kunde[];
  public geloeschterEintrag: Kunde[];
  public neuerEintrag: Kunde[];
  public aktualisierterEintrag: Kunde[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getKunden().subscribe(kunde => {
      this.eintraege = kunde;
      console.log(kunde);
    })
  }

  deleteKunde(KundenNr: number){
    this.apiService.deleteKunde(KundenNr).subscribe(kunde => {
      this.geloeschterEintrag = kunde;
      console.log("gelöschter", kunde);
    } )
  }

  neuerKunde(KundenNr: number, ){
    const kunde : Kunde = {
      KundenNr : 0,
      KundenAnrede : "Herr",
      KundenVorname : "Theo",
      KundenNachname : "Krinitz",
      ReAdressNr : 69,
      LiAdressNr : 69
    };
    this.apiService.addKunde(kunde);
  }

  AktualisierterKunde(KundenNr: number){
    this.apiService.updateKunde(KundenNr).subscribe(kunde => {
      this.aktualisierterEintrag = kunde;
      console.log("aktualisierter", kunde);
    } )
  }

}

