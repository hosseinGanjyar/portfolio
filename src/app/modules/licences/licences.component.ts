import { Component, OnInit } from '@angular/core';
import { Licence } from '@app/core';

@Component({
  selector: 'app-licences',
  templateUrl: './licences.component.html',
  styleUrls: ['./licences.component.css'],
})
export class LicencesComponent implements OnInit {
  licences: Licence[];

  constructor() {}

  ngOnInit() {
    // get data of licences from service
    this.licences = [];
  }
}
