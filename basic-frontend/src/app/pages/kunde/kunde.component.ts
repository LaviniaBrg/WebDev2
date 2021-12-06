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

}
