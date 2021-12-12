import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from "../../../core/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {Artikel} from "../../../models/artikel.model";

@Component({
    selector: 'app-artikel-bearbeiten',
    templateUrl: './artikel-bearbeiten.component.html',
    styleUrls: ['./artikel-bearbeiten.component.css']
})
export class ArtikelBearbeitenComponent implements OnInit {
    artikelForm: FormGroup;
    artikel: Artikel;

    constructor(
        private fb: FormBuilder,
        private apiService: ApiService,
        private route: ActivatedRoute
    ) {
    }

    submitForm(): void {
        if (this.artikelForm.valid) {
            console.log('submit', this.artikelForm.value);
        } else {
            Object.values(this.artikelForm.controls).forEach(control => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({onlySelf: true});
                }
            });
        }
    }

    ngOnInit(): void {
        const ArtikelId = this.route.snapshot.paramMap.get('id');
        this.apiService.get1Artikel(ArtikelId).subscribe((artikel) => {
            this.artikel = artikel;
            console.log(artikel)
        });

        this.artikelForm = this.fb.group({
            ArtikelNr: ['', Validators.pattern('[1-9]([0-9]*)')],
            ArtikelName: [''],
            ArtikelBeschreibung: [''],
            ArtikelPreis: ['', Validators.pattern('[1-9]([0-9]*).([0-9]{2})')],
        })

    }
}
