import { Component, OnInit } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import {ApiService} from "../../core/services/api.service";
import {Artikel} from "../../models/artikel.model";

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.css']
})


export class ArtikelComponent implements OnInit {

//  public eintraege:Array<Artikel> = [];
  public eintraege: Artikel[];

  constructor(private apiService: ApiService) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.apiService.getArtikel().subscribe(artikel => {
      this.eintraege = artikel;
    })
  }

}

