import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Artikel} from "../../../models/artikel.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-artikel-erstellen',
  templateUrl: './artikel-erstellen.component.html',
  styleUrls: ['./artikel-erstellen.component.css']
})
export class ArtikelErstellenComponent implements OnInit {

    ArtikelForm: FormGroup = new FormGroup( {
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
        private router: Router
    ) { }

    ngOnInit(): void {
        this.ArtikelForm = this.fb.group({
            ArtikelName: [''],
            ArtikelBeschreibung: ['', Validators.maxLength(250)],
            ArtikelPreis: ['', Validators.pattern('[1-9]([0-9]*).([0-9]{1,2})?')],
        })
    }

    addArtikel() {
        if (this.ArtikelForm.valid) {
            const artikel: Artikel = {
                ArtikelNr: 0,
                ArtikelName: this.ArtikelForm.value.ArtikelName,
                ArtikelBeschreibung: this.ArtikelForm.value.ArtikelBeschreibung,
                ArtikelPreis: this.ArtikelForm.value.ArtikelPreis,
            }

            this.apiService.addArtikel(artikel).subscribe(() => {
                this.router.navigate(['/artikel'])
            })

            console.log('submit', this.ArtikelForm.value);
        } else {
            Object.values(this.ArtikelForm.controls).forEach(control => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({onlySelf: true});
                }
            });
        }
    }

}
