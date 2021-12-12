import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from "../../../core/services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Artikel} from "../../../models/artikel.model";
import {ArtikelService} from "../../../_services/artikel.service";

@Component({
    selector: 'app-artikel-bearbeiten',
    templateUrl: './artikel-bearbeiten.component.html',
    styleUrls: ['./artikel-bearbeiten.component.css']
})
export class ArtikelBearbeitenComponent implements OnInit {
    alterArtikelForm: FormGroup = new FormGroup( {
        ArtikelName: new FormControl(),
        ArtikelBeschreibung: new FormControl(),
        ArtikelPreis: new FormControl()
    });
    artikel: Artikel = {
        ArtikelNr: 0,
        ArtikelName: '',
        ArtikelBeschreibung: '',
        ArtikelPreis: 0.00
    };

    constructor(
        private fb: FormBuilder,
        private apiService: ApiService,
        private route: ActivatedRoute,
        private router: Router,
        private ArtikelService: ArtikelService
    ) {
    }

    submitForm(): void {
        if (this.alterArtikelForm.valid) {
            const artikel: Artikel = {
                ArtikelNr: this.artikel.ArtikelNr,
                ArtikelName: this.alterArtikelForm.value.ArtikelName,
                ArtikelBeschreibung: this.alterArtikelForm.value.ArtikelBeschreibung,
                ArtikelPreis: this.alterArtikelForm.value.ArtikelPreis
            }

            console.log(artikel);

            this.apiService.updateArtikel(artikel).subscribe(() => {
                this.router.navigate(['/artikel'])
            })

            console.log('submit', this.alterArtikelForm.value);
        } else {
            Object.values(this.alterArtikelForm.controls).forEach(control => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({onlySelf: true});
                }
            });
        }
    }

    ngOnInit(): void {
        const ArtikelNr = this.route.snapshot.paramMap.get('ArtikelNr');
        this.apiService.get1Artikel(ArtikelNr).subscribe((artikel) => {
            this.artikel = artikel
        });

        this.alterArtikelForm = this.fb.group({
            ArtikelName: [''],
            ArtikelBeschreibung: ['', Validators.maxLength(250)],
            ArtikelPreis: ['', Validators.pattern('[1-9]([0-9]*).([0-9]{1,2})?')]
        })
    }
}
