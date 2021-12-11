import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import {Kunde} from "../../../models/kunde.model";
import {ApiService} from "../../../core/services/api.service";

@Component({
  selector: 'app-kunde-bearbeiten',
  templateUrl: './kunde-bearbeiten.component.html',
  styleUrls: ['./kunde-bearbeiten.component.css']
})
export class KundeBearbeitenComponent implements OnInit {
  validateForm!: FormGroup;
  public KundenNr: Kunde;

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

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
    console.log("Test");
  }
}
