import { Component, OnInit } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { Eintrag } from '../../models/eintrag.model'

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.css']
})
export class ArtikelComponent implements OnInit {

  public eintraege:Array<Eintrag> = [{Nummer: 1, Name: 'Haare', Beschreibung: 'voll toll', Preis: 99.99},
                                      {Nummer: 2, Name: 'Shampoo', Beschreibung: 'glänzend', Preis: 13.99}];

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}

