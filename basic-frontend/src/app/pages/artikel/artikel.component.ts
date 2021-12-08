import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../core/services/api.service";
import {Artikel} from "../../models/artikel.model";

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.css']
})
export class ArtikelComponent implements OnInit {

  public eintraege: Artikel[];
  public geloeschterEintrag: Artikel[];
  public neuerEintrag: Artikel[];
  public aktualisierterEintrag: Artikel[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getArtikel().subscribe(artikel => {
      this.eintraege = artikel;
    })
  }

  deleteArtikel(ArtikelNr: number){
    this.apiService.deleteArtikel(ArtikelNr).subscribe(artikel => {
      this.geloeschterEintrag = artikel;
      console.log("gelöschter", artikel);
    } )
  }

  neuerArtikel(ArtikelNr: number){
    this.apiService.addArtikel(ArtikelNr).subscribe(artikel => {
      this.neuerEintrag = artikel;
      console.log("neuer", artikel);
    } )
  }

  AktualisierterArtikel(ArtikelNr: number){
    this.apiService.updateArtikel(ArtikelNr).subscribe(artikel => {
      this.aktualisierterEintrag = artikel;
      console.log("aktualisierter", artikel);
    } )
  }

}

