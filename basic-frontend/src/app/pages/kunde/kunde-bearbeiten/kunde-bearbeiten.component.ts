import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import {Kunde} from "../../../models/kunde.model";
import {ApiService} from "../../../core/services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-kunde-bearbeiten',
  templateUrl: './kunde-bearbeiten.component.html',
  styleUrls: ['./kunde-bearbeiten.component.css']
})
export class KundeBearbeitenComponent implements OnInit {
  validateForm!: FormGroup;
  kunde: Kunde;

  constructor(private fb: FormBuilder, private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const KundenId = this.route.snapshot.paramMap.get('id');
    this.apiService.getKunde(KundenId).subscribe((kunde)  =>{
      this.kunde = kunde
      console.log(kunde)
    });

  }

}
