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

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getKunden().subscribe(kunde => {
      this.eintraege = kunde;
      console.log(kunde);
    })
  }

  deleteKunde(KundeNr: number) {
    this.apiService.deleteKunde(KundeNr).subscribe(kunde => {
      this.eintraege =kunde;
      console.log("gelöschter", kunde);
    })
  }

  addKunde(KundenNr: number, KundenAnrede: string, KundenVorname: string, KundenNachname:string, ReAdressNr: number, LiAdressNr: number) {
    const kunde: Kunde = {
      KundenNr: KundenNr,
      KundenAnrede: KundenAnrede,
      KundenVorname: KundenVorname,
      KundenNachname: KundenNachname,
      ReAdressNr: ReAdressNr,
      LiAdressNr: LiAdressNr
    };
    this.apiService.addKunde(kunde);
  }

  updateKunde(KundenNr: number, KundenAnrede: string, KundenVorname: string, KundenNachname:string, ReAdressNr: number, LiAdressNr: number) {
    const kunde: Kunde = {
      KundenNr: KundenNr,
      KundenAnrede: KundenAnrede,
      KundenVorname: KundenVorname,
      KundenNachname: KundenNachname,
      ReAdressNr: ReAdressNr,
      LiAdressNr: LiAdressNr
    };
    this.apiService.updateKunde(kunde);
  }

}
