import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Bestellung} from "../../../models/bestellung.model";
import {ApiService} from "../../../core/services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BestellungService} from "../../../_services/bestellung.service";

@Component({
    selector: 'app-bestellung-bearbeiten',
    templateUrl: './bestellung-bearbeiten.component.html',
    styleUrls: ['./bestellung-bearbeiten.component.css']
})
export class BestellungBearbeitenComponent implements OnInit {
    alterBestellungForm: FormGroup = new FormGroup({
        BestellStatus: new FormControl(),
        BestellDatum: new FormControl(),
        LieferDatumGeplant: new FormControl(),
        VersandDatum: new FormControl(),
        ReAdressNr: new FormControl(),
        LiAdressNr: new FormControl(),
        }
    );
    bestellung: Bestellung = {
        BestellNr: 0,
        BestellStatus: '',
        BestellDatum: '',
        LieferDatumGeplant: '',
        VersandDatum: '',
        KundenNr: 0,
        ReAdressNr: 0,
        LiAdressNr: 0,
    };
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
        private route: ActivatedRoute,
        private router: Router,
        private BestellungService: BestellungService
    ) {
    }

    submitForm(): void {
        if (this.alterBestellungForm.valid) {
            const bestellung: Bestellung = {
                BestellNr: this.bestellung.BestellNr,
                BestellStatus: this.alterBestellungForm.value.BestellStatus,
                BestellDatum: this.alterBestellungForm.value.BestellDatum,
                LieferDatumGeplant: this.alterBestellungForm.value.LieferDatumGeplant,
                VersandDatum: this.alterBestellungForm.value.VersandDatum,
                KundenNr: this.bestellung.KundenNr,
                ReAdressNr: this.alterBestellungForm.value.ReAdressNr,
                LiAdressNr: this.alterBestellungForm.value.LiAdressNr,
            }

            console.log(bestellung);

            this.apiService.updateBestellung(bestellung).subscribe(() => {
                this.router.navigate(['/bestellungen'])
            })
            console.log('submit', this.alterBestellungForm.value);
        } else {
            Object.values(this.alterBestellungForm.controls).forEach(control => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({onlySelf: true});
                }
            });
        }
    }

    ngOnInit(): void {
        const BestellNr = parseInt(this.route.snapshot.paramMap.get('BestellNr'));
        this.apiService.getBestellung(BestellNr).subscribe((bestellung) => {
            console.log(bestellung);
            this.bestellung = bestellung;
        });

        this.alterBestellungForm = this.fb.group({
            BestellStatus: [''],
            BestellDatum: ['', Validators.pattern('^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$')],
            LieferDatumGeplant: ['', Validators.pattern('^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$')],
            VersandDatum: ['', Validators.pattern('^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$')],
            ReAdressNr: ['', Validators.pattern('[1-9]([0-9]*)')],
            LiAdressNr: ['', Validators.pattern('[1-9]([0-9]*)')],
        })
    }

}
