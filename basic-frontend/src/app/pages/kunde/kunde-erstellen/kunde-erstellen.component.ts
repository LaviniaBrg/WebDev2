import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Kunde} from "../../../models/kunde.model";
import {ApiService} from "../../../core/services/api.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-kunde-erstellen',
    templateUrl: './kunde-erstellen.component.html',
    styleUrls: ['./kunde-erstellen.component.css']
})
export class KundeErstellenComponent implements OnInit {

    KundenForm: FormGroup = new FormGroup({
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
    };

    AnredeOptionen = [
        {label: 'Frau', value: 'Frau'},
        {label: 'Herr', value: 'Herr'}
    ];

    constructor(
        private fb: FormBuilder,
        private apiService: ApiService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.KundenForm = this.fb.group({
            KundenAnrede: [''],
            KundenVorname: [''],
            KundenNachname: [''],
            ReAdressNr: ['', Validators.pattern('[1-9]([0-9]*)')],
            LiAdressNr: ['', Validators.pattern('[1-9]([0-9]*)')],
        })
    }

    addKunde(){
        console.log(this.KundenForm);
        if(this.KundenForm.valid){
            const kunde: Kunde = {
                KundenNr: 0,
                KundenAnrede: this.KundenForm.value.KundenAnrede,
                KundenVorname: this.KundenForm.value.KundenVorname,
                KundenNachname: this.KundenForm.value.KundenNachname,
                ReAdressNr: this.KundenForm.value.ReAdressNr,
                LiAdressNr: this.KundenForm.value.LiAdressNr
            }

            console.log(kunde);
            console.log(this.kunde);

            this.apiService.addKunde(kunde).subscribe( () => {
                this.router.navigate(['/kunden'])
            })

            console.log('submit', this.KundenForm.value);
        } else{
            Object.values(this.KundenForm.controls).forEach(control => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({onlySelf: true});
                }
            });
        }
    }

}
