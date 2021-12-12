import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Kunde} from "../../../models/kunde.model";
import {ApiService} from "../../../core/services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-kunde-bearbeiten',
    templateUrl: './kunde-bearbeiten.component.html',
    styleUrls: ['./kunde-bearbeiten.component.css']
})
export class KundeBearbeitenComponent implements OnInit {
    kundeForm: FormGroup;
    kunde: Kunde;
    AnredeOptionen = [
        {label: 'Herr', value: 'Herr'},
        {label: 'Frau', value: 'Frau'}
    ];

    constructor(
        private fb: FormBuilder,
        private apiService: ApiService,
        private route: ActivatedRoute
    ) {
    }

    submitForm(): void {
        if (this.kundeForm.valid) {
            console.log('submit', this.kundeForm.value);
        } else {
            Object.values(this.kundeForm.controls).forEach(control => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({onlySelf: true});
                }
            });
        }
    }

    ngOnInit(): void {
        const KundenId = this.route.snapshot.paramMap.get('id');
        this.apiService.getKunde(KundenId).subscribe((kunde) => {
            this.kunde = kunde;
            console.log(kunde)
        });

        this.kundeForm = this.fb.group({
            KundenNr: ['', Validators.pattern('[1-9]([0-9]*)')],
            Anrede: [''],
            Vorname: [''],
            Nachname: [''],
            RechnungsadressNr: ['', Validators.pattern('[1-9]([0-9]*)')],
            LieferungsadressNr: ['', Validators.pattern('[1-9]([0-9]*)')],
        })
    }
}
