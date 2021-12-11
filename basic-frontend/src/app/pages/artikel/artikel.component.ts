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

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getArtikel().subscribe(artikel => {
      this.eintraege = artikel;
    })
  }

  deleteArtikel(ArtikelNr: number) {
    this.apiService.deleteArtikel(ArtikelNr).subscribe(artikel => {
      this.eintraege = artikel;
      console.log("gelöschter", artikel);
    })
  }

  neuerArtikel(ArtikelNr: number, ArtikelName: string, ArtikelPreis: number) {
    const artikel: Artikel = {
      ArtikelNr: 0,
      ArtikelName: "Haare grün",
      ArtikelBeschreibung: "50 cm lang grüne Naturwelle 100g",
      ArtikelPreis: 49.90
    };
    this.apiService.addArtikel(artikel);
  }

  AktualisierterArtikel(ArtikelNr: number, ArtikelName: string, ArtikelPreis: number) {
    const artikel: Artikel = {
      ArtikelNr: 0,
      ArtikelName: "Haare grün",
      ArtikelBeschreibung: "50 cm lang grüne Naturwelle 100g",
      ArtikelPreis: 49.90
    };
    this.apiService.updateArtikel(artikel);
  }
}
