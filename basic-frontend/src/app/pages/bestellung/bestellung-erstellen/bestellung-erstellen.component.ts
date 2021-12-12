import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../core/services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Bestellung} from "../../../models/bestellung.model";
import {BestellungService} from "../../../_services/bestellung.service";

@Component({
    selector: 'app-bestellung-erstellen',
    templateUrl: './bestellung-erstellen.component.html',
    styleUrls: ['./bestellung-erstellen.component.css']
})
export class BestellungErstellenComponent implements OnInit {

    BestellungForm: FormGroup = new FormGroup({
        BestellStatus: new FormControl(),
        BestellDatum: new FormControl(),
        LieferDatumGeplant: new FormControl(),
        VersandDatum: new FormControl(),
        KundenNr: new FormControl(),
        ReAdressNr: new FormControl(),
        LiAdressNr: new FormControl(),
    });
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
        private BestellungService: BestellungService) {
    }

    submitForm(): void {
        if (this.BestellungForm.valid) {
            const bestellung: Bestellung = {
                BestellNr: this.bestellung.BestellNr,
                BestellStatus: this.BestellungForm.value.BestellStatus,
                BestellDatum: this.BestellungForm.value.BestellDatum,
                LieferDatumGeplant: this.BestellungForm.value.LieferDatumGeplant,
                VersandDatum: this.BestellungForm.value.VersandDatum,
                KundenNr: this.BestellungForm.value.KundenNr,
                ReAdressNr: this.BestellungForm.value.ReAdressNr,
                LiAdressNr: this.BestellungForm.value.LiAdressNr,
            }

            console.log(bestellung);
            console.log(this.bestellung);
            this.apiService.addBestellung(bestellung).subscribe(() => {
                this.router.navigate(['/bestellungen'])
            })
            console.log('submit', this.BestellungForm.value);
        } else {
            Object.values(this.BestellungForm.controls).forEach(control => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({onlySelf: true});
                }
            });
        }
    }

    ngOnInit(): void {
        this.BestellungForm = this.fb.group({
            BestellStatus: [''],
            BestellDatum: ['', Validators.pattern('^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$')],
            LieferDatumGeplant: ['', Validators.pattern('^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$')],
            VersandDatum: ['', Validators.pattern('^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$')],
            KundenNr: ['', Validators.pattern('[1-9]([0-9]*)')],
            ReAdressNr: ['', Validators.pattern('[1-9]([0-9]*)')],
            LiAdressNr: ['', Validators.pattern('[1-9]([0-9]*)')],
        })
    }

    addBestellung() {
        if (this.BestellungForm.valid) {
            const bestellung: Bestellung = {
                BestellNr: 0,
                BestellStatus: this.BestellungForm.value.BestellStatus,
                BestellDatum: this.BestellungForm.value.BestellDatum,
                LieferDatumGeplant: this.BestellungForm.value.LieferDatumGeplant,
                VersandDatum: this.BestellungForm.value.VersandDatum,
                KundenNr: this.BestellungForm.value.KundenNr,
                ReAdressNr: this.BestellungForm.value.ReAdressNr,
                LiAdressNr: this.BestellungForm.value.LiAdressNr,
            }

            console.log(bestellung);
            this.apiService.addBestellung(bestellung).subscribe(() => {
                this.router.navigate(['/bestellungen'])
            })

            console.log('submit', this.BestellungForm.value);
        } else {
            Object.values(this.BestellungForm.controls).forEach(control => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({onlySelf: true});
                }
            });
        }
    }
}
