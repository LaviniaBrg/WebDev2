import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import {Artikel} from "../../../models/artikel.model";
import {ApiService} from "../../../core/services/api.service";

@Component({
  selector: 'app-artikel-bearbeiten',
  templateUrl: './artikel-bearbeiten.component.html',
  styleUrls: ['./artikel-bearbeiten.component.css']
})
export class ArtikelBearbeitenComponent implements OnInit {
  validateForm: FormGroup;

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
