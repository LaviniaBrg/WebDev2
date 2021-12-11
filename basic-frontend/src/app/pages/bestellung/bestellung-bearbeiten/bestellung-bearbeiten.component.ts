import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import {Bestellung} from "../../../models/bestellung.model";
import {ApiService} from "../../../core/services/api.service";

@Component({
  selector: 'app-bestellung-bearbeiten',
  templateUrl: './bestellung-bearbeiten.component.html',
  styleUrls: ['./bestellung-bearbeiten.component.css']
})
export class BestellungBearbeitenComponent implements OnInit {
  validateForm!: FormGroup;
  public BestellNr: Bestellung;

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    console.log("Test");
  }

}
