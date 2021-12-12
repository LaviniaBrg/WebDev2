import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../core/services/api.service";
import {Kunde} from "../../models/kunde.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-kunde',
    templateUrl: './kunde.component.html',
    styleUrls: ['./kunde.component.css']
})
export class KundeComponent implements OnInit {

    public eintraege: Kunde[];
    public errorMessage: string = '';

    constructor(private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.apiService.getKunden().subscribe(kunde => {
            this.eintraege = kunde;
        })
    }

    deleteKunde(KundeNr: number) {
        this.apiService.deleteKunde(KundeNr).subscribe(() => {
            this.apiService.getKunden().subscribe(kunde => {
                this.eintraege = kunde;
            })
        }, (err: HttpErrorResponse) => {
            if (err.status === 409) {
                this.errorMessage = 'Kunde löschen nicht möglich, Kunde wird verwendet';
            }
        })
    }
}
