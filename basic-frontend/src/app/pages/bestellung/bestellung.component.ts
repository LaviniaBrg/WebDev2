import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../core/services/api.service";
import {Bestellung} from "../../models/bestellung.model";

@Component({
    selector: 'app-bestellung',
    templateUrl: './bestellung.component.html',
    styleUrls: ['./bestellung.component.css']
})
export class BestellungComponent implements OnInit {

    public eintraege: Bestellung[];

    constructor(private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.apiService.getBestellungen().subscribe(bestellung => {
            this.eintraege = bestellung;
            console.log(bestellung);
        })
    }

    deleteBestellung(BestellNr: number) {
        this.apiService.deleteBestellung(BestellNr).subscribe(bestellung => {
            this.eintraege = bestellung;
            console.log("gelöschte", bestellung);
        })
    }

    neueBestellung(BestellNr: number, BestellStatus: string, BestellDatum: Date, LieferDatumGepkant: Date, VersandDatum: Date, KundenNr: number, ReAdressNr: number, LiAdressNr: number) {
        const bestellung: Bestellung = {
            BestellNr: 0,
            BestellStatus: "versendet",
            BestellDatum: 24.09 - 2017,
            LieferDatumGeplant: 29.09 - 2017,
            VersandDatum: 27.09 - 2017,
            KundenNr: 45,
            ReAdressNr: 4,
            LiAdressNr: 4
        };
        this.apiService.addBestellung(bestellung);
    }

    AktualisierteBestellung(BestellNr: number, BestellStatus: string, BestellDatum: Date, LieferDatumGepkant: Date, VersandDatum: Date, KundenNr: number, ReAdressNr: number, LiAdressNr: number) {
        const bestellung: Bestellung = {
            BestellNr: 0,
            BestellStatus: "versendet",
            BestellDatum: 24.09 - 2017,
            LieferDatumGeplant: 29.09 - 2017,
            VersandDatum: 27.09 - 2017,
            KundenNr: 45,
            ReAdressNr: 4,
            LiAdressNr: 4
        };
        this.apiService.updateBestellung(bestellung);
    }
}
