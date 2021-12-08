import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../core/services/api.service";
import {Bestellung} from "../../models/bestellung.model";

@Component({
  selector: 'app-bestellung',
  templateUrl: './bestellung.component.html',
  styleUrls: ['./bestellung.component.css']
})
export class BestellungComponent implements OnInit {

  public eintraege: Bestellung[];
  public geloeschterEintrag: Bestellung[];
  public neuerEintrag: Bestellung[];
  public aktualisierterEintrag: Bestellung[];

  constructor(private apiService: ApiService) { }

  // @ts-ignore
  ngOnInit(): void {
    this.apiService.getBestellungen().subscribe(bestellung => {
      this.eintraege = bestellung;
    })
  }

  deleteBestellung(BestellNr: number){
    this.apiService.deleteBestellung(BestellNr).subscribe(bestellung => {
      this.geloeschterEintrag = bestellung;
      console.log("gelöschter", bestellung);
    } )
  }

  neueBestellung(BestellNr: number){
    this.apiService.addBestellung(BestellNr).subscribe(bestellung => {
      this.neuerEintrag = bestellung;
      console.log("neuer", bestellung);
    } )
  }

  AktualisierteBestellung(BestellNr: number){
    this.apiService.updateBestellung(BestellNr).subscribe(bestellung => {
      this.aktualisierterEintrag = bestellung;
      console.log("aktualisierter", bestellung);
    } )
  }
}
