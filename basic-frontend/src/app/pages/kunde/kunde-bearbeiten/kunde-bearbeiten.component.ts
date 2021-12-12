import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Kunde} from "../../../models/kunde.model";
import {ApiService} from "../../../core/services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {KundenService} from "../../../_services/kunden.service";

@Component({
    selector: 'app-kunde-bearbeiten',
    templateUrl: './kunde-bearbeiten.component.html',
    styleUrls: ['./kunde-bearbeiten.component.css']
})
export class KundeBearbeitenComponent implements OnInit {
    alterKundenForm: FormGroup = new FormGroup({
        KundenAnrede: new FormControl(),
        KundenVorname: new FormControl(),
        KundenNachname: new FormControl(),
        ReAdressNr: new FormControl(),
        LiAdressNr: new FormControl()
    });
    kunde: Kunde = {
        KundenNr: 0,
        KundenAnrede: '',
        KundenVorname: '',
        KundenNachname: '',
        ReAdressNr: 0,
        LiAdressNr: 0
    }

    AnredeOptionen = [
        {label: 'Frau', value: 'Frau'},
        {label: 'Herr', value: 'Herr'}
    ];

    constructor(
        private fb: FormBuilder,
        private apiService: ApiService,
        private route: ActivatedRoute,
        private router: Router,
        private KundenService: KundenService
    ) {
    }

    submitForm(): void {
        if (this.alterKundenForm.valid) {
            const kunde: Kunde = {
                KundenNr: this.kunde.KundenNr,
                KundenAnrede: this.alterKundenForm.value.KundenAnrede,
                KundenVorname: this.alterKundenForm.value.KundenVorname,
                KundenNachname: this.alterKundenForm.value.KundenNachname,
                ReAdressNr: this.alterKundenForm.value.ReAdressNr,
                LiAdressNr: this.alterKundenForm.value.LiAdressNr
            }

            console.log(kunde);

            this.apiService.updateKunde(kunde).subscribe( () => {
                this.router.navigate(['/kunden'])
            })

            console.log('Submit', this.alterKundenForm.value);
        } else {
            Object.values(this.alterKundenForm.controls).forEach(control => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({onlySelf: true});
                }
            });
        }
    }

    ngOnInit(): void {
        const KundenNr = this.route.snapshot.paramMap.get('KundenNr');
        this.apiService.get1Kunde(KundenNr).subscribe((kunde) => {
            this.kunde = kunde
        });

        this.alterKundenForm = this.fb.group({
            KundenAnrede: [''],
            KundenVorname: [''],
            KundenNachname: [''],
            ReAdressNr: ['', Validators.pattern('[1-9]([0-9]*)')],
            LiAdressNr: ['', Validators.pattern('[1-9]([0-9]*)')],
        })
    }
}
