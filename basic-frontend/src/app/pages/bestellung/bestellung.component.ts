import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../core/services/api.service";
import {Bestellung} from "../../models/bestellung.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-bestellung',
    templateUrl: './bestellung.component.html',
    styleUrls: ['./bestellung.component.css']
})
export class BestellungComponent implements OnInit {

    public eintraege: Bestellung[];
    public errorMessage: string = '';

    constructor(private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.apiService.getBestellungen().subscribe(bestellung => {
            this.eintraege = bestellung;
        })
    }

    deleteBestellung(BestellNr: number) {
        this.apiService.deleteBestellung(BestellNr).subscribe(() => {
            this.apiService.getBestellungen().subscribe(bestellung => {
                this.eintraege = bestellung;
            })
        }, (err: HttpErrorResponse) => {
            if (err.status === 409) {
                this.errorMessage = 'Bestellung löschen nicht möglich, sie wird bereits verwendet';
            }
        })
    }
}
