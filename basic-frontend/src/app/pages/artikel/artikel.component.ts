import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../core/services/api.service";
import {Artikel} from "../../models/artikel.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-artikel',
    templateUrl: './artikel.component.html',
    styleUrls: ['./artikel.component.css']
})
export class ArtikelComponent implements OnInit {

    public eintraege: Artikel[];
    public errorMessage: string = '';

    constructor(private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.apiService.getArtikel().subscribe(artikel => {
            this.eintraege = artikel;
        })
    }

    deleteArtikel(ArtikelNr: number) {
        this.apiService.deleteArtikel(ArtikelNr).subscribe(() => {
            this.apiService.getArtikel().subscribe(artikel => {
                this.eintraege = artikel;
            })
        }, (err: HttpErrorResponse) => {
            if (err.status === 409) {
                this.errorMessage = 'Artikel löschen nicht möglich, Artikel wird verwendet';
            }
        })
    }
}
