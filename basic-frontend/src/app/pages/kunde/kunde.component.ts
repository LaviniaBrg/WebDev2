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
  public geloeschtereintrag: Kunde[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getKunden().subscribe(kunde => {
      this.eintraege = kunde;
      console.log(kunde);
    })
  }

  deleteKunden(KundenNr: number){
    this.apiService.deleteKunden(KundenNr).subscribe(kunde => {
      this.geloeschtereintrag = kunde;
      console.log("gelöschter", kunde);
    } )
  }
}

