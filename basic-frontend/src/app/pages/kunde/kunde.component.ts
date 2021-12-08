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

  neuerKunde(KundenNr: number){
    this.apiService.addKunde(KundenNr).subscribe(kunde => {
      this.neuerEintrag = kunde;
      console.log("neuer", kunde);
    } )
  }

  AktualisierterKunde(KundenNr: number){
    this.apiService.updateKunde(KundenNr).subscribe(kunde => {
      this.aktualisierterEintrag = kunde;
      console.log("aktualisierter", kunde);
    } )
  }

}

