import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Bestellung} from "../../../models/bestellung.model";
import {ApiService} from "../../../core/services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-bestellung-bearbeiten',
    templateUrl: './bestellung-bearbeiten.component.html',
    styleUrls: ['./bestellung-bearbeiten.component.css']
})
export class BestellungBearbeitenComponent implements OnInit {
    bestellungForm: FormGroup;
    bestellung: Bestellung;
    StatusOptionen = [
        {label: 'eingegangen', value: 'eingegangen'},
        {label: 'in Bearbeitung', value: 'in Bearbeitung'},
        {label: 'abgeschlossen', value: 'abgeschlossen'}
    ];
    bestellDatum: any = null;
    lieferDatumGeplant: any = null;
    versandDatum: any = null;

    constructor(
        private fb: FormBuilder,
        private apiService: ApiService,
        private route: ActivatedRoute
    ) {
    }

    submitForm(): void {
        if (this.bestellungForm.valid) {
            console.log('submit', this.bestellungForm.value);
        } else {
            Object.values(this.bestellungForm.controls).forEach(control => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({onlySelf: true});
                }
            });
        }
    }

    onChange1(result: Date): void {
        console.log('onChange1: ', result);
    }

    onChange2(result: Date): void {
        console.log('onChange2: ', result);
    }

    onChange3(result: Date): void {
        console.log('onChange3: ', result);
    }

    ngOnInit(): void {
        const BestellId = this.route.snapshot.paramMap.get('id');
        this.apiService.getBestellung(BestellId).subscribe((bestellung) => {
            this.bestellung = bestellung;
            console.log(bestellung)
        });

        this.bestellungForm = this.fb.group({
            BestellNr: ['', Validators.pattern('[1-9]([0-9]*)')],
            BestellStatus: [''],
            BestellDatum: [''],
            LieferDatumGeplant: [''],
            VersandDatum: [''],
            KundenNr: ['', Validators.pattern('[1-9]([0-9]*)')],
            ReAdressNr: ['', Validators.pattern('[1-9]([0-9]*)')],
            LiAdressNr: ['', Validators.pattern('[1-9]([0-9]*)')],
        })
    }

}
